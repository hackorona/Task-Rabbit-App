import React, { useState, useEffect } from "react";
import NewOffer from "../../Layout/NewOffer";
import NewRequest from "../../Layout/NewRequest";
import OfferHelpList from "../../Layout/OfferHelpList";
import RequestHelpList from "../../Layout/RequestHelpList";
import Map from "../../Layout/Map";
import deeds from "./deeds-mocks";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import "./Deeds.scss";
import ToggleButton from "react-toggle-button";

const HELP_URL = "help";
const requests = deeds.filter(deed => deed.isRequest);
const offers = deeds.filter(deed => !deed.isRequest);

export default function() {
  const [shouldShowMap, toggleMap] = useState(true);
  const [position, setPosition] = useState([32, 34]);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [toggleOffer, setToggleOffer] = useState(false);
  const { path, url } = useRouteMatch();
  //get user current position

  useEffect(() => {
    /// to do axios call to server to get offer/help
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setPosition([coords.latitude, coords.longitude]),
      undefined,
      { enableHighAccuracy: true }
    );
  }, []);
  return (
    <section className="deeds-page">
      <div className="row">
        <div>
          {/*offer and request modals  */}
          {toggleOffer && <NewOffer onClose={setToggleOffer} />}
          {toggleRequest && <NewRequest onClose={setToggleRequest} />}
          <section className="links">
            <div>
              {/* sub menu */}
              <NavLink to={`${url}/${HELP_URL}`} className="mr40">
                Offer to help
              </NavLink>
              <NavLink to={`${url}/be-helped`}>Request help</NavLink>
            </div>
            <div>
              <NavLink to={`${url}/messages`} className="mr40" >messages </NavLink>
              <NavLink to={`${url}/tasks`} className="mr8">My tasks</NavLink>
            </div>
          </section>
          <hr className="links-divider" />
        </div>
        <div className="deeds-page__right-section">
          <div className="deeds-page__btns-container">

          <button className="btn bg-primary btn__new" onClick={() => setToggleOffer(true)}>
            Offer help 
          </button>
          <button className="btn bg-primary btn__new"  onClick={() => setToggleRequest(true)}>
            Request help 
          </button>
          </div>
          
          <div className="toggle">
            <span>show map?</span>
            <ToggleButton
              inactiveLabel=""
              activeLabel=""
              value={shouldShowMap}
              onToggle={value => toggleMap(!value)}
              colors={{ active: { base: "#fd6064" } }}
            />
          </div>
        </div>
      </div>

      <div className="row main-content">
        <div className="sub-route">
          <Switch>
            <Redirect exact from={path} to={`${path}/help`} />
            <Route path={`${path}/help`}>
              <OfferHelpList offers={offers} />
            </Route>
            <Route path={`${path}/be-helped`}>
              <RequestHelpList requests={requests} />
            </Route>
            <Route path={`${path}/tasks`}>tasks!</Route>
          </Switch>
        </div>
        {/* map area */}
        <Map
          center={position}
          zoom={14}
          attributionControl={false}
          className={shouldShowMap && "show"}
        />
      </div>
    </section>
  );
}

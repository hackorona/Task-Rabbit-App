import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {Switch, Route, NavLink, useRouteMatch, Redirect} from "react-router-dom";
import "./Deeds.scss";
import ToggleButton from "react-toggle-button";

//modals
import NewOffer from "../../Layout/NewOffer";
import NewRequest from "../../Layout/NewRequest";
import NotLoginModal from "../../Layout/NotLoginModal";

//layout
import OfferHelpList from "../../Layout/OfferHelpList";
import RequestHelpList from "../../Layout/RequestHelpList";
import MyTasksList from '../../Layout/MyTaskList';
import Map from "../../Layout/Map";


export default function () {
  const [requests, setRequests] = useState("");
  const [offers, setOffers] = useState("");
  const [myTasks, setMyTasks] = useState("");

  // booleans variables
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowMap, toggleMap] = useState(true);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [toggleNotLogin, setToggleNotLogin] = useState(false);
  const [toggleOffer, setToggleOffer] = useState(false);

  const [position, setPosition] = useState([32, 34]);
  const { path, url } = useRouteMatch();
  const isConnected = useSelector(state => state.isConnected);
  const userData = useSelector(state => state.user);
  const userId = userData._id;

  const fetchDeeds = async () => {
    try {
      const url = "http://localhost:3001/getDeeds";
      const res = await axios.get(url);
      const totalDeeds = res.data;
      setRequests(totalDeeds.filter(el => el.type === 2));
      setOffers(totalDeeds.filter(el => el.type === 1));
      setMyTasks(
        totalDeeds.filter(
          el =>
            el.userId === userId ||
            el.acceptedOfferId === userId ||
            el.acceptedRequestId === userId
        )
      );

      setIsLoading(false);
    } catch (e) {
      console.log("faild to fetch deeds");
    }
  };
  //init
  useEffect(() => {
    fetchDeeds();
    navigator.geolocation.getCurrentPosition(
      //get user current position
      ({ coords }) => setPosition([coords.latitude, coords.longitude]),
      undefined,
      { enableHighAccuracy: true }
    );
  }, []);

  const handleHelpClick = btnType => {
    if (!isConnected) {
      setToggleNotLogin(true);
    }
  };
  const handleNewRequest = () => {
    if (isConnected) setToggleRequest(true);
    else setToggleNotLogin(true);
  };
  const handleNewOffer = () => {
    if (isConnected) setToggleOffer(true);
    else setToggleNotLogin(true);
  };
    return (
      <section className="deeds-page">
        <div className="row">
          <div>

            {/* modals  */}
            {toggleNotLogin && <NotLoginModal onClose={setToggleNotLogin} />}
            {toggleOffer && (
              <NewOffer onClose={setToggleOffer} userId={userId} />
            )}
            {toggleRequest && (
              <NewRequest onClose={setToggleRequest} userId={userId} />
            )}
            <section className="links">
              <div>
                {/* sub menu */}
                <NavLink to={`${url}/help`} className="mr40">
                  Offer to help
                </NavLink>
                <NavLink to={`${url}/be-helped`}>Help requests</NavLink>
              </div>
              <div>
                <NavLink to={`${url}/tasks`} className="mr8">
                  My tasks
                </NavLink>
              </div>
            </section>
            <hr className="links-divider" />
          </div>
          <div className="deeds-page__right-section">
            <div className="deeds-page__btns-container">
              <button
                className="btn bg-primary btn__new"
                onClick={handleNewOffer}>
                Offer help
              </button>
              <button
                className="btn bg-primary btn__new"
                onClick={handleNewRequest}>
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
        {/* main route area */}
        <div className="row main-content">
          <div className="sub-route">
            <Switch>
              <Redirect exact from={path} to={`${path}/help`} />
              <Route path={`${path}/help`}>
                <OfferHelpList offers={offers} />
              </Route>
              <Route path={`${path}/be-helped`}>
                <RequestHelpList
                  requests={requests}
                  handleHelpClick={handleHelpClick}
                />
              </Route>
              <Route path={`${path}/tasks`}>
                <MyTasksList myTasks={myTasks} />
              </Route>
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

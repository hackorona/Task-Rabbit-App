import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
//modals
import NewOffer from "../../Layout/NewOffer";
import NewRequest from "../../Layout/NewRequest";
import NotLoginModal from "../../Layout/NotLoginModal";
//layout
import OfferHelpList from "../../Layout/OfferHelpList";
import RequestHelpList from "../../Layout/RequestHelpList";
import MyTasksList from "../../Layout/MyTaskList";
import Map from "../../Layout/Map";

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

export default function() {
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
      const res = await axios.get("http://localhost:3001/getDeeds");
      const totalDeeds = res.data;
      let [tempRequests, tempOffers, tempMyTasks] = [[], [], []];
      totalDeeds.forEach(deed => {
        if (
          deed.userId === userId ||
          deed.acceptedOfferId === userId ||
          deed.acceptedRequestId === userId
        ) {
          tempMyTasks.push(deed);
        }else if(deed.type===2){tempRequests.push(deed);
        }else{tempOffers.push(deed)}
      });

      setRequests(tempRequests);
      setOffers(tempOffers);
      setMyTasks(
        tempMyTasks
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

  //when user help another one
  const handleGetItDoneClick = async requestHelpId => {
    if (!isConnected) {
      setToggleNotLogin(true);
    }
    //open modal that says good for taking this task
    else {
      try {
        const res = axios.post("http://localhost:3001/deeds/assignToRequest", {
          requestHelpId,
          userId
        });
      } catch (e) {
        console.log("error in get it done press");
      }
    }
  };
  //when user take offer from another user(being helped)
  const handleUseOfferClick = offerHelpId => {
    if (!isConnected) {
      setToggleNotLogin(true);
    } else {
      try {
        const res = axios.post("http://localhost:3001/deeds/assignToOffer", {
          offerHelpId,
          userId
        });
      } catch (e) {
        console.log("error in get it done press");
      }
    }
    console.log("handling offer help id is", offerHelpId);
    // call server to update task to the user as helped
    //needed userId andtask id
  };
  const handleNewRequest = () => {
    if (isConnected) setToggleRequest(true);
    else setToggleNotLogin(true);
  };
  const handleNewOffer = () => {
    if (isConnected) setToggleOffer(true);
    else setToggleNotLogin(true);
  };
  if (isLoading) return <h1>Loading...</h1>;
  else
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
                <NavLink to={`${url}/${HELP_URL}`} className="mr40">
                  Help offers
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
                onClick={handleNewOffer}
              >
                Offer help
              </button>
              <button
                className="btn bg-primary btn__new"
                onClick={handleNewRequest}
              >
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
                <OfferHelpList
                  offers={offers}
                  handleUseOfferClick={handleUseOfferClick}
                />
              </Route>
              <Route path={`${path}/be-helped`}>
                <RequestHelpList
                  requests={requests}
                  handleGetItDoneClick={handleGetItDoneClick}
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

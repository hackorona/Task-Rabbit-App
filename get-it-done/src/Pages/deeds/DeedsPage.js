import React, { useState, useEffect,  } from "react";
import { useSelector,useDispatch } from "react-redux";
// import {addTaskPoints} from '../../Store/actions/actionCreators'
import axios from "axios";
import {
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import "./Deeds.scss";
import ToggleButton from "react-toggle-button";

//modals
import NewOffer from "../../Layout/NewOffer";
import NewRequest from "../../Layout/NewRequest";
import NotLoginModal from "../../Layout/NotLoginModal";
import TakeTaskModal from "../../Layout/take-task/TakeTaskModal";
import AcceptRequestModal from "../../Layout/accept-request/AcceptRequest";
import TaskCompletedModal from "../../Layout/task-completed/TaskCompletedModal";

//layout
import OfferHelpList from "../../Layout/OfferHelpList";
import RequestHelpList from "../../Layout/RequestHelpList";
import MyTasksList from "../../Layout/MyTaskList";
import Map from "../../Layout/Map";

export default ()=> {
  const dispatch = useDispatch();
  const [requests, setRequests] = useState("");
  const [offers, setOffers] = useState("");
  const [myTasks, setMyTasks] = useState("");

  // booleans variables
  const [isLoading, setIsLoading] = useState(true);
  const [shouldShowMap, toggleMap] = useState(true);
  const [toggleRequest, setToggleRequest] = useState(false);
  const [toggleNotLogin, setToggleNotLogin] = useState(false);
  const [toggleOffer, setToggleOffer] = useState(false);
  const [toggleTakeTask, setToggleTakeTask] = useState(false);
  const [toggleAcceptRequest, setToggleAcceptRequest] = useState(false);
  const [toggleTaskCompleted, setToggleTaskCompleted] = useState(false);

  const [position, setPosition] = useState([32, 34]);
  const { path, url } = useRouteMatch();
  const isConnected = useSelector(state => state.isConnected);
  const userData = useSelector(state => state.user);
  const userId = userData._id;

  const fetchDeeds = async () => {
    setIsLoading(true);
    try {
       const res = await axios.get("http://localhost:3001/getDeeds");
      const totalDeeds = res.data;
      let [tempRequests, tempOffers, tempMyTasks] = [[], [], []];
      totalDeeds.forEach(deed => {
        if (
          userId &&
          (deed.userId === userId ||
            deed.acceptedOfferId === userId ||
            deed.acceptedRequestId === userId)
        ) {
          tempMyTasks.push(deed);
        } else if (deed.type === 2) {
          tempRequests.push(deed);
        } else {
          tempOffers.push(deed);
        }
      });

      setRequests(tempRequests);
      setOffers(tempOffers);
      setMyTasks(tempMyTasks);

      setIsLoading(false);
    } catch (e) {
      console.log("faild to fetch deeds");
    }
  };
  //init
  useEffect(() => {
    fetchDeeds();

    // navigator.geolocation.getCurrentPosition(
    //   //get user current position
    //   ({ coords }) => setPosition([coords.latitude, coords.longitude]),
    //   undefined,
    //   { enableHighAccuracy: true }
    // );
  }, [isConnected]);

  //when user help another one
  const handleGetItDoneClick = async requestHelpId => {
    if (!isConnected) {
      setToggleNotLogin(true);
    }
    
    else {
      setToggleTakeTask(true)
      try {
        const res = axios.post("http://localhost:3001/deeds/assignToRequest", {
          requestHelpId,
          userId
        });
        fetchDeeds();
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
  const handleFinishTaskClick=(requestId)=>{
    if (!isConnected) {
      setToggleNotLogin(true);
    }
    
    else {
      setToggleTaskCompleted(true);
      dispatch({
        type: "ADD_TASK_POINTS"
      });
      try {
        // const res = axios.post("http://localhost:3001/deeds/assignToRequest", {
        //   requestHelpId,
        //   userId
        // });
        fetchDeeds();
      } catch (e) {
        console.log("error in get it done press");
      }
    }

  }
  const handleNewRequest = () => {
    if (isConnected) {

      setToggleRequest(true)}
    else {
      setToggleNotLogin(true)};
  };
  const handleNewOffer = () => {
    if (isConnected) setToggleOffer(true);
    else setToggleNotLogin(true);
  };
  if (isLoading) return <h1>Loading...</h1>;
  else
    return (
      <section className="deeds-page fade-in">
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
            {toggleTakeTask && <TakeTaskModal onClose={setToggleTakeTask} />}
           {toggleAcceptRequest &&<AcceptRequestModal onClose={setToggleAcceptRequest}/>}
           {toggleTaskCompleted &&<TaskCompletedModal onClose={setToggleTaskCompleted}/>}
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
            {isLoading ? (
              "loading"
            ) : (
              <Switch>
                <Redirect exact from={path} to={`${path}/help`} />
                <Route path={`${path}/help`}>
                  <OfferHelpList
                    offers={offers}
                    handleUseOfferClick={handleUseOfferClick}
                  />
                </Route>
                <Route path={`${path}/be-helped`}>
                  <RequestHelpList className="fade-in"
                    requests={requests}
                    handleGetItDoneClick={handleGetItDoneClick}
                  />
                </Route>
                <Route path={`${path}/tasks`}>
                  <MyTasksList myTasks={myTasks} handleFinishTaskClick={handleFinishTaskClick} />
                </Route>
              </Switch>
            )}
          </div>
          {/* map area */}
          <Map
            center={[32.079513, 34.778666]}
            zoom={18}
            attributionControl={false}
            className={shouldShowMap && "show"}
          />
        </div>
      </section>
    );
}

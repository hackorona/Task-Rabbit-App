import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

//modals
import SignInModal from "./SignInModal";
import JoinModal from "./JoinModal";

import { login,logout } from '../Store/actions/actionCreators';
import storageService from "../services/storageService";

const Navbar = props => {

  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.isConnected);
  const score = useSelector(state => state.score);
  const user = useSelector(state => state.user);
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  //onMount
  useEffect(() => {
    const USER_DATA = 'USERDATA';
    const userFromStorage = storageService.loadFromStorage(USER_DATA);
    if (userFromStorage) {
      dispatch(login(userFromStorage));
    }
  }, [])
const handleLogout=()=>{
  dispatch(logout);

}
  return (
    <section className="navbar">
      <div>
        <button className="nav-item">
          call
      </button>
      </div>
      <div  className="deeds-logo">
        <img src="https://res.cloudinary.com/explority/image/upload/v1586087789/deeds_logo_fftqxy.png" alt="deeds-logo"/>
      </div>
      <div style={{ justifyContent: 'flex-end' }}>
        {isConnected ? (<span className="connected-box">
          <p>{score} Coins</p>   
          <p onClick={handleLogout}>Logout</p>   
          <span className="user-img"><img src="https://res.cloudinary.com/explority/image/upload/v1556370946/review2_acdcli.jpg"/></span>
        </span>
        ) : (<>
          <button
            className="nav-item"
            onClick={() => setIsSignOpen(isSignOpen => !isSignOpen)}>
            log in
        </button>
          <button
            className="nav-item"
            onClick={() => setIsJoinOpen(isJoinOpen => !isJoinOpen)}>
            Sign up
        </button>

          {isSignOpen && <SignInModal onClose={setIsSignOpen} />}
          {isJoinOpen && <JoinModal onClose={setIsJoinOpen} />}
        </>)}
      </div>
    </section>
  );
};
export default withRouter(Navbar);

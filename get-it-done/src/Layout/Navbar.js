import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
//modals
import SignInModal from "./SignInModal";
import JoinModal from "./JoinModal";

import  {login} from '../Store/actions/actionCreators';
import storageService from "../services/storageService";

const Navbar = props => {

  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.isConnected);
  const user = useSelector(state => state.user); 
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

 //onMount
 useEffect(()=>{
  const USER_DATA='USERDATA';
  const userFromStorage=storageService.loadFromStorage(USER_DATA);
  if(userFromStorage)
  {
    dispatch(login(userFromStorage));
  }
  

},[])

  return (
    <section className="navbar">
      <div className="navbar__logo-box">
        <img src="https://res.cloudinary.com/explority/image/upload/v1585173960/favicon_y7yun4.png" />
      </div>
      <div className="navbar__nav-items">
        <NavLink to="/" className="nav-item">
          Homepage
        </NavLink>
        <NavLink to="/deeds" className="nav-item">
          deeds
        </NavLink>
        {isConnected ? (
          <span><p>hello {user.username}!</p></span>
        ) : (
          <span>
            {" "}
            <button
              className="nav-item"
              onClick={() => setIsSignOpen(isSignOpen => !isSignOpen)}
            >
              Sign-in
            </button>
            <button
              className="nav-item"
              onClick={() => setIsJoinOpen(isJoinOpen => !isJoinOpen)}
            >
              join
            </button>
          </span>
        )}

        {isSignOpen && <SignInModal onClose={setIsSignOpen} />}
        {isJoinOpen && <JoinModal onClose={setIsJoinOpen} />}
      </div>
    </section>
  );
};
export default withRouter(Navbar);

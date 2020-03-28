import React, { useState } from "react";
import { useSelector } from "react-redux";

import { NavLink, withRouter } from "react-router-dom";
//modals
import SignInModal from "./SignInModal";
import JoinModal from "./JoinModal";

const Navbar = props => {
  const [isSignOpen, setIsSignOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  {
    console.log(
      "username is",
      useSelector(state => state.user.name)
    );
  }

  return (
    <section className="navbar">
      <div>
        <button className="nav-item">
          call
      </button>
      </div>
      <div style={{justifyContent: 'center'}}>
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585391297/img/logo_d6ciuu.png" />
      </div>
      <div style={{justifyContent: 'flex-end'}}>
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
      </div>
    </section>
  );
};
export default withRouter(Navbar);

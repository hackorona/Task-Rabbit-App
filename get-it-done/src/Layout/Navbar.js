import React,{useState} from "react";
import {useSelector } from "react-redux";
import SignInModal from './SignInModal';
import JoinModal from './JoinModal';

export default () => {
    const [isSignOpen,setIsSignOpen]=useState(false);
    const [isJoinOpen,setIsJoinOpen]=useState(false);
    {console.log( 'username is',useSelector(state => state.user.name))}

  return <section className="navbar">
      <div className="navbar__logo-box">
        <img src="https://res.cloudinary.com/explority/image/upload/v1585173960/favicon_y7yun4.png"/>
      </div>
      <div className="navbar__nav-items">
        <button href="" className="nav-item" onClick={()=>setIsSignOpen(isSignOpen=>!isSignOpen)}>Sign-in</button> 
        <button href="" className="nav-item" onClick={()=>setIsJoinOpen(isJoinOpen=>!isJoinOpen)}>join</button>           
        {isSignOpen && <SignInModal onClose={setIsSignOpen}/>}   
        {isJoinOpen &&<JoinModal onClose={setIsJoinOpen}/>}       
      </div>
  </section>;
};

import React,{useState} from "react";
import axios from 'axios';

export default props => {
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const handleSubmit=async (e)=>{
      e.preventDefault();
      //todo:send request to server  for login
    }
  return (
    <section className="sign-in">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="sign-in__container">
        <h1 className="heading-sub"> Sign-in </h1>
        <form className="u-form"onSubmit={handleSubmit}>
        <label name="username">username</label>
        <input className="u-input-style" name="username" type="text" onChange={e=>setUsername(e.target.value)}/>
        <label name="password">password</label>
        <input className="u-input-style" type="text" name="password"  onChange={e=>setPassword(e.target.value)}/>
        <button>Go</button>
        </form>
      </div>
    </section>
  );
};

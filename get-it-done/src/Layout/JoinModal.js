import React,{useState} from "react";
import axios from 'axios';

export default props => {
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email,setEmail]=useState('')
    const handleSubmit=async (e)=>{
      e.preventDefault();
      //todo:send request to server  for register
    }
  return (
    <section className="join">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="join__container">
        <h1 className="heading-sub"> Sign-in </h1>
        <form  className="u-form" onSubmit={handleSubmit}>
        <label name="username">username</label>
        <input className="u-input-style" name="username" type="text" onChange={e=>setUsername(e.target.value)}/>
        <label name="password">password</label>
        <input className="u-input-style" type="text" name="password"  onChange={e=>setPassword(e.target.value)}/>
        <label name="confirm-password">Confirm password</label>
        <input className="u-input-style" type="text" name="confirm-password"  onChange={e=>setConfirmPassword(e.target.value)}/>
        <label name="email">Email</label>
        <input className="u-input-style" type="text" name="email"  onChange={e=>setEmail(e.target.value)}/>
        <button>Go</button>
        </form>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions/actionCreators";
export default props => {
  const dispatch = useDispatch();
  const { onClose } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    if (username && password) {
      const credentials = { username, password };
      const url = "http://localhost:3001/user/login";
      try {
        const res = await axios.post(url, credentials);
        console.log("success login", res.data);
        dispatch(login(res.data));
        onClose(false);
      } catch (e) {
        console.log("error in  login");
        //clear fields faild login
      }
    }
  };
  return (
    <section className="sign-in">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="sign-in__container">
        <h1 className="sign-in__title t-sub-header"> Sign-in! </h1>
        <div className="sign-in__input-wrapper">
          <p className="sign-in__sub-title">Sign-in to get started!</p>
          <form className="u-form" onSubmit={handleSubmit}>
            <input
              placeholder="Phone-Number"
              className="u-input-style"
              type="text"
              onChange={e => setUsername(e.target.value)}
            />
            <input
              placeholder="Password"
              className="u-input-style"
              type="text"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
            <p className="sign-in__bottom-text">First time here? sign up here </p>
            <div className="sign-in__btn-container">
              <button type="submit" className="u-submit-btn">
                Get-Started!
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import axios from "axios";
export default props => {
  const { onClose } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("");
  const [type, setType] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    if (title && description && location && urgency && type) {
      const userId = "das123";
      console.log({ userId, title, description, location, urgency, type });
      const reqData = { userId, title, description, location, urgency, type };
      const url = "http://localhost:3001/deeds/addDeed";
      // try{
      //   const res=await axios.post(url,reqData);
      //   console.log('success login',res.data);
      //   onClose(false);
      // }catch(e){
      //   console.log('error in  login')
      //   //clear fields faild login
      // }
    }
  };
  return (
    <section className="new-request">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="u-modal-container new-request__wrapper">
        <h1 className="sub-header"> New request</h1>
        <div className="new-request__wrapper-sub">
          <h3 className="strong-text">Request help</h3>
          <form className="u-form" onSubmit={handleSubmit}>
            <div class="type-radio-button-wrapper">
              {/* ////////type-option radio button */}
              <input
                type="radio"
                className="stv-radio-button"
                name="radioButtonKind"
                value="1"
                id="button1"
                defaultChecked
              />
              <label
                for="button1"
                className="radio-label"
                onClick={() => setType("pets")}
              >
                Pets
              </label>
              <input
                type="radio"
                className="stv-radio-button"
                name="radioButtonKind"
                value="2"
                id="button2"
              />
              <label
                for="button2"
                className="radio-label"
                onClick={() => setType("groceries")}
              >
                Groceries
              </label>
              <input
                type="radio"
                className="stv-radio-button"
                name="radioButtonKind"
                value="3"
                id="button3"
              />
              <label
                for="button3"
                className="radio-label"
                onClick={() => setType("medical")}
              >
                Medical
              </label>
              <input
                type="radio"
                className="stv-radio-button"
                name="radioButtonKind"
                value="4"
                id="button4"
              />
              <label
                for="button4"
                className="radio-label"
                onClick={() => setType("other")}
              >
                Other
              </label>
            </div>
            <input
              placeholder="Title ( max 1o words )"
              className="u-input-style"
              name="title"
              type="text"
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="u-input-style"
              rows="4"
              name="description"
              type="text"
              onChange={e => setDescription(e.target.value)}
            />
            <input
              className="u-input-style"
              placeholder="Location"
              name="location"
              type="text"
              onChange={e => setLocation(e.target.value)}
            />
              {/* ////////urgency-option radio button */}
            <div className="urgency-box">
              <p>Urgency: </p>
              <div class="urgency-radio-button-wrapper">
                <input
                  type="radio"
                  className="urgency-radio-button"
                  name="urgencyRadio"
                  value="1"
                  id="urgency1"
                  defaultChecked
                />
                <label
                  for="urgency1"
                  className="radio-label-urgency"
                  onClick={() => setUrgency("low")}
                >
                  Low
                </label>
                <input
                  type="radio"
                  className="urgency-radio-button"
                  name="urgencyRadio"
                  value="2"
                  id="urgency2"
                />
                <label
                  for="urgency2"
                  className="radio-label-urgency"
                  onClick={() => setUrgency("medium")}
                >
                  Medium
                </label>
                <input
                  type="radio"
                  className="urgency-radio-button"
                  name="urgencyRadio"
                  value="3"
                  id="urgency3"
                />
                <label
                  for="urgency3"
                  className="radio-label-urgency"
                  onClick={() => setUrgency("high")}
                >
                  High
                </label>
              </div>
            </div>
             <p>Upload Image</p>   
            <button type="submit" className="u-submit-btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

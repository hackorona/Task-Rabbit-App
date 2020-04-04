import React, { useState } from "react";
import axios from "axios";
export default props => {
  const { onClose,userId } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [helpType, setHelpType] = useState("");
  const handleSubmit = async e => {
    e.preventDefault();
    if (title && description && location && radius && helpType) {
      const reqData = { userId, title, description, location, radius, helpType };
      const url = "http://localhost:3001/deeds/addOffer";
      try{
        const res=await axios.post(url,reqData);
        onClose(false);
      }catch(e){
        console.log('error in   new offer offer')
        //clear fields faild login
      }
    }
  };
  return (
    <section className="new-offer">
      <div className="u-modal-backdrop" onClick={() => onClose(false)}></div>
      <div className="u-modal-container new-offer__wrapper">
        <h1 className="t-sub-header"> New Offer</h1>
        <div className="new-offer__wrapper-sub">
          <h3 className="strong-text">Offer-to help</h3>
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
                onClick={() => setHelpType("pets")}
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
                onClick={() => setHelpType("groceries")}
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
                onClick={() => setHelpType("medical")}
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
                onClick={() => setHelpType("other")}
              >
                Other
              </label>
            </div>
            {/* end  Radio button */}
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
              <input
              className="u-input-style"
              placeholder="Radius (in Meters)"
              name="radius"
              type="text"
              onChange={e => setRadius(e.target.value)}
            />
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

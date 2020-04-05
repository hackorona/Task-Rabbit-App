import React from "react";
import "./Help-Details.scss";

export default function HelpDetails({
  request,
  handleGetItDoneClick
}) {
  const distance="4 km";
  const time="42 minutes";
  const {title,description,_id}=request;
  return (
    <>
      <section className="help-details">
        <img
          className="help-image"
          src="https://res.cloudinary.com/thelegend27/image/upload/v1585333265/img/fruits_srxewz.png"
          alt=""
        />
        <div className="help-content">
          <div>
            <h2 className="help-details__sub-header">{title}</h2>
            <p>{description}</p>
            <p className="coins-price">price : 13 Coins </p>
          </div>
          <div className="help-extra-details">
            <p>{distance} away</p>
            <p>{time} ago</p>
          </div>
        </div>
        <div className="help-actions">
          <button className="btn bg-secondary">Message</button>
          <button className="btn btn-more-info" onClick={()=>handleGetItDoneClick(_id)}>Get it done</button>
        </div>
      </section>
      <hr className="help-divider" />
    </>
  );
}

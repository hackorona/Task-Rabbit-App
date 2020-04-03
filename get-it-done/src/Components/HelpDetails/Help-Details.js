import React from "react";
import "./Help-Details.scss";

export default function HelpDetails({
  urgency,
  distance,
  time,
  title,
  description,
  handleHelpClick
}) {
  return (
    <>
      <section className="help-details">
        <img
          className="help-image"
          src="https://res.cloudinary.com/thelegend27/image/upload/v1585333256/img/hammer_i4afmv.png"
          alt=""
        />
        <div className="help-content">
          <div>
            <h2 className="help-details__sub-header">{title}</h2>
            <p>{description}</p>
          </div>
          <div className="help-extra-details">
            {urgency && <p>Urgency: {urgency}</p>}
            <p>{distance} away</p>
            <p>{time} ago</p>
          </div>
        </div>
        <div className="help-actions">
          <button className="btn bg-secondary">Message</button>
          <button className="btn btn-more-info" onClick={handleHelpClick}>Help</button>
        </div>
      </section>
      <hr className="help-divider" />
    </>
  );
}

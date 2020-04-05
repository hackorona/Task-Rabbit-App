import React from "react";
import "./OfferDetails.scss";

export default ({ offer, handleUseOfferClick }) => {
  const distance = "4 km";
  const time = "42 minutes";
  const { title, description, _id } = offer;
  return (
    <>
      <section className="offer-details">
        <img
          className="offer-image"
          src="https://res.cloudinary.com/thelegend27/image/upload/v1585333265/img/fruits_srxewz.png"
          alt=""
        />
        <div className="offer-content">
          <div>
            <h2 className="offer-details__sub-header">{title}</h2>
            <p>{description}</p>
          </div>
          <div className="offer-extra-details">
            <p>{distance} away</p>
            <p>{time} ago</p>
          </div>
        </div>
        <div className="offer-actions">
          <button className="btn bg-secondary">Message</button>
          <button className="btn btn-more-info"onClick={()=>handleUseOfferClick(_id)}>Use-offer</button>
        </div>
      </section>
      <hr className="offer-divider" />
    </>
  );
};

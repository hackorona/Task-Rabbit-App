import React from "react";
import "./MyTaskDetails.scss";

export default (props) => {
    const {task}=props;
    console.log('taskis',task)
    const {title,description,type,status}=task;
  const distance = "800 meters";
  const time = "today";
  const urgency='medium';
  return (
    <>
      <section className="my-tasks-details">
        <img
          className="my-tasks-image"
          src="https://res.cloudinary.com/thelegend27/image/upload/v1585333256/img/hammer_i4afmv.png"
          alt=""
        />
        <div className="my-tasks-content">
          <div>
            <h2 className="my-tasks-details__sub-header">
              {type === 1 ? "Offer: " : "Request: "}
              {title}
            </h2>
            <p>{description}</p>
            <p>{status===1?'Active':'Done'}</p>
          </div>
          <div className="my-tasks-extra-details">
            {urgency && <p>Urgency: {urgency}</p>}
            <p>{distance} away</p>
            <p>{time} ago</p>
          </div>
        </div>
        <div className="my-tasks-actions">
          <button className="btn btn-more-info">Finish</button>
          <button className="btn bg-secondary">Message</button>
        </div>
      </section>
      <hr className="my-tasks-divider" />
    </>
  );
};

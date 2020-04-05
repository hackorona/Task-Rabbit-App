import React from "react";
import "./MyTaskDetails.scss";

export default props => {
  const { task,handleFinishTaskClick } = props;
  const { title, description, type, status,_id } = task;
  const distance = "800 meters";
  const time = "today";
  const urgency = "medium";
  const handleButtonClick=()=>{
    if(type===2){
      handleFinishTaskClick(_id);
    }
  }
  return (
    <>
      <section className="my-tasks-details mb32">
        <img
          className="my-tasks-image"
          src="https://res.cloudinary.com/thelegend27/image/upload/v1585333265/img/fruits_srxewz.png"
          alt=""
        />
        <div className="my-tasks-content">
          <div>
            <p className="deed-type"> {type === 1 ? "Offer" : "Request"}</p>
            <h2 className="my-tasks-details__sub-header">{title}</h2>
            <h3 className="username">{type === 1 ? "Moshe" : "Dan_E"}</h3>
            <p>{description}</p>
            <p>{status === 2 ? "Active" : "Done"}</p>
            {type === 2?(<p className="coins-price">price : 13 Coins </p>):(<span></span>) }
          </div>
          <div className="my-tasks-extra-details">
            {urgency && <p>Urgency: {urgency}</p>}
            <p>{distance} away</p>
            <p>{time} ago</p>
          </div>
        </div>
        <div className="my-tasks-actions">
          <button className="btn btn-more-info"onClick={handleButtonClick}>
            {type === 1 ? "Done" : "Finish"}
          </button>
          <button className="btn bg-secondary">Message</button>
        </div>
      </section>
    </>
  );
};

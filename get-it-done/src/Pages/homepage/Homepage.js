import React from "react";
import styles from "./Homepage.scss";
import helpOptions from "./helpOptions";

export default () => {

  return (
    <>
      <section className="community">
        <h1>Community is</h1>
        <h1> important</h1>
        <div className="community__form-box">
          <p>Want help or to be helpful?</p>
          <p>Search your location to get started</p>
          <div>
            <input placeholder="Location" />
            <input placeholder="Radius" type="number" />
          </div>
          <div className="actions">
            <div>
              <input value="Help out" type="button" className="" />
              <input value="Be helped" type="button" disabled />
            </div>
            <input className="get-started" value="Get Started" type="submit" />
          </div>
        </div>
      </section>

      <section className="barbra">
        <div>
          <h2 className="sub-header">
            See who needs help in your community...
          </h2>
        </div>
        <div className="barbra-img">
          <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585333659/illustrations/barbra_zxstra.png"
            alt="help barbra with shopping" />
        </div>
      </section>

      <section>
        <div className="help">
          <h2 className="sub-header help__title">You can ask for help with...</h2>
          <div className="help-options ">
            {helpOptions.map((el, i) => (
              <div className="help-options__item" key={i}>
                <img src={el.url} alt="" />
                <p>{el.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="sub-header help__bottom-title">and much much more!</h2>
        </div>
      </section>
      <section className="offer-help">
        <h2 className="sub-header">Or offer to be that helping hand</h2>
        <div className="img-container">
          <img src="https://res.cloudinary.com/explority/image/upload/v1585492138/Group_14_zenycn.png"
            alt="old woman smiling" />
        </div>

      </section>
      <section className="points">
        <div>
          <h2 className="sub-header">Earn points and badges, see who can help the most!</h2>
        </div>
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329313/badges/dr.png"
          alt="doctor badge" />
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/grocery.png"
          alt="grocery badge" />
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/lion.png"
          alt="lion badge" />
      </section>

      <section className="helped mb80">
        <div className="helped-count">
          <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585333251/img/counter_kxfmd9.png"
            alt="number of people helped" />
          <strong>People helped so far</strong>
        </div>
        <div className="get-started-section">
          <input type="button" value="Click here" className="get-started-btn" />
          <strong>to get started!</strong>
        </div>
      </section>
    </>
  );
};

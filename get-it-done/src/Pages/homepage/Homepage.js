import React from "react";
import "./Homepage.scss";
import helpOptions from "./helpOptions";
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

export default () => {

  return (
    <section className="homepage">
      <section className="community">
        <div className="community__container">
        <div className="hands-img-container">
          <img src="https://res.cloudinary.com/explority/image/upload/v1586101131/Group_77_fp4qh8.png"/>
        </div>
        <Fade >


        <h1>Community is important!</h1>
        </Fade>

          <Fade bottom>
        <div className="community__form-box">
          <p>Want help or to be helpful?</p>
          <p>Search your location to get started</p>

        
          <div className="form-box__input-container">
            <input placeholder="Location"className="location-input"/>
            {/* <input placeholder="Radius" type="number" /> */}
            <div><NavLink to="/deeds/help"><button className="u-submit-btn"   >Get-Started</button></NavLink></div>
      </div>
          <div className="form-box__btn-container">
          </div>
        </div>
        </Fade>
        </div>
      </section>

      <section className="barbra">
        <div>
          <h2 className="t-sub-header">
            See who needs help in your community...
          </h2>
        </div>
        <div className="barbara-img-wrapper">

        <div className="barbra-img">
          <Fade bottom>

          <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585333659/illustrations/barbra_zxstra.png"
            alt="help barbra with shopping" />
            </Fade>
        </div>
            </div>
      </section>

      <section>
        <div className="help">
          <h2 className="t-sub-header help__title">You can ask for help with...</h2>
          <Fade right>
          <div className="help-options ">

            {helpOptions.map((el, i) => (
              <div className="help-options__item" key={i}>
                <img src={el.url} alt="" />
                <p>{el.desc}</p>
              </div>
            ))}
          </div>
            </Fade>
          <h2 className="t-sub-header help__bottom-title">and much much more!</h2>
        </div>
      </section>
      <section className="offer-help">
        <h2 className="t-sub-header">Or offer to be that helping hand</h2>
        <Fade bottom>

        <div className="img-container">
          <img src="https://res.cloudinary.com/explority/image/upload/v1585492138/Group_14_zenycn.png"
            alt="old woman smiling" />
        </div>
            </Fade>

      </section>
      <section className="points">
        <div>
          <h2 className="t-sub-header">Earn points and badges, see who can help the most!</h2>
        </div>
        <div className="badges-container">
<Fade bottom>

        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329313/badges/dr.png"
          alt="doctor badge" />
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/grocery.png"
          alt="grocery badge" />
        <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585329314/badges/lion.png"
          alt="lion badge" />
          </Fade>
          </div>
      </section>

      <section className="helped">
        <div className="helped-count">
          <img src="https://res.cloudinary.com/thelegend27/image/upload/v1585333251/img/counter_kxfmd9.png"
            alt="number of people helped" />
          <strong>People helped so far</strong>
        </div>
        <div className="get-started-section">
         <NavLink to='/deeds/help'><input type="button" value="Click here" className="get-started-btn" /></NavLink> 
          <strong>to get started!</strong>
        </div>
      </section>
    </section>
  );
};

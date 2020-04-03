import React from 'react';
import './OfferDetails.scss'

export default function offerDetails({ urgency, distance, time, title, description }) {
    return (<>
        <section className="offer-details">
            <img className="offer-image"
                src="https://res.cloudinary.com/thelegend27/image/upload/v1585333256/img/hammer_i4afmv.png" alt="" />
            <div className="offer-content">
                <div>
                    <h2 className="offer-details__sub-header">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="offer-extra-details">
                    {urgency && <p>Urgency: {urgency}</p>}
                    <p>{distance} away</p>
                    <p>{time} ago</p>
                </div>
            </div>
            <div className="offer-actions">
                <button className="btn bg-secondary">Message</button>
                <button className="btn btn-more-info">Be-helped</button>
            </div>
        </section>
        <hr className="offer-divider" />
    </>)
}
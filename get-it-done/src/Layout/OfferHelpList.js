import React from 'react';
import OfferDetails from '../Components/OfferDetails/OfferDetails';
export default props=>{
    const {offers}=props;
    return(<section className="offer-help-list">
              {offers.map((offer,i)=> (
                <OfferDetails
                  title={offer.title}
                  description={offer.description}
                  distance="4 km"
                  time="42 minutes"
                  key={i}
                />
              ))}
    </section>)
}
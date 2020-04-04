import React from 'react';
import OfferDetails from '../Components/OfferDetails/OfferDetails';
export default props=>{
    const {offers,handleUseOfferClick}=props;
    return(<section className="offer-help-list">
              {offers.map((offer,i)=> (
                <OfferDetails
                offer={offer}
                handleUseOfferClick={handleUseOfferClick}
                  key={i}
                />
              ))}
    </section>)
}
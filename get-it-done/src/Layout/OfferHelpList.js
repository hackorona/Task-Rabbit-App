import React from 'react';
import HelpDetails from '../Components/Help-Details';
export default props=>{
    const {offers}=props;
    return(<section className="offer-help-list">
              {offers.map((offer,i)=> (
                <HelpDetails
                  title={offer.title}
                  description={offer.description}
                  distance="4 km"
                  time="42 minutes"
                  key={i}
                />
              ))}
    </section>)
}
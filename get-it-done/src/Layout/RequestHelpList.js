import React from 'react';
import HelpDetails from '../Components/Help-Details';
export default props=>{
    const {requests}=props;
    return(<section className="request-help-list">
              {requests.map((request,i)=> (
                <HelpDetails
                  title={request.title}
                  description={request.description}
                  distance="4 km"
                  time="42 minutes"
                  key={i}
                />
              ))}
    </section>)
}
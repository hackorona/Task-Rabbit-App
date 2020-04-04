import React from 'react';
import HelpDetails from '../Components/HelpDetails/Help-Details';
export default props=>{
    const {requests,handleGetItDoneClick}=props;
    return(<section className="request-help-list">
              {requests.map((request,i)=> (
                <HelpDetails
                  request={request}
                  key={i}
                  handleGetItDoneClick={handleGetItDoneClick}
                />
              ))}
    </section>)
}
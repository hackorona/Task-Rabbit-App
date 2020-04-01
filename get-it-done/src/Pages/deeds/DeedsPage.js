import React, { useState } from 'react';
import AddDeedModal from '../../Layout/AddDeedModal';
import NewOffer from '../../Layout/NewOffer';
import NewRequest from '../../Layout/NewRequest';
import deeds from './deeds-mocks';
import { NavTab, RoutedTabs } from 'react-router-tabs';
import { Switch, Route } from 'react-router-dom';

export default ({ match }) => {
  const [toggleAddModal, setToggleAddModal] = useState(false);
  const [toggleNewOffer,setToggleNewOffer] = useState(true);
  const [toggleNewRequest, setToggleNewRequest] = useState(false);

  return (<>
    <button onClick={()=>setToggleAddModal(!toggleAddModal)}>add modal</button>
    {toggleAddModal &&<AddDeedModal onClose={setToggleAddModal}/>}
    <button onClick={()=>setToggleNewOffer(!toggleNewOffer)}>new offer</button>
    {toggleNewOffer &&<NewOffer onClose={setToggleNewOffer}/>}
    <button onClick={()=>setToggleNewRequest(!toggleNewRequest)}>new request</button>
    {toggleNewRequest &&<NewRequest onClose={setToggleNewRequest}/>}
    <RoutedTabs startPathWith={match.path}>
      <NavTab to="/help">help</NavTab>
      <NavTab to="/be-helped">be helped</NavTab>
      <NavTab to="/my-tasks">My tasks</NavTab>
    </RoutedTabs>

    <Switch>
      <Route path={`${match.path}/help`}>hi help</Route>
      <Route path={`${match.path}/be-helped`}>bes!</Route>
      <Route path={`${match.path}/my-tasks`}>tasks!</Route>
    </Switch>
  </>);
};

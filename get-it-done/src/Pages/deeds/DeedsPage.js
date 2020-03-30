import React, { useState } from 'react';
import AddDeedModal from '../../Layout/AddDeedModal';
import deeds from './deeds-mocks';
import { NavTab, RoutedTabs } from 'react-router-tabs';
import { Switch, Route } from 'react-router-dom';

export default ({ match }) => {
  const [toggleAddModal, setToggleAddModal] = useState(false);

  return (<>
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

import React, { useState } from 'react';
// import deeds from './deeds-mocks';
import { Switch, Route, NavLink, useRouteMatch, Redirect, } from 'react-router-dom';
import styles from './Deeds.scss';
import ToggleButton from 'react-toggle-button';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default () => {
  const [shouldShowMap, toggleMap] = useState(true);
  const [position, setPosition] = useState([32, 34]);

  navigator.geolocation.getCurrentPosition(({ coords }) =>
    setPosition([coords.latitude, coords.longitude]), undefined, { enableHighAccuracy: true }
  );
  const { path, url } = useRouteMatch();

  return (<>
    <div className="row">
      <div>
        <section className="links">
          <div>
            <NavLink to={`${url}/help`} className="mr40">Offer to help</NavLink>
            <NavLink to={`${url}/be-helped`}>Request help</NavLink>
          </div>
          <div>
            <NavLink to={`${url}/tasks`}>My tasks</NavLink>
          </div>
        </section>
        <hr className="links-divider" />
      </div>

      <div>
        <button className="btn bg-primary btn__new">Create new offer</button>
        <div className="toggle">
          <span>show map?</span>
          <ToggleButton inactiveLabel="" activeLabel=""
            value={shouldShowMap} onToggle={value => toggleMap(!value)}
            colors={{ active: { base: '#fd6064' } }} />
        </div>
      </div>
    </div>

    <div className="row">
      <div>
        <Switch>
          <Redirect exact from={path} to={`${path}/help`}/>
          <Route path={`${path}/help`}>hi help</Route>
          <Route path={`${path}/be-helped`}>bes!</Route>
          <Route path={`${path}/tasks`}>tasks!</Route>
        </Switch>
      </div>
      <Map center={position} zoom={14} attributionControl={false} className={shouldShowMap && 'show'} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" >
        </TileLayer>
        <Marker position={position}>
          <Popup>
            זקן במצוקה!!!
          </Popup>
        </Marker>
      </Map>
    </div>
  </>);
};

import React, { useState } from 'react';
import AddDeedModal from '../../Layout/AddDeedModal';
import NewOffer from '../../Layout/NewOffer';
import NewRequest from '../../Layout/NewRequest';
import deeds from './deeds-mocks';
import { Switch, Route, NavLink, useRouteMatch, Redirect, } from 'react-router-dom';
import styles from './Deeds.scss';
import ToggleButton from 'react-toggle-button';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import HelpDetails from '../../components/Help-Details';

const HELP_URL = 'help';
const requests = deeds.filter(deed => deed.isRequest);
const offers = deeds.filter(deed => !deed.isRequest);

export default function () {
  const [shouldShowMap, toggleMap] = useState(true);
  const [position, setPosition] = useState([32, 34]);

  navigator.geolocation.getCurrentPosition(({ coords }) =>
    setPosition([coords.latitude, coords.longitude]), undefined, { enableHighAccuracy: true }
  );

  const { path, url } = useRouteMatch();
  const { params } = useRouteMatch(`${path}/:route`);

  return (<>
    <div className="row">
      <div>
        <section className="links">
          <div>
            <NavLink to={`${url}/${HELP_URL}`} className="mr40">Offer to help</NavLink>
            <NavLink to={`${url}/be-helped`}>Request help</NavLink>
          </div>
          <div>
            <NavLink to={`${url}/tasks`}>My tasks</NavLink>
          </div>
        </section>
        <hr className="links-divider" />
      </div>

      <div>
        <button className="btn bg-primary btn__new">
          {`Create new ${params.route === HELP_URL ? 'offer' : 'request'}`}
        </button>
        <div className="toggle">
          <span>show map?</span>
          <ToggleButton inactiveLabel="" activeLabel=""
            value={shouldShowMap} onToggle={value => toggleMap(!value)}
            colors={{ active: { base: '#fd6064' } }} />
        </div>
      </div>
    </div>

    <div className="row main-content">
      <div className="sub-route">
        <Switch>
          <Redirect exact from={path} to={`${path}/help`} />
          <Route path={`${path}/help`}>
            {
              requests.map(deed => <HelpDetails
                title={deed.title} description={deed.description} 
                distance="4 km" time="42 minutes" urgency={deed.urgency} key={deed.id}/>
              )}
          </Route>
          <Route path={`${path}/be-helped`}>
          {
              offers.map(deed => <HelpDetails
                title={deed.title} description={deed.description} 
                distance="4 km" time="42 minutes" key={deed.id}/>
              )}
          </Route>
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

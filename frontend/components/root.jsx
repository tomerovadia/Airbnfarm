import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import BecomeAHostContainer from './spots/spot_form/become_a_host_container';
import SpotProfileContainer from './spots/spot_profile/spot_profile_container';
import Welcome from './main/welcome';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <IndexRoute component={Welcome} />

          <Route path='/become-a-host' component={BecomeAHostContainer}>
            <Route path='/become-a-host/details' component={BecomeAHostContainer} />
            <Route path='/become-a-host/availability' component={BecomeAHostContainer} />
          </Route>

          <Route path='/spots/:spotId' component={SpotProfileContainer}></Route>
        </Route>
      </Router>
    </Provider>
  );
};

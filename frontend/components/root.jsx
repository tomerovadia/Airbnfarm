import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import BecomeAHostContainer from './spots/spot_form/become_a_host_container';
import SpotProfileContainer from './spots/spot_profile/spot_profile_container';
import SpotSearchContainer from './search/spot_search_container';
import SpotSearchMap from './search/spot_search_map';
import Welcome from './main/welcome';
import NavContainer from './main/nav_container';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <IndexRoute component={Welcome} />

          <Route path='/spots' component={NavContainer}>
            <Route path='/spots/profile/:spotId' component={SpotProfileContainer}></Route>
            <Route path='/spots/search' component={SpotSearchContainer}></Route>
            <Route path='/spots/test' component={SpotSearchMap}></Route>
          </Route>

          <Route path='/become-a-host' component={BecomeAHostContainer}></Route>



        </Route>
      </Router>
    </Provider>
  );
};

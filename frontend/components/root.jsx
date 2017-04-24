import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import BecomeAHostContainer from './spots/spot_form/become_a_host_container';
import SpotProfileContainer from './spots/spot_profile/spot_profile_container';
import SpotSearchContainer from './search/spot_search_container';
import WelcomeSearchBar from './search/welcome_search_bar';
import Welcome from './main/welcome';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <IndexRoute component={Welcome} />

          <Route path='/become-a-host' component={BecomeAHostContainer}></Route>

          <Route path='/spots/show/:spotId' component={SpotProfileContainer}></Route>

          <Route path='/spots/search' component={SpotSearchContainer}></Route>

          <Route path='/spots/test/:spotId' component={WelcomeSearchBar}></Route>

        </Route>
      </Router>
    </Provider>
  );
};

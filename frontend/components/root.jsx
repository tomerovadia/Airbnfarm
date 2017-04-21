import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import BecomeAHostContainer from './spots/become_a_host_container';
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
        </Route>
      </Router>
    </Provider>
  );
};

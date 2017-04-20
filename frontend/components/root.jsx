import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <Route path='/become-a-host' component={BecomeAHost}>
            <Route path='/become-a-host/details' component={BecomeAHost} />
            <Route path='/become-a-host/availability' component={BecomeAHost} />
          </Route>
        </Route>
      </Router>
    </Provider>
  );
};

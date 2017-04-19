import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App} />
          <Route path='/signup' component={App} />
          <Route path='/login' component={App} />

      </Router>
    </Provider>
  );

};

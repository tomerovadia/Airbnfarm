import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';

export default (props) => {

  return (
    <h1>WELCOME</h1>
    // <Provider store={props.store}>
    //   <Router history={ hashHistory }>
    //     <Route path='/' component={App} />
    //   </Router>
    // </Provider>
  );

};

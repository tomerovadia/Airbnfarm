import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './app';
import BecomeAHostContainer from './spots/spot_form/become_a_host_container';
import SpotProfileContainer from './spots/spot_profile/spot_profile_container';
import SpotSearch from './search/spot_search';
import Welcome from './main/welcome';
import NavContainer from './main/nav_container';
import TripsPage from './bookings/trips_page';
import ReservationsPage from './bookings/reservations_page';
import ListingsPage from './bookings/listings_page';
import HostPage from './bookings/host_page';
import SpotSearchLocationInput from './search/spot_search_location_input';

export default (props) => {

  return (
    <Provider store={props.store}>
      <Router history={ hashHistory }>
        <Route path='/' component={App}>
          <IndexRoute component={Welcome} />

          <Route path='/test' component={SpotSearchLocationInput} />


          <Route path='/spots' component={NavContainer} searchBarVisible={true}>
            <Route path='/spots/profile/:spotId' component={SpotProfileContainer}></Route>
            <Route path='/spots/search' component={SpotSearch}></Route>
          </Route>

          <Route path='/become-a-host' component={BecomeAHostContainer}></Route>

          <Route path='/bookings/trips' component={TripsPage}></Route>

          <Route path='/bookings/host' component={HostPage}>
            <Route path='/bookings/host/listings' component={ListingsPage}></Route>
            <Route path='/bookings/host/reservations' component={ReservationsPage}></Route>
          </Route>

        </Route>
      </Router>
    </Provider>
  );
};

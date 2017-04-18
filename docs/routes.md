```js
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />

    <Route path="/home_spot_form" component={HomeSpotFormContainer}>
    <Route path="/review_form" component={ReviewFormContainer}>

    <Route path="/home_spots_search" component={HomeSpotsSearchContainer} />
    <Route path="/home_spot_profile/:homeSpotId" component={HomeSpotProfileContainer} />

    <Route path="/bookings/:userId" component={BookingsContainer}>
      <Route path="/bookings/:userId/traveling" component={BookingsTraveling} />
      <Route path="/bookings/:userId/hosting" component={BookingsHosting} />
    </Route>

  </Route>
</Router>
```

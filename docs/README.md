# Airbnfarm

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://airbnfarm.herokuapp.com/
[trello]: https://trello.com/b/zbOIba2f/airnbn

## Minimum Viable Product

Airbnfarm is a web application inspired by Airnbn and built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Create user
- [ ] Log in
- [ ] Log out
- [ ] Create home spots
- [ ] Update home spots
- [ ] View a home spot and its reviews
- [ ] Search for home spots
- [ ] Request a booking
- [ ] Accept/decline a booking
- [ ] View all your bookings as guest and host
- [ ] Create a review for a home spot
- [ ] Production README [sample](docs/production_readme.md) (TBD)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [React Routes][routes]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component_hierarchy.md
[routes]: routes.md
[sample-state]: sample_state.md
[api-endpoints]: api_endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication
**Objective:** A splash page is available for viewing (without searching)

### Phase 2: HomeSpots Model, API, and components (2 days)

**Objective:** Home spots can be created, updated and deleted
**Objective:** Home spots can be viewed (without reviews)

### Phase 3: Home Spots Searching (2 days)
**Objective:** Users can search home spots from splash page and search page

### Phase 4: Bookings Central (1 days)
**Objective:** Users can view their bookings, as guests and hosts
**Objective:** Page is only available to logged in users

### Phase 5: Bookings (1 days)
**Objective:** Guests can request bookings
**Objective:** Hosts can accept bookings

### Phase 6: Reviews (1 days)
**Objective:** Users can create reviews
**Objective:** Users can create reviews


### Bonus Features (TBD)
- [ ] Profile page for users
- [ ] Splash page Home Spots carousel
- [ ] More complex pagination of reviews and Home Spots
- [ ] InstantBook
- [ ] Paginated review creation
- [ ] Paginated Home Spot creation
- [ ] Additional trips/listings pages
- [ ] Map on Home Spot page
- [ ] Host on Home Spot page
- [ ] Auto Pricing
- [ ] Review mentions
- [ ] Messaging
- [ ] Discounts
- [ ] Experiences
- [ ] "This home is on people's minds."
- [ ] Refund/cancellation flexibility
- [ ] Reporting a listing

# API Endpoints

## HTML API

### Root

- `GET /`
  - loads React web app

## JSON API

### Users

- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### HomeSpots

- `GET /api/home_spots/:id`
- `GET /api/home_spots`
- `POST /api/home_spots`
- `PATCH /api/home_spots/:id`
- `DELETE /api/home_spots/:id`
- `GET /api/users/:id/home_spots/`
  - get all home_spots for a particular host

### Bookings
- `GET /api//bookings/:id`
- `GET /api//bookings`
- `POST /api//bookings/`
- `PATCH /api//bookings/:id`
- `GET /api/users/:id/bookings/host`
  - get all bookings for a particular host
- `GET /api/users/:id/bookings/guest`
  - get all bookings for a particular guest

### Reviews
- `GET /api/reviews/:id`
- `GET /api/reviews`
- `POST /api/reviews`
- `PATCH /api/reviews/:id`
- `DELETE /api/reviews/:id`
- `GET /home_spots/:id/reviews`
  - get all reviews for a particular home_spot

### Guests
- `POST /api/guests`
- `DELETE /api/guests/:id`
- `GET /api/home_spots/:id/booking/:id/guests`
  - get all guests for a particular home_spot's booking

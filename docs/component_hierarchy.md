## Component Hierarchy

**App**
- SignUp
- SignIn
- Nav

**Splash**
 - Search
 - CategoriesNav
 - Carousel

**Search**
 - WhenSearch
 - GuestSearch

**Carousel**
- HomeSpot

**HomeSpotsSearch**
 - FilterSearchBar
 - HomeListResults
 - HomeMapResults

**FilterSearchBar**
 - RoomFilter
 - PriceFilter

**HomeListResults**
 - HomeSpot
 - HomeListResultsNav

**HomeSpotProfile**
 - HomeSpotProfileNav
 - HomeSpotProfileOverview
 - HomeSpotProfileReviews
 - HomeSpotProfileHost
 - HomeSpotProfileNeighborhood
 - HomeSpotProfileSidebar

**HomeSpotProfileOverview**
 - HomeSpotProfileOverviewHeading
 - HomeSpotProfileOverviewIconsSummary
 - HomeSpotProfileIconsDescription
 - HomeSpotProfileOverviewSection

**HomeSpotOverviewTheSpace**

**HomeSpotOverviewAmenities**

**HomeSpotOverviewPrices**

**HomeSpotOverviewDescription**

**HomeSpotOverviewHouseRules**

**HomeSpotOverviewFeatures**

**HomeSpotProfileReview**
 - HomeSpotProfileReviewHeader
 - HomeSpotProfileReviewStars
 - HomeSpotProfileReview
 - HomeSpotProfileReviewsNav

**Bookings**
 - BookingsTraveling
 - BookingsHosting

**ReviewForm**

**HomeSpotForm**


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/" | "Splash" |
| "/home_spot_form" | "HomeSpotFormContainer" |
| "/review_form" | "ReviewFormContainer" |
| "/home_spots_search" | "HomeSpotsSearchContainer" |
| "/home_spot_profile/:homeSpotId" | "HomeSpotProfileContainer" |
| "/bookings/:userId" | "BookingsContainer" |
| "/bookings/:userId/traveling" | "BookingsTraveling"
| "/bookings/:userId/hosting" | "BookingsHosting" |

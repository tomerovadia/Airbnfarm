# Schema Information

## users
column name       | data type | details
----------------- |-----------|-----------------------
id                | integer   | not null, primary key
email             | string    | not null, indexed, unique
fname             | string    |
lname             | string    |
password_digest   | string    | not null
session_token     | string    |
birthdate         | date      |
promotions_opt_in | boolean   | default: false
cities_id         | integer   |
img_url           | string    |

## homespots
column name       | data type | details
----------------- |-----------|-----------------------
id	              | integer	  | primary key
privacy_level_id	| integer	  | not null, indexed
num_guests	      | integer	  | not null, indexed
city_id           | integer	  | not null, indexed
type_id	          | integer   |	not null
num_bedrooms	    | integer   |	not null, indexed
num_beds	        | integer	  | not null, indexed
num_bathrooms     |	integer   |	not null, indexed
beds_id	          | integer   |	indexed
country_id	      | integer	  | not null, indexed
street_address	  | string	  | not null
state_id	        | integer	  | not null, indexed
zipcode	          | integer	  | not null, indexed
amenities_id	    | integer   | indexed, unique
summary	|text	    | not null
title	|string	    | not null
amenities_id	    | integer	  | indexed, unique
houserules_id   	| integer   | indexed, unique
houserules	      |text	      |
nights_min	|integer	|
nights_max	|integer	|
base_price	|integer|	not null
weekly_discount	|integer|	validation: between 0 & 1
monthly_discount	|integer|	validation: between 0 & 1
cleaning_fee	|integer	|default: 0
service_fee	|integer|	default: 0
security_deposit	|integer|	default: 0
host_id	|integer	|not null, indexed
checkin_time	|time	|
checkout_time	|time	|
description	|text	|
main_photo_url	|string	|


## bookings
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
homespot_id	|integer|	not null
status_id	|string	|not null
booked_from_date	|date|	not null
booked_to_date	|date	|not null
num_adults	|integer	|validation: 1+, not null
num_children	|integer|	default: 0
num_infants|	integer	|default: 0
base_price	|integer	|not null
cleaning_fee	|integer|	default: 0
service_fee	|integer	|default: 0
security_deposit	|integer|	default: 0
date_created	|date	|not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
author_id	|integer	|not null, indexed
homespot_id	|integer|	not null, indexed
body	|text|
num_stars	|integer	|validation: between 1 & 5
date	|date	|validation: in past
num_helpful_votes	|integer	|default: 0
accuracy_stars	|integer	|validation: between 1 & 5
communication_stars	|integer	|validation: between 1 & 5
cleanliness_stars	|integer	|validation: between 1 & 5
location_stars	|integer	|validation: between 1 & 5
checkin_stars	|integer	|validation: between 1 & 5
value_stars	|integer	|validation: between 1 & 5

## guests
column name | data type | details
------------|-----------|-----------------------
id	|integer|	primary key
homespot_booking_id|	integer|	not null
guest_id	|integer	|not null

## availabilities
column name | data type | details
------------|-----------|-----------------------
id	|integer|	primary key
homespot_id	|integer	|not null, indexed
available_date	|date	|not null

## privacy_levels
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
privacy_level	|string	|not null

## cities
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
city	|string	|not null

## types
column name | data type | details
------------|-----------|-----------------------
id	|integer	|
type	|string	|

## countries
column name | data type | details
------------|-----------|-----------------------
id	|integer|
country_name	|string|

## states
column name | data type | details
------------|-----------|-----------------------
id	|integer	|
state_name|	string	|

## amenities
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
essentials	|boolean	|default: false
wifi	|boolean|	default: false
shampoo	|boolean|	default: false
closetdrawers	|boolean|	default: false
tv	|boolean	|default: false
heat	|boolean	|default: false
airconditioning	|boolean|	default: false
breakfastcoffeetea	|boolean|	default: false
deskworkspace	|boolean|	default: false
fireplace	|boolean|	default: false
iron	|boolean|	default: false
hairdryer	|boolean	|default: false
petsinhouse	|boolean|	default: false
privateentrance	|boolean|	default: false


## homespot_photos
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
url	|string	|not null
homespot_id	|integer	|indexed

## house_rules
column name | data type | details
------------|-----------|-----------------------
id	integer	primary key
suitableforchildren	boolean
suitableforinfants	boolean
suitableforpets	boolean
smokingallowed	boolean
eventsorpartiesallowed	boolean

## booking_statuses
column name | data type | details
------------|-----------|-----------------------
id	|integer|primary key
status	|string	|not null


## beds
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
num_sofabeds	|integer|	default: 0
num_couches|	integer	|default: 0
num_floormattresses	|integer	|default: 0
num_airmattresses	|integer	|default: 0
num_singlebeds	|integer|	default: 0
num_kingbeds	|integer	|default: 0
num_bunkbeds	|integer|	default: 0
num_queenbeds	|integer	|default: 0
num_doublebeds	|integer	|default: 0
num_cribs|	integer|	default: 0
num_toddlerbeds	|integer	|default: 0
num_hammocks	|integer|	default: 0
num_waterbeds	|integer|	default: 0


## safety_features
column name | data type | details
------------|-----------|-----------------------
id	|integer	|primary key
smokedetector	|boolean	|default: false
carbonmonoxidedetector	|boolean	|default: false
firstaidkit	|boolean|	default: false
safetycard	|boolean	|default: false
fireextinguisher	|boolean	|default: false
lockonbedroomdoor	|boolean|	default: false

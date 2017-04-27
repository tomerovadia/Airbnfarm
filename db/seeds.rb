# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  Availability.destroy_all
  User.destroy_all
  PrivacyLevel.destroy_all
  State.destroy_all
  Spot.destroy_all

  entire_place = PrivacyLevel.create!(privacy_level: 'Entire Place')
  private_room = PrivacyLevel.create!(privacy_level: 'Private Room')
  shared_room = PrivacyLevel.create!(privacy_level: 'Shared Room')

  bob = User.create!(email: 'bob@gmail.com', password: 'password')
  tomer = User.create!(email: 'tomer@gmail.com', password: 'password')

  state_abbreviations = %w(AK AL AR AZ CA CO CT DC DE FL GA HI IA ID IL IN KS KY LA MA MD ME MI MN MO MS MT NC ND NE NH NJ NM NV NY OH OK OR PA RI SC SD TN TX UT VA VT WA WI WV WY)
  state_abbreviations.each do |state_abbreviation|
    State.create!(state_name: state_abbreviation)
  end


  50.times do |idx|
    User.create!(email: Faker::Internet.unique.email, password: 'password')
  end

  all_states = State.all
  all_privacy_levels = PrivacyLevel.all
  all_users = User.all

  titles = [
    'BEST FARM EVER! I HAVE LOTS OF CHICKENS!',
    '1000 Acre Farm with 2,000 miserable cows',
    'Organic, Gluten-Free, Free-Range Farm',
    'Fish Farm alongside Aquarium',
    'Retired Race Horse Ranch',
    'Tractor Factory',
    'The Light Center Barn',
    'The Perfect Yurt with Chickens in the Back',
    'The Perfect Yurt with Cows in the Back',
    'River-side Escape',
    'Cabin in the woods',
    'Cozy Ozark Cabin near Fayetteville-views',
    'Amazing year-round lakeview farm retreat',
    'Ranch with private riverfront access',
    'Canoe floating down a river',
    'Beaver Lake Bed & Breakfast (& Farm)',
    'Bamboo Farm',
    'Bell Tent Glamping on Navajoland Farm',
    'Awesome Yurt Retreat in Southeast Utah',
    'Country privacy, Oasis in the desert, with chickens',
    'Secluded mini-horse ranch island'
  ]


  addresses = [
    ['121 Main St.', '745 Railroad Avenue', '450 Southern Avenue', '120 Kansas Avenue', '1152 E Quail Rd.'],
    ['19 Rose Ln', '95 Shelly Street', '552 4th St', '450 Moore St', '59 W Main St'],
    ['200 S Hassett St.', '150 E Dakota St.', '114 N Wilder St.', '245 N Carpenter St.', '475 Main St.'],
  ]

  locations = [
    ['Agra', 67621, State.find_by(state_name: 'KS').id],
    ['Oil Trough', 72564, State.find_by(state_name: 'AR').id],
    ['Tripp', 57376, State.find_by(state_name: 'SD').id]
  ]

  summary = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  address = '123 Main St'

  15.times do |idx|

    Spot.create!(
            host_id: all_users.sample.id,
            title: titles[idx],
            base_price: rand(150..1000),
            summary: summary,
            main_photo: File.open("app/assets/images/farm#{idx % 17}.jpg"),
            description: description,
            privacy_level_id: all_privacy_levels.sample.id,
            num_guests: rand(1..10),
            num_bedrooms: rand(1..10),
            num_beds: rand(1..10),
            num_bathrooms: rand(1..10),
            # city: 'San Francisco',
            # zipcode: 94108,
            # state_id: State.find_by(state_name: 'CA').id,
            street_address: addresses[idx % 3].pop,
            city: locations[idx % 3][0],
            state_id: locations[idx % 3][2],
            zipcode: locations[idx % 3][1],
            main_photo_url: '',
          )
  end

  date_ranges = [
    ['Mon, 01 May 2017', 'Wed, 10 May 2017'],
    ['Fri, 05 May 2017', 'Mon, 15 May 2017'],
    ['Wed, 10 May 2017', 'Sat, 20 May 2017']
  ]

  Spot.all.each do |spot|
    date_range = date_ranges[(0..2).sample]

    start_date = Date.parse(date_range.first)
    end_date = Date.parse(date_range.last)

    (start_date..end_date).each do |date|
      Availability.create!(available_date: date, spot_id: spot.id)
    end

  end

end

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

  beach_place = Spot.create!(
    host_id: bob.id,
    title: "My awesome beach place",
    base_price: 1500,
    summary: "right along the beach",
    main_photo_url: 'example.com',
    description: "wonderful beaches",
    privacy_level_id: entire_place.id,
    num_guests: 7,
    num_bedrooms: 18,
    num_beds: 101,
    num_bathrooms: 0,
    street_address: '123 Ocean Ave',
    city: 'Laguna Beach',
    state_id: State.all.sample.id,
    zipcode: 91335
  )

  mountain_cabin = Spot.create!(
    host_id: tomer.id,
    title: "Homey cabin in the mountains",
    base_price: 500,
    summary: "great views!",
    main_photo_url: 'example.com',
    description: "this place has great views!",
    privacy_level_id: private_room.id,
    num_guests: 2,
    num_bedrooms: 2,
    num_beds: 1,
    num_bathrooms: 1,
    street_address: '123 Middle Of Nowhere Lane',
    city: 'Americatown',
    state_id: State.all.sample.id,
    zipcode: 11553
  )

river_home = Spot.create!(
        host_id: tomer.id,
        title: "River boat!",
        base_price: 10000,
        summary: "Never docks!",
        main_photo_url: 'example.com',
        description: "Always on the water!",
        privacy_level_id: shared_room.id,
        num_guests: 50,
        num_bedrooms: 25,
        num_beds: 30,
        num_bathrooms: 1,
        street_address: 'The water!',
        city: 'River',
        state_id: State.all.sample.id,
        zipcode: 20037
      )


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


    cities = [
      'Agra',
      'Oil Trough',
      'Tripp'
    ]



    state_ids = [
      State.find_by(state_name: 'KS').id,
      State.find_by(state_name: 'AR').id,
      State.find_by(state_name: 'SD').id
    ]

    photo_urls = [
      'https://saveland.org/wp-content/uploads/2016/06/FinnriverFarmView_3.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/b8/97/c5/b897c523c39669c87ed41187ff539923.jpg',
      'https://static1.squarespace.com/static/577c39f56b8f5bec285fe33f/57a0126fe3df28965b499a26/57a01290579fb38575be0348/1470110035725/heritage+farm+view.jpg',
      'http://0.s3.envato.com/files/124248324/View%20of%20farm%20fields%20and%20rolling%20hills%20in%20rural%20Baltimore%20County%20%20Maryland.jpg',
      'https://wwcdn.weddingwire.com/vendor/955001_960000/956294/thumbnails/800x800_1483405599123-img0988-1.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/85/d1/43/best-farm-view-opposit.jpg',
      'https://s3.amazonaws.com/files.qrz.com/t/ak4at/buffaloviewoverlook.jpg',
      'http://static.panoramio.com/photos/large/109935134.jpg',
      'http://res.cloudinary.com/simpleview/image/upload/crm/chapelhill/Blackwood-Farm-Full-pond-view-2--9252f5405056b3a_9252fca1-5056-b3a8-49cb1400740b5897.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/00/1e/43/e1/view-from-the-farm.jpg',
      'http://www.wakingtimes.com/wp-content/uploads/2016/10/Industrial-Farming.jpg',
      'https://peacefulanarko.files.wordpress.com/2010/04/0522_mz_farming2.jpg',
      'https://cdn.shutterstock.com/shutterstock/videos/6969928/thumb/1.jpg',
      'https://barnraiser-media.s3.amazonaws.com/blog_posts/images/000/000/213/large/ThinkstockPhotos-sb10061843ai-001.jpg?1448921156',
      'http://thecontributor.com/sites/default/files/resize/breaking-news/2014/09/farm-600x400.jpg'
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
              main_photo_url: photo_urls.sample,
              description: description,
              privacy_level_id: all_privacy_levels.sample.id,
              num_guests: rand(1..10),
              num_bedrooms: rand(1..10),
              num_beds: rand(1..10),
              num_bathrooms: rand(1..10),
              street_address: '123 Main St.',
              city: cities[idx % 3],
              state_id: state_ids[idx % 3],
              zipcode: 12912
            )
    end

end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



ActiveRecord::Base.transaction do

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
    state_id: 7,
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
    state_id: 8,
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
        state_id: 33,
        zipcode: 20037
      )

end

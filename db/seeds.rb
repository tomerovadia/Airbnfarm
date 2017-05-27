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
  BookingStatus.destroy_all

  entire_place = PrivacyLevel.create!(privacy_level: 'Entire Place')
  private_room = PrivacyLevel.create!(privacy_level: 'Private Room')
  shared_room = PrivacyLevel.create!(privacy_level: 'Shared Room')

  BookingStatus.create!(status: 'approved')
  BookingStatus.create!(status: 'declined')
  BookingStatus.create!(status: 'pending')
  BookingStatus.create!(status: 'cancelled')

  bob = User.create!(email: 'bob@gmail.com', password: 'password')
  tomer = User.create!(email: 'tomer@gmail.com', password: 'password')
  old_macdonald = User.create!(email: 'old.macdonald@gmail.com', password: 'password')

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

  farms = [
    ['Family cabin',
      'Family cabin for hunting/fishing/wedding/reunion/etc. Huge fenced yard, off street parking and RV electrical hook up (may require adapter or extension cord). Central AC to keep cool and two BRs with queen beds, extra foam mattress, kitchen has all small appliances, 1 bathroom, and TV with cable. Located close to Harlan reservoir and walking distance to restaurants/bars. Great for a week of fishing or hunting. We welcome hunters, fisherman, or just family vacationers to our family cabin!',
      'Family cabin for hunting/fishing/wedding/reunion/etc. Huge fenced yard, off street parking and RV electrical hook up (may require adapter or extension cord). Central AC to keep cool and two BRs with queen beds, extra foam mattress, kitchen has all small appliances, 1 bathroom, and TV with cable. Located close to Harlan reservoir and walking distance to restaurants/bars. Great for a week of fishing or hunting. We welcome hunters, fisherman, or just family vacationers to our family cabin!'
    ],
    ["Vacation Retreat. Great for hunting/fishing",
     "Our house, with off street parking! It is centrally located on a quiet street, just two blocks from Harlan County Reservoir. Within walking distance to grocery store, movie theatre, restaurants & scenic trail.",
      "The house has central air along with a forced air furnace. Our bedrooms have queen sized beds. A large dining room to easily accommodate a large family gathering or just a small party. Newly remodeled kitchen complete with appliances and cookware/silverware. Bathroom with large walkin shower, complete with towels. Living room has a hide-a-bed queen size couch, love seat, recliner and TV with DVD player, with access to local channels. An outside fireplace to enjoy smores with your family or just enjoy the piece and quiet of the night."
    ],
    ["Located in a sportsman's paradise",
      "Located in small town. Just a stones throw from Waconda lake and wildlife area. Known for its great fishing and hunting.",
      "Located in small town. Just a stones throw from Waconda lake and wildlife area. Known for its great fishing and hunting."
    ],
    ["Potter's Fields Outfitters & Lodge",
      "We have a beautiful 2000 square foot facility with amazing scenery. This is one of farmland's best kept secrets for you and your friends and family to enjoy in privacy.",
      "We have a beautiful 2000 square foot facility with amazing scenery. This is one of farmland's best kept secrets for you and your friends and family to enjoy in privacy."
    ],
    ["Brand new loft lake side retreat.",
      "Spacious lake view loft that provides a private wooded retreat. All the amenities of home including satellite TV. Wildlife is abundant grazing in the yard. Spectacular sunsets while relaxing on a beautiful patio with built in fire pit.",
      "Spacious lake view loft that provides a private wooded retreat. All the amenities of home including satellite TV. Wildlife is abundant grazing in the yard. Spectacular sunsets while relaxing on a beautiful patio with built in fire pit."
    ],
    ["LARGE HUNTING AND FISHING HOME",
      "Large home to rent/with bunk house full kitchen, outdoor grill, and fryer. Perfect for fishing on Missouri, indoor boat parking, electrical for charging, fridge and freezers for catch, 10 miles to Pease creek dock, 15 miles to Platte Creek.",
      "Large home to rent/with bunk house full kitchen, outdoor grill, and fryer. Perfect for fishing on Missouri, indoor boat parking, electrical for charging, fridge and freezers for catch, 10 miles to Pease creek dock, 15 miles to Platte Creek."
    ],
    ["Bullrem Farm #2 room",
      "There is a rocking chair on the front porch waiting for you to use at our farm home. We have a quiet, separate area for you. You may stay in your own private area or join us in our spacious kitchen for a glass of iced sweet tea.",
      "Helen is a retired Medical Technologist and Kenneth retired June 2014 after managing a farm store for many years.. This is a NON-SMOKING home. We have two dogs around the house and two cats at the barn. Our farm also has chickens and cows. Our Children are grown and live in another city. If our guests have time, we would love to share a cup a coffee and a danish (or something like that) with them. In the afternoon on a pretty day, they can sit in a rocker on the front porch with a glass of tea and watch the cows grazing. We prefer our guests do not bring pets."
    ],
    ["Charming Cabin on the Little Red",
      "This beautiful cabin is nestled in a wooded area on the Little Red River near Pangburn. 'Camp David' offer guests a perfect getaway place for personal discovery or recreation. The cabin's rustic charm blends with its natural surroundings and the location offers a feeling of seclusion yet it is conveniently located to the towns of Pangburn and Heber Springs and their plentiful options for outdoor recreation, unique shopping and dining.",
      "The exterior of the cabin is Cypress with a metal roof (great on rainy days), features two great decks overlooking the river, a screened in porch with a daybed that is ideal for napping or sleeping to the sounds of the outdoors. A rock walkway leads you to your private boat and fishing dock where you can catch trout in your own backyard or just sit and enjoy the river and watch the trout rise and meet the two winged residents that include geese, ducks, kingfishers, bald eagles and great blue heron."
    ],
    ["Rivers Edge Ranch",
      "Luxury home on the Little Red River with dock. 10 Minutes from Greers Ferry Lake.",
      "This ranch has been in my family for 150 years! I would love to share it with respectful guests who need a place to stay in this lovely part of the state."
    ],
    ["Magic Mist / Steampunk Cabin",
      "The Magic Mist cabin is decorated in Steampunk/ Industrial style. It is not the typical river cabin decor, yet it is attention to detail that makes this such a charming and unique place to stay. Perfect for relaxing and reconnecting with nature, and each other.",
      "Beautiful river setting surrounded by trees and nature, keeping reality far behind to let you unwind in peace."
    ],
    ["Greer's Ferry Lakefront Cabin",
      "Lakefront Cabin with Swimming, Fishing and Boating Feet Away from Privat (URL HIDDEN) of the nicest and newest cabins directly on Greers Ferry Lake. Private lakeaccess steps away from the porch. Anchor your boat in front of the house and walk up to cabin",
      "Fully Furnished, Large porch, lots of windows, newer appliances,this nice lakefront cabin is ready for your vacation. Spent time on Greers Ferry Lake at an affordable price. Located directly across from Dam Site Marina, this newer home has great views and easy lake access. Landscaped with natural rock and adult trees, it's sure to provide you and your family with unforgettable memories of a fun time at the shores of Greers Ferry Lake. The sunsets are included at no charge and world class walleye fishing is at your door. Dam Site Marina is only minutes away straight across the lake."
    ],
    ["Trout House Retreat",
      "This property features a great 2000 sq. foot mobile home on the Little Red River in Heber Springs. It includes a gas grill, table and chairs where you can enjoy a view of the river while you cook. There is also a large fire pit for your enjoyment.",
      "You will also enjoy a private boat dock with table and chairs (all children under the age of 14 must be accompanied by an adult and wear a life jacket at all times. Life jackets can be found in closet on dock). Trout House has a fully equipped kitchen for preparing meals and is open to second living area. Heber Springs is only minutes away and hosts shops, galleries and restaurants. The Greers Ferry Lake is a great place for swimming or renting jet ski or boats for a day."
    ],
    ["Peaceful Country Studio in our barn",
      "Country retreat near Greers Ferry Lake, Little Red Rvr, White Rvr, Blanchard Caverns, Mt. View , Ozark Folk Ctr. Studio w/kitchen, qn/ bed, TV, internet & Wifi. Peaceful pvt. porch, great views and sunsets. Landscaped yard, firepit, arbor & swing.",
      "Everything you'll need all in one room. Sleeps two adults on Queen Size bed. Sofa bed recently added with memory foam mattress. A limit of two pets are welcome if they get along well with others. We have three dogs and a cat, also cows which roam the fields near barn. I recently bought a Donkey, her name is Jenny. Jenny is very tame, loves to be touched, especially brushed all over . She is expecitng a baby, we're not sure when.Our cows have had six babies this Summer. We love to watch them run and play in the field."
    ],
    ["Spacious Lakefront Log Home Retreat",
      "Our cabin is on Greers Ferry Lake. It is a lakefront log cabin property! You’ll love our cabin because of the coziness, fully-furnished bathrooms/kitchen/laundry area, the comfy beds, authentic log home experience and the easy water access that is great for swimming, fishing, or sitting in the shade. You will also love the spacious den that is rarely found in lakefront properties. Our cabin is good for couples, families, big groups, friends, and furry friends (pets).",
      "Beautiful waterfront log home retreat. This home is perfect in every way; you will be delighted with the memories you will make during your stay. A romantic hideaway for a weekend getaway, a family vacation with the kids, or with a group of friends. A cozy, warm and down to earth place with the extras that make your getaway complete."
    ],
    ["Collier's Rustic Log Home",
      "My place is close to: Winston-Salem, parks, art & culture (Seagrove), wineries, great views (house & mountains), restaurants (all varieties & ranges). You’ll love my place (log home) because of the coziness, rustic and relaxing environment. It is open & inviting inside, has a large yard, a front porch, a screened in porch and a back deck. Has the country feel but has quick access to civilization. My place is good for couples, solo adventurers, business travelers and furry friends (pets).",
      "We are close to many attractions in the vicinity of Rural Hall (including: Winston-Salem, Old Salem, Mt. Airy, Pilot Mountain, Hanging Rock, Seagrove, Greensboro, Bethabara). This room can accommodate 2 guests but we have a 2nd room that could accommodate another 2 guests if needed (see Collier's Rustic Log Home - Room 2 listing)."
    ]
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

  15.times do |idx|

    Spot.create!(
            host_id: all_users.sample.id,
            title: farms[idx][0],
            base_price: rand(150..1000),
            summary: farms[idx][1],
            main_photo: File.open("app/assets/images/farm#{idx % 17}.jpg"),
            description: farms[idx][2],
            privacy_level_id: all_privacy_levels.sample.id,
            num_guests: rand(1..10),
            num_bedrooms: rand(1..10),
            num_beds: rand(1..10),
            num_bathrooms: rand(1..10),
            street_address: addresses[idx % 3].pop,
            city: locations[idx % 3][0],
            state_id: locations[idx % 3][2],
            zipcode: locations[idx % 3][1],
            main_photo_url: '',
          )
  end

  date_ranges = [
    ['Thu, 01 Jun 2017', 'Sat, 10 Jun 2017'],
    ['Mon, 05 Jun 2017', 'Thu, 15 Jun 2017'],
    ['Sat, 10 Jun 2017', 'Tue, 20 Jun 2017']
  ]

  Spot.all.each do |spot|
    date_range = date_ranges[(0..2).to_a.sample]

    start_date = Date.parse(date_range.first)
    end_date = Date.parse(date_range.last)

    (start_date..end_date).each do |date|
      Availability.create!(available_date: date, spot_id: spot.id)
    end

  end



end

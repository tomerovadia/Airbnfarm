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
  old_macdonald = User.create!(email: 'old.macdonald@gmail.com', password: 'password', avatar_url: 'https://s-media-cache-ak0.pinimg.com/236x/c8/0d/c9/c80dc9953dc3752bb7c3e4462652d504.jpg')

  guestsInfo = [
    ['barack.obama@gmail.com', 'https://media.newsela.com/article_media/2016/02/prezbios-obama-4ecbc34f.jpg.400x400_q90_box-578%2C0%2C2052%2C1473_crop_detail.jpg'],
    ['walter.white@gmail.com', 'https://s-media-cache-ak0.pinimg.com/originals/57/46/e9/5746e9611d16aacfa1eb9dc66fe298f8.jpg'],
    ['oprah.winfrey@gmail.com', 'http://sweetphenomena.com/wp-content/uploads/2014/10/Oprah-headshot.jpg'],
    ['jeff.bezos@gmail.com', 'http://a3.res.cloudinary.com/allamerican/image/fetch/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/856887/large_Bezos_Jeff_3.jpg'],
    ['donald.trump@gmail.com', 'http://www.guymondailyherald.com/sites/default/files/field/image/DONALD-TRUMP.jpg'],
    ['vladimir.putin@gmail.com', 'http://newslines.org/wp-content/uploads/2015/09/Vladimir-Putin-headshot-150x150.jpg'],
    ['kobe.bryant@gmail.com', 'https://www.famousbirthdays.com/headshots/kobe-bryant-4.jpg'],
    ['will.smith@gmail.com', 'https://www.wibwnewsnow.com/wp-content/uploads/2015/03/will-smith-headshot-300x225.jpg'],
    ['jeff.zuckerberg@gmail.com', 'https://s-media-cache-ak0.pinimg.com/originals/14/ed/da/14eddac8cbed3b6cfee947a3d9262f5b.jpg'],
    ['joe.biden@gmail.com', 'https://obamawhitehouse.archives.gov/sites/obamawhitehouse.archives.gov/files/styles/person_large_photo/public/person-photo/vice-president-biden.jpg']
  ]

  guests = []

  guestsInfo.each do |guestInfo|
    guests << User.create!(email: guestInfo.first, password: 'password', avatar_url: guestInfo.second)
  end

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
    ['Gorgeous misty field',
      'Family cabin for hunting/fishing/wedding/reunion/etc. Huge fenced yard, off street parking and RV electrical hook up (may require adapter or extension cord). Central AC to keep cool, an extra foam mattress, kitchen has all small appliances and TV with cable. Located close to Harlan reservoir and walking distance to restaurants/bars. Great for a week of fishing or hunting. We welcome hunters, fisherman, or just family vacationers to our family cabin!',
      'Family cabin for hunting/fishing/wedding/reunion/etc. Huge fenced yard, off street parking and RV electrical hook up (may require adapter or extension cord). Central AC to keep cool, an extra foam mattress, kitchen has all small appliances and TV with cable. Located close to Harlan reservoir and walking distance to restaurants/bars. Great for a week of fishing or hunting. We welcome hunters, fisherman, or just family vacationers to our family cabin!'
    ],
    ["Gorgeous cornfield with snow-capped mountains",
      "Come join me and my wife in our lovely cornfield, inherited from my grandfather and going back in my family since the 1800s.",
      "We have a wonderful cabin that would be all for you, and our dogs frequent the place (hope you're a dog person!). We have two horses in the stable, and you can ride them at your leisure (just please, daytime only)."
    ],
    ["Giant hay farm",
      "Located in small town. Just a stones throw from Waconda lake and wildlife area. Known for its great fishing and hunting.",
      "Located in small town. Just a stones throw from Waconda lake and wildlife area. Known for its great fishing and hunting."
    ],
    ["Rustic farm with tractors",
      "We have a beautiful 2000 square foot facility with amazing scenery. This is one of farmland's best kept secrets for you and your friends and family to enjoy in privacy.",
      "We have a beautiful 2000 square foot facility with amazing scenery. This is one of farmland's best kept secrets for you and your friends and family to enjoy in privacy."
    ],
    ["Fantasyland with gorgeous backyard",
      "My husband is an artist and I'm a carpenter, so we've made this place the perfect storybook escape.",
      "Complete with horse-drawn carriages and art in every nook and corner of this beautiful house."
    ],
    ["Picturesque pasture with farm animals",
      "Spacious lake view loft that provides a private wooded retreat. All the amenities of home including satellite TV. Wildlife is abundant grazing in the yard. Spectacular sunsets while relaxing on a beautiful patio with built in fire pit.",
      "Spacious lake view loft that provides a private wooded retreat. All the amenities of home including satellite TV. Wildlife is abundant grazing in the yard. Spectacular sunsets while relaxing on a beautiful patio with built in fire pit."
    ],
    ["Gorgeous 2-acre tomato farm",
      "Large home to rent/with bunk house full kitchen, outdoor grill, and fryer. Perfect for fishing on Missouri, indoor boat parking, electrical for charging, fridge and freezers for catch, 10 miles to Pease creek dock, 15 miles to Platte Creek.",
      "Large home to rent/with bunk house full kitchen, outdoor grill, and fryer. Perfect for fishing on Missouri, indoor boat parking, electrical for charging, fridge and freezers for catch, 10 miles to Pease creek dock, 15 miles to Platte Creek."
    ],
    ["Ranch alongside red mountains",
      "There is a rocking chair on the front porch waiting for you to use at our farm home. We have a quiet, separate area for you. You may stay in your own private area or join us in our spacious kitchen for a glass of iced sweet tea.",
      "Helen is a retired Medical Technologist and Kenneth retired June 2014 after managing a farm store for many years.. This is a NON-SMOKING home. We have two dogs around the house and two cats at the barn. Our farm also has chickens and cows. Our Children are grown and live in another city. If our guests have time, we would love to share a cup a coffee and a danish (or something like that) with them. In the afternoon on a pretty day, they can sit in a rocker on the front porch with a glass of tea and watch the cows grazing. We prefer our guests do not bring pets."
    ],
    ["Stunning wheat and soybean farm",
      "This beautiful cabin is nestled in a wooded area on the Little Red River near Pangburn. 'Camp David' offer guests a perfect getaway place for personal discovery or recreation. The cabin's rustic charm blends with its natural surroundings and the location offers a feeling of seclusion yet it is conveniently located to the towns of Pangburn and Heber Springs and their plentiful options for outdoor recreation, unique shopping and dining.",
      "The exterior of the cabin is Cypress with a metal roof (great on rainy days), features two great decks overlooking the river, a screened in porch with a daybed that is ideal for napping or sleeping to the sounds of the outdoors. A rock walkway leads you to your private boat and fishing dock where you can catch trout in your own backyard or just sit and enjoy the river and watch the trout rise and meet the two winged residents that include geese, ducks, kingfishers, bald eagles and great blue heron."
    ],
    ["Animal Farm (non-Soviet)",
      "Luxury home on the Little Red River with dock. 10 Minutes from Greers Ferry Lake.",
      "This ranch has been in my family for 150 years! I would love to share it with respectful guests who need a place to stay in this lovely part of the state."
    ],
    ["Former church, now horse ranch",
      "The Magic Mist cabin is decorated in Steampunk/ Industrial style. It is not the typical river cabin decor, yet it is attention to detail that makes this such a charming and unique place to stay. Perfect for relaxing and reconnecting with nature, and each other.",
      "Beautiful river setting surrounded by trees and nature, keeping reality far behind to let you unwind in peace."
    ],
    ["Tomato farm with gorgeous sunset",
      "Lakefront Cabin with Swimming, Fishing and Boating Feet Away from Privat (URL HIDDEN) of the nicest and newest cabins directly on Greers Ferry Lake. Private lakeaccess steps away from the porch. Anchor your boat in front of the house and walk up to cabin",
      "Fully Furnished, Large porch, lots of windows, newer appliances,this nice lakefront cabin is ready for your vacation. Spent time on Greers Ferry Lake at an affordable price. Located directly across from Dam Site Marina, this newer home has great views and easy lake access. Landscaped with natural rock and adult trees, it's sure to provide you and your family with unforgettable memories of a fun time at the shores of Greers Ferry Lake. The sunsets are included at no charge and world class walleye fishing is at your door. Dam Site Marina is only minutes away straight across the lake."
    ],
    ["Wheat farm with rolling hills",
      "This property features a great 2000 sq. foot mobile home on the Little Red River in Heber Springs. It includes a gas grill, table and chairs where you can enjoy a view of the river while you cook. There is also a large fire pit for your enjoyment.",
      "You will also enjoy a private boat dock with table and chairs (all children under the age of 14 must be accompanied by an adult and wear a life jacket at all times. Life jackets can be found in closet on dock). Trout House has a fully equipped kitchen for preparing meals and is open to second living area. Heber Springs is only minutes away and hosts shops, galleries and restaurants. The Greers Ferry Lake is a great place for swimming or renting jet ski or boats for a day."
    ],
    ["Peaceful creek-side country pasture",
      "Country retreat near Greers Ferry Lake, Little Red Rvr, White Rvr, Blanchard Caverns, Mt. View , Ozark Folk Ctr. Studio w/kitchen, qn/ bed, TV, internet & Wifi. Peaceful pvt. porch, great views and sunsets. Landscaped yard, firepit, arbor & swing.",
      "Everything you'll need all in one room. Sleeps two adults on Queen Size bed. Sofa bed recently added with memory foam mattress. A limit of two pets are welcome if they get along well with others. We have three dogs and a cat, also cows which roam the fields near barn. I recently bought a Donkey, her name is Jenny. Jenny is very tame, loves to be touched, especially brushed all over . She is expecitng a baby, we're not sure when.Our cows have had six babies this Summer. We love to watch them run and play in the field."
    ],
    ["Jane's horse and hay farm",
      "Our cabin is on Greers Ferry Lake. It is a lakefront log cabin property! You’ll love our cabin because of the coziness, fully-furnished bathrooms/kitchen/laundry area, the comfy beds, authentic log home experience and the easy water access that is great for swimming, fishing, or sitting in the shade. You will also love the spacious den that is rarely found in lakefront properties. Our cabin is good for couples, families, big groups, friends, and furry friends (pets).",
      "Beautiful waterfront log home retreat. This home is perfect in every way; you will be delighted with the memories you will make during your stay. A romantic hideaway for a weekend getaway, a family vacation with the kids, or with a group of friends. A cozy, warm and down to earth place with the extras that make your getaway complete."
    ],
    ["Giant, stunning wheat pasture",
      "My place is close to: Winston-Salem, parks, art & culture (Seagrove), wineries, great views (house & mountains), restaurants (all varieties & ranges). You’ll love my place (log home) because of the coziness, rustic and relaxing environment. It is open & inviting inside, has a large yard, a front porch, a screened in porch and a back deck. Has the country feel but has quick access to civilization. My place is good for couples, solo adventurers, business travelers and furry friends (pets).",
      "We are close to many attractions in the vicinity of Rural Hall (including: Winston-Salem, Old Salem, Mt. Airy, Pilot Mountain, Hanging Rock, Seagrove, Greensboro, Bethabara). This room can accommodate 2 guests but we have a 2nd room that could accommodate another 2 guests if needed (see Collier's Rustic Log Home - Room 2 listing)."
    ],
    ["Terrace farm with gorgeous views",
      "Come on a vacation getaway in this rustic modern cabin nestled in the woods! Cedar Ridge Hideaway cabin has it all!!! This is a BRAND NEW LISTING! After years of it being our personal cabin, we have decided to start renting it out to others. This cabin is so private! Feel as if you're the only people around as you get cozy in all of the natural sunlight the cabin provides. This cabin has all the amenities you need for your family with three separate living rooms!!",
      "We are close to many attractions in the vicinity of Rural Hall (including: Winston-Salem, Old Salem, Mt. Airy, Pilot Mountain, Hanging Rock, Seagrove, Greensboro, Bethabara). This room can accommodate 2 guests but we have a 2nd room that could accommodate another 2 guests if needed (see Collier's Rustic Log Home - Room 2 listing)."
    ],
    ["Uncle Jack's tomato farm",
      "Large home to rent/with bunk house full kitchen, outdoor grill, and fryer. Perfect for fishing on Missouri, indoor boat parking, electrical for charging, fridge and freezers for catch, 10 miles to Pease creek dock, 15 miles to Platte Creek.",
      "Ample parking with drive through access, outside electrical outlets for boat or trailer, barbecue grill (charcoal, lighter fluid provided), drip type coffee maker, coffee and condiments."
    ],
    ["Ranch home with many cows",
      "Private room with a love seat and walk-in closet. Bathroom a couple feet from bedroom. Come enjoy relaxing atmosphere of our home in the country!",
      "Beautiful waterfront log home retreat. This home is perfect in every way; you will be delighted with the memories you will make during your stay. A romantic hideaway for a weekend getaway, a family vacation with the kids, or with a group of friends. A cozy, warm and down to earth place with the extras that make your getaway complete."
    ],
    # ["Giant solar farm -- wonderful weather!",
    #   "My sons and I started a solar farm after moving from New York and seeking a new life. It's such a wonderful place, we'd love for you to join us!",
    #   "The solar farm has one large house that we live in, and you would be staying in a room with your own bathroom. We have solar panels EVERYWHERE, so you'll have to be okay with that. Everything is powered by solar. We're huge fans of the environment, so expect a lot of recycling!"
    # ],
    ["GORGEOUS flower farm!",
      "My wife and I are retired and now manage this wonderful 100-acre farm of flowers!",
      "We're the biggest supplier of flowers in the state, so we hope you will join us and learn about this wonderful craft!"
    ],
    ["Developing farm in the works!",
      "My wife and I moved to this town a few months ago -- we're in the process of making our own organic farm, and we'd love your help!",
      "This Airbnb is FREE -- we take no money, but we ask that you help us dig dirt. We've got a lot of work to do, and many shovels, but we'd love company and strong hands!"
    ],
    ["Corn farm with beautiful sky",
      "This 50-acre corn field has corn mazes, a wonderful authentic rural experience and a BEAUTIFUL sky all year round!",
      "My grandfather and I work on this farm all day, and have done so every day since I can remember. I've never left, but there isn't any reason to! But rather than experience other places myself, I'd love for you to come tell me about the cities and the rest of the world. So come keep us company and enjoy the farm with us!"
    ],
    ["River-side sheep farm",
      "If you love sheep and rivers, this is the place for you! Gorgeous views of the sunset, with more sheep than you could ever ask for.",
      "We have about 1,000 sheep on premises, and rafts on the river side. You can join us in grooming the sheep and herding them, or jump in the water with us if it's not too cold."
    ],
    ["MASSIVE hay farm",
      "Hay, hay and more hay. We make hay, and a lot of it. In fact we're one of the biggest suppliers of hay for the area.",
      "If you've always wanted to drive a tractor dragging 7 tons of hay behind it, this is your place. We love professionals and novices alike and are more than happy to teach you how to make hay. In fact we hope you'll hear us talk about hay for at least a few hours!"
    ],
    ["Hill-side sheep farm",
      "We have 10,000 sheep grazing on the side of this hill! How did that happen? Not intentional, but we figure others may be interested in experiencing it with us. We hope that'll be you!",
      "This gorgeous hillside has more sheep now than we can handle, and we know the EPA won't be okay with that. So we're enlisting Airbnb guests' help in grooming them and making sure they're comfortable. Must be able to tolerate many, many sheep, all day (and sometimes all night)."
    ],
    ["Multi-plant farm with windmills!",
      "This farm has EVERYTHING - corn, soybeans, squash, you name it.",
      "Our most recent addition are windmills -- we have several 100 acres, of all sizes. Happy to teach you to use them if you're willing to pull up your sleeves!"
    ],
    ["Cow-lovers paradise!",
      "I grew up with cows, and now I want to share the experience with others! We have cows, bulls and other large farm animals.",
      "MUST be able to work with cows, including aggressive cows with horns."
    ],
    ["Farm patches",
      "This multi-colored farm has everything you might ever want! Irrigation systems and multiple communities of all kinds.",
      "This location has several houses, all yours for your visit. Great for family reunions. Different housing complexes are scattered throughout the farm, so good for very large families or gatherings (like corporate retreats). MUST FEED THE CHICKENS AND MILK THE COWS."
    ],
    ["Grass field",
      "I'm not sure if this counts as a farm, but it's gorgeous all year round.",
      "You'll have to bring a tent of your own, but if you don't mind that, you'll LOVE the views in this patch of wild grass. No pesticides and yet it's better than any grass field you've ever seen. Bring weather-proof clothing as sometimes it storms unexpectedly."
    ],
    ["Tractors, tractors, tractors",
      "WE HAVE TRACTORS. If you've always wanted to learn how to ride tractors, this is the place to stay.",
      "We can accommodate a family and teach you all how to ride tractors of all kinds. We have industrial as well as small-scale tractors to fit anyone's needs and preferences."
    ],
    ["Small antique wood outpost",
      "Hey- I have an outpost with some wood that can probably fit a person or two.",
      "If you're interested, let me know. There are lots of daffodils too. Hope you don't mind."
    ],
    ["Picturesque frm with windmill",
      "This BEAUTIFUL farm is the real happiest place on Earth (sorry Disneyland).",
      "Ride around in your bike with a perfect blue sky and wonderful weather. Or take the stairs up to the top of a real, antique windmill, where you'll get a beautiful view of our pasture and sheep."
    ],
    ["Wonderful forest red cabin",
      "We have a 10-acre farm with a lovely red log cabin nestled near the snow-capped mountains.",
      "This place is especially gorgeous in the fall, with every shade of yellow, red, green and orange your heart might ever desire."
    ],
    ["HUGE family-owned farm",
      "This massive 100-acre farm is operated with industrial-grade machinery, but stays in my family.",
      "Most farms these days are part of giant agribusiness, or they're tiny and meant only for a few families. This one is the best of both worlds. Experience my family's farm while also gaining invaluable skills and knowledge in industrial farming equipment."
    ],
    ["Colorful farm with red cabin",
      "This farm would have made Lincoln's cabin jealous. Beautiful colors all year round, with flowers and grass fields.",
      "Especially stunning in the summer, with beautiful blue skies."
    ],
    ["Beautiful farm with grass-fed cows",
      "Our cows love is so much here and think you will too!",
      "Our cows are each given names, and we celebrate their birthdays! Most importantly, we feed them the lushest grass you've ever seen. Come join them!"
    ],
    ["Farm on a marsh",
      "This farm is interspersed with small bodies of water, cows, windmills and lovely, decorated homes.",
      "We provide transportation around the farm via whatever your heart desires -- horses, carriages, cars, bikes and more!"
    ],
    ["Tomato farm paradise",
      "This farm has 300 acres of tomatoes and is the perfect getaway. Run across the fields with your significant other for a true adventure!",
      "The clouds in this area -- if you're not from here -- are the most stunning. Bring an umbrella just in case -- or if you forget, we've got you covered!"
    ],
    ["Mansion on top of a hill",
      "Stay in this giant home with us, surrounded by the best that nature has to offer.",
      "This home has a driveway for easy access, giving you all the comforts of modern life, while still being tucked in some of the most gorgeous natural environment you've ever seen."
    ],
    ["Wonderful getaway in the forest",
      "Everygreen trees everywhere! We love it and hope you will too.",
      "Come join us on our lovely farm, where everything is green. We only grow green things, so hope you like peas (no carrots!)."
    ],
    ["Hand-cultivated farm",
      "We do everything by hand! Like hundreds of years ago, when there wasn't any machinery.",
      "Join us for a TRULY authentic urban experience, we get around by FOOT, dig by SHOVEL and erect by HAMMER. We think you'll love it and hope you'll join us!"
    ],
    ["Small wood cabin with attic",
      "I have a small wood cabin near the hill in my backyard that someone can use if they need. It has an attic if for some reason you're in to that kind of thing.",
      "The hills are pretty awesome in the back if you're an adventurer -- pretty awesome view from the top if I don't say so myself."
    ],
    ["Wheat farm as far as eye can see",
      "Do you love carbs as much as me? If so, you'll love my wheat farm!",
      "Come stay with me and my kids in this giant wheat farm -- we grow wheat all-year-round. And that's all we eat too -- it's what your body really wants and needs, you know."
    ],
    ["Almond tree farm",
      "If you haven't grown almonds before, it's quite the treat, and requires special skill!",
      "Come visit me and my wife and join us in our attempt to break into the almond tree business. We've already set up most of the trees, but you can join us in harvesting or clipping leaves."
    ],
    ["Wheat farm with GORGEOUS sunset",
      "My wife and I met on a wheat farm while watching the sunset. I had the great idea, and she did too. We want other people to live that experience. So if you're into wheat and sunsets, this is for you.",
      "MUST not be alergic to wheat (if that wasn't already obvious)."
    ],
    ["Cows and tall grass",
      "I've worked on two farms in my life -- one with cows and short grass and another without cows but with tall grass. I figured, why not put them together!",
      "This scene is gorgeous in the spring, with wonderful yellow flowers and tall, dark-green grass. Our cows roam the grass and graze most of the day. We can use your help getting them back at night (optional)."
    ],
    ["Antique farm",
      "We have winmills and antique equipment used back in the day - and today, by us! If you're into how things used to be done this is the place for you.",
      "You'll be staying in a windmill, which can get cold at night, so bring warm clothes! Also, the windmill turns when it's windy, so not the best place for light sleepers."
    ],
    ["Yellow flowers field",
      "We grow yellow flowers of ALL kinds! If you're into yellow flowers as much as me (and my family), then this is the place for you.",
      "If you're a fellow farmer, please bring your own seeds and we can grow them together."
    ],
    ["Terrace farm",
      "Terrace farming -- the best workout for your core! Join us in our wonderful hill-side farm, with beautiful views.",
      "Guests get to stay in one of our many hill-side wood structures, raised from the ground."
    ],
    ["Rolling hills and cows",
      "If you love rolling green hills, trees, winding roads and grass-fed, spotted cows, this is the place for you.",
      "We have several yurts throughout that you can stay at. Feel free to move between them if you'd like more adventure!"
    ],
    ["Giant spinach farm",
      "We're the largest family-owned spinach farm in the state.",
      "Stay at one of our cabins and help our workers during the day as they cultivate and care for our wonderful spinach farm. Bring a hat -- it's warm!"
    ],
    ["River-side home",
      "If you enjoy a simple life along a river, this is the place for you!",
      "Our lovely home (with an outpost for storage) is along a river, with plenty of fish to keep your stomach full. You can fly drones and run across the fields. The perfect escape."
    ],
    ["Colorful farm",
      "We grow everything, and love how our crops blend with our beautiful sky.",
      "If you're looking for a relaxing, picturesque escape, this is the place for you."
    ],
    ["Rolling hills like you've never seen",
      "This BEAUTIFUL country farm has smooth rolling hills with the finest grass in the country.",
      "Ever roll down a hill as a child? If so, this will top everything you've ever experienced, and if not, this is the place to make your first!"
    ],
    ["Open field farm",
      "We have a LARGE area with gorgeous yellow farm land, speckled with the occasional tree.",
      "The summers are especially gorgeous, with beautiful blue sky. Great place for a retreat!"
    ],
    ["Stunning marsh",
      "This farm is part cultivated and part natural. We love the beauty, especially the sky.",
      "Enjoy the many small bodies of water, some big enough to jet ski in during the summer! Bring friends. Ski rentals are included."
    ],
    ["Red cabin in the snow!",
      "Looking to escape to a winder wonderland? This is the place for you!",
      "This lovely, picturesque red cabin is tucked away in a field that receives the perfect layer of snow in the winter. Heated and with all amenities you might ever ask for."
    ],
    ["Red cabin in the mountains",
      "Tucked away in the mountains, this red cabin sits at the top of a gorgeous farm.",
      "We love woodcraft and have all the tools you might need to build something cool to take home with you!"
    ],
    ["Log cabin in true seclusion",
      "Ever see the sky with no light pollution? This home takes things to another level.",
      "Astronomer's paradise! See all the stars, planets and solar system with stunning clarity. This log-cabin is picturesque but has modern amenities inside."
    ],
    ["Industrial farm",
      "We've got all the machiner you've ever wanted and imagined! If you're a farm machinery lover, this is the place for you.",
      "If you love farm machinery too, let's nerd about it together! If you're a novice, we'll answer any questions you may have!"
    ],
    ["Wind farm",
      "My family LOVES wind! We're the ones who made up the whole global warming thing so that we (and you!) can enjoy heavily subsidized wind turbines.",
      "We have wind turbines of ALL sizes, large and small. Fun for the whole family!"
    ],
    ["Ol' West Former Church",
      "Are you into old westerns? If so, this is a paradise for you! Ride horses like you're from the Wild West.",
      "You get to stay in a former church that has been renovated on the inside."
    ],
    ["Retired horse ranch",
      "We LOVE horses! If you do too, come join us!",
      "We retire horses of all kinds -- race horses, carriage horses, trick horses. If you love horses and want to care for these wise animals, please join us!"
    ],
    ["Raised wooden art project",
      "There's this WONDERFUL bamboo farm overlooking the hills and mountains that look stunning during the sunet.",
      "I created an art project here -- a raised wooden structure. I'd love for people to use it. It' snot water proof, so come prepared. Also, bring warm clothes. Must not be afraid of heights. Amazing view!"
    ],
    ["Stunning grass field",
      "This open field is a perfect place for silence and escaping the loud honking of a city (*cough* NYC *cough*).",
      "It can get windy, so come prepared!"
    ],
    ["Rustic escape with hiking paths",
      "This rustic escape has the most scenic hiking paths! Come enjoy it with us -- we're happy to show you around.",
      "Do NOT go into the neighbor's land -- they do not take it lightly at all."
    ]
  ]

  addresses = [
    ['121 Main St.', '745 Railroad Avenue', '450 Southern Avenue', '120 Kansas Avenue', '1152 E Quail Rd.', '131 Main St.', '201 Railroad Ave', '426 Main St', '160 Main St', '424 Center St', '204 2nd St'],
    ['19 Rose Ln', '95 Shelly Street', '552 4th St', '450 Moore St', '59 W Main St', '1739 Blackland Rd', '79 Rose Ln', '466 Farm Field Rd', '550 Farm Field Rd', '910 Meadow Lake Rd', '5500 Newport Road'],
    ['200 S Hassett St.', '150 E Dakota St.', '114 N Wilder St.', '245 N Carpenter St.', '475 Main St.', '28953 407th Ave', '40778 292nd St', '29248 410th Ave', '29338 412th Ave', '29070 415th Ave', '28514 417th Ave'],
    ['37677 Washington St', '37652 Sacramento St', '14220 1st St', '37690 Clay St', '14148 2nd St', '14415 2nd St', '14201 3rd St', '37526 5th St', '37765 Washington St', '14244 1st St', '37660 Washington St'],
    ['561 Cypress Dr', '131 Bois D Arc', '1409 Cypress Dr', '109 Mossy Brake Dr', '176 Cypress Dr', '231 Mound Pond Rd', '3300 Broadway', '5283 Cypress Dr E', '169 Mossy Brake Dr', '4986 Broadway St', '2101 Broadway St'],
    ['28924 Davis Rd', '28358 Mormon Blvd', '29396 ID-51', '29102 Davis Rd', '29811 Mormon Blvd', '28283 Shoofly Cutoff Rd', '31541 ID-51', '30709 ID-51', '29393 Davis Rd', '42069 ID-78', '27251 Anderson Loop']
  ]

  locations = [
    ['Agra', 67621, State.find_by(state_name: 'KS').id],
    ['Oil Trough', 72564, State.find_by(state_name: 'AR').id],
    ['Tripp', 57376, State.find_by(state_name: 'SD').id],
    ['Yolo', 95697, State.find_by(state_name: 'CA').id],
    ['Karnack', 75661, State.find_by(state_name: 'TX').id],
    ['Bruneau', 83604, State.find_by(state_name: 'ID').id]
  ]

  66.times do |idx|

    file_name = File.exist?("app/assets/images/farm#{idx}.jpeg") ? "farm#{idx}.jpeg" : "farm#{idx}.jpg"

    if idx === 25 || idx === 35 || idx === 48
      host_id = User.find_by_email('old.macdonald@gmail.com').id
    else
      host_id = all_users.sample.id
    end

    Spot.create!(
            host_id: host_id,
            title: farms[idx][0],
            base_price: rand(150..500),
            summary: farms[idx][1],
            main_photo: File.open("app/assets/images/#{file_name}"),
            description: farms[idx][2],
            privacy_level_id: all_privacy_levels.sample.id,
            num_guests: rand(1..10),
            num_bedrooms: rand(1..10),
            num_beds: rand(1..10),
            num_bathrooms: rand(1..10),
            street_address: addresses[idx % 6].pop,
            city: locations[idx % 6][0],
            state_id: locations[idx % 6][2],
            zipcode: locations[idx % 6][1],
            main_photo_url: '',
          )
  end

  date_ranges1 = [
    ['Sat, 01 Jul 2017', 'Sat, 15 Jul 2017'],
    ['Mon, 10 Jul 2017', 'Tue, 25 Jul 2017'],
    ['Thu, 20 Jul 2017', 'Sun, 30 Jul 2017']
  ]

  date_ranges2 = [
    ['Tue, 01 Aug 2017', 'Tue, 15 Aug 2017'],
    ['Thu, 10 Aug 2017', 'Fri, 25 Aug 2017'],
    ['Sun, 20 Aug 2017', 'Wed, 30 Aug 2017']
  ]

  date_ranges3 = [
    ['Fri, 01 Sep 2017', 'Fri, 15 Sep 2017'],
    ['Sun, 10 Sep 2017', 'Mon, 25 Sep 2017'],
    ['Wed, 20 Sep 2017', 'Sat, 30 Sep 2017']
  ]



  def createAvailabilities(date_ranges)
    Spot.all.each do |spot|
      date_range = date_ranges[(0..2).to_a.sample]

      start_date = Date.parse(date_range.first)
      end_date = Date.parse(date_range.last)

      (start_date..end_date).each do |date|
        Availability.create!(available_date: date, spot_id: spot.id)
      end

    end

  end

  createAvailabilities(date_ranges1)
  createAvailabilities(date_ranges2)
  createAvailabilities(date_ranges3)

  # Old MacDonald's Trips
  10.times do |idx|

    spot = Spot.all[(0...Spot.all.length).to_a.sample]
    until spot.host.email != 'old.macdonald@gmail.com'
      spot = Spot.all[(0...Spot.all.length).to_a.sample]
    end

    availabilities = spot.availabilities.order(:available_date).limit(3)
    start_date = availabilities.first.available_date
    end_date = availabilities.last.available_date

    status = BookingStatus.all[idx % BookingStatus.all.length]

    booking = Booking.create!(
        guest: User.find_by_email('old.macdonald@gmail.com'),
        spot: spot,
        status: status,
        start_date: start_date,
        end_date: end_date,
        title: spot.title,
        city: spot.city,
        base_price: spot.base_price.to_i
      )

    if status.status == 'approved'
      Availability.book_availabilities(booking.start_date, booking.end_date, booking.spot)
    end

  end

  # Old MacDonald's Reservations
  10.times do |idx|
    host = User.find_by_email('old.macdonald@gmail.com')
    guest = guests[idx % 10]
    spot = host.listings.sample
    availabilities = spot.availabilities.where(is_available: true).order(:available_date).limit(3)
    start_date = availabilities.first.available_date
    end_date = availabilities.last.available_date

    status = BookingStatus.all[idx % BookingStatus.all.length]

    booking = Booking.create!(
        guest: guest,
        spot: spot,
        status: status,
        start_date: start_date,
        end_date: end_date,
        title: spot.title,
        city: spot.city,
        base_price: spot.base_price.to_i,
        num_guests: (1..spot.num_guests).to_a.sample
      )

      if status.status == 'approved'
        Availability.book_availabilities(booking.start_date, booking.end_date, booking.spot)
      end
  end

end

```js
{
  currentUser: {
    id: 1,
    email: "tomertomer@gmail.com",
    fname: 'Tomer',
    lname: 'Ovadia',
    city: 'New York',
    gender: 'Male',
    description: "My husband Nick and I have always loved the mountains and after moving to California we fell in love with Lake Tahoe. We are excited to have a cozy cabin and be able to share it with others.",
    photo_url: 'example.com/photo'
  },

  sessions: {
    signUp: {
      errors: []
    },
    logIn: {
      errors: []
    },
  },


  bookings: {
    traveling: {
      1: {
        host: 'Reid',
        host_img_url: 'example.com/host.png',
        title: 'Adorable cabin close to the lake',
        status: 'Pending',
        date_created: 'Feb 12',
        booked_from_date: 'May 24',
        booked_to_date: 'Sep 23',
      },
      2: {
        host: 'Kunal',
        host_img_url: 'example.com/host.png',
        title: 'Bamboo eco cottage in rice fields',
        status: 'Approved',
        date_created: 'Mar 3',
        booked_from_date: 'Jan 21',
        booked_to_date: 'Feb 4',
      },
      3: {
        host: 'Sarah',
        host_img_url: 'example.com/host.png',
        title: 'treehouse in the forest',
        status: 'Completed',
        date_created: 'Sep 5',
        booked_from_date: 'Mar 25',
        booked_to_date: 'Apr 4',
      },
      4: {
        host: 'Bob',
        host_img_url: 'example.com/host.png',
        title: 'Dungeon in middle of nowhere',
        status: 'Denied',
        date_created: 'Apr 12',
        booked_from_date: 'May 6',
        booked_to_date: 'May 27',
      },
    },

    hosting: {
      hosting_bookings: {
        1: {
          guest: 'Ashley',
          guest_img_url: 'example.com/guest.png',
          title: 'Adorable cabin close to the lake',
          status: 'Pending',
          date_created: 'Dec 31',
          booked_from_date: 'July 21',
          booked_to_date: 'Nov 5',
        },
        2: {
          guest: 'Andrew',
          title: 'Bamboo eco cottage in rice fields',
          status: 'Approved',
          date_created: 'Mar 31',
          booked_from_date: 'Dec 13',
          booked_to_date: 'Nov 5',
        },
        3: {
          guest: 'Rakshit',
          title: 'Brooklyn apartment near Prospect Park',
          status: 'Completed',
          date_created: 'May 23',
          booked_from_date: 'Oct 11',
          booked_to_date: 'July 14',
        },
        4: {
          guest: 'Muhammed',
          title: '5-story Central Park Penthouse',
          status: 'Denied',
          date_created: 'Apr 2',
          booked_from_date: 'Jun 6',
          booked_to_date: 'May 6',
        },
      },
    },

  },



  homespots: {
    1: {
        title: 'Adorable cabin close to the lake',
        address: '123 Main St., Carnelian Bay, CA, USA',
        base_price: 180,
        review_stars: 4.5,
        type: 'Entire home/apt',
        num_beds: 3,
        num_reviews: 116,
        photos: {
          1: {
            url: 'example.com/photo1.jpeg',
            description: 'The deck by night with a sparkle light canopy!'
          }
          2: {
            url: 'example.com/photo2.png',
            description: 'Mudroom with plenty of room for storing hiking gear, skis'
          }
        }
      }
    },
  },

  current_homespot: {
    title: 'Adorable cabin close to the lake',
    address: '123 Main St., Carnelian Bay, CA, USA',
    base_price: 180,
    main_photo_url: 'example.com/mainphoto.png'
    city: 'Carnelian Bay, CA, USA',
    review_stars: 4.5,
    num_reviews: 116,
    type: 'Entire home/apt',
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 3,
    summary: "We would love for your to enjoy your Tahoe vacation in our cozy, inviting cabin! You'll have access to a private beach and pier- easy walking distance from the cabin. Enjoy morning coffee or evening hot chocolate on the large deck.",
    num_bathrooms: 2,
    type: 'Cabin',
    check_in: 'Anytime after 4PM',
    check_out: '11AM',
    amenities: {
      essentials: true,
      wifi: true,
      shampoo: true,
      closetdrawers: true,
      tv: true,
      heat: true,
      airconditioning: true,
      breakfastcoffeetea: true,
      deskworkspace: false,
      fireplace: false,
      iron: false,
      hairdryer: false,
      petsinhouse: false,
      privateentrance: false,
    },
    security_deposit: 500,
    cleaning_fee: 160,
    description: "This is the quintessential Tahoe family cabin built in the 1950s with a large deck and views of Lake Tahoe through the towering pine trees. It has been completely renovated and tastefully updated, offering the perfect combination of modern conveniences while maintaining the Old Tahoe feel. You'll have access to a private HOA park with picnic tables and grill, beach, and pier just a short walk away!",
    houserules: {
      nosmoking: true,
      notsuiteableforpets: true,
      nopartiesorevents: true,
    },
    safety_features: {
      smokedetector: true,
      carbonmonoxidedetector: true,
      firstaidkit: false,
      safetycard: true,
      fireextinguisher: false,
      lockonbedroomdoor: false,
    },
    review_accuracy_stars: 5,
    review_communication_stars: 4.5,
    review_cleanliness_stars: 5,
    review_location_stars: 3.5,
    review_checkin_stars: 1,
    review_value_stars: 3,
    host: {
      host_fname: 'Sarah',
      host_city: 'Sacramento, California, United States',
      host_join_date: 'May 2014',
      img_url: 'example.com/sarah.img'
    },
    reviews: {
      1: {
        author: 'Amanda',
        img_url: 'example.com/amanda.img'
        city: 'San Francisco, CA',
        date: 'March 2017',
        body: "What a great cabin this is! Close to ski resorts, fully equipped kitchen, lovely decor, super clean... We would love to stay again!"
      },
    },
    photos: {
      1: {
        url: 'example.com/deck',
        description: 'The deck by night with a sparkle light canopy!'
      },
      2: {
        url: 'example.com/mudroom',
        description: 'Mudroom with plenty of room for storing hiking gear, skis'
      },
    },
  }

}
```

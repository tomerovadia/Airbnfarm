import React from 'react';

export default (props) => {

  return (
    <div>
      <form id='spot_form'>
        <label name='spot_title'>Title:</label>
        <input id='spot_title' />

        <label name='spot_base_price'>Base Price:</label>
        <input id='spot_base_price' />

        <label name='spot_summary'>Base Price:</label>
        <textarea id='spot_summary' />

        <label name='spot_main_photo_url'>Base Price:</label>
        <input id='spot_main_photo_url' />

        <label name='spot_description'>Base Price:</label>
        <textarea id='spot_description' />

        <label name='spot_privacy_level'>Base Price:</label>
        <select id='spot_privacy_level' />

        <label name='spot_num_guests'>Base Price:</label>
        <select id='spot_num_guests' />

        <label name='spot_num_bedrooms'>Base Price:</label>
        <select id='spot_num_bedrooms' />

        <label name='spot_num_beds'>Base Price:</label>
        <select id='spot_num_beds' />

        <label name='spot_num_bathrooms'>Base Price:</label>
        <select id='spot_num_bathrooms' />

        <label name='spot_street_address'>Base Price:</label>
        <input id='spot_street_address' />

        <label name='spot_state'>Base Price:</label>
        <select id='spot_state' />

        <label name='spot_zipcode'>Base Price:</label>
        <input id='spot_zipcode' />

      </form>
    </div>
  )
}

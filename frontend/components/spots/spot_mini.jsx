import React from 'react';
import {Link} from 'react-router';

export default (props) => {

  return (

    <div className='spot-mini-main-container'>

      <a href={`/#/spots/profile/${props.spot.id}`} target='_blank' className='spot-mini-link'>
        <img className='spot-img' src={props.spot.main_photo_url}>
        </img>

        <div className='spot-mini-price-and-title'>
          <span>${props.spot.base_price} &middot; {props.spot.title}</span>
        </div>

        <div className='spot-mini-privacylevel-and-numbeds'>
          <span>{props.spot.privacy_level} &middot; {props.spot.num_beds} beds </span>
        </div>

      </a>

    </div>

  );

}

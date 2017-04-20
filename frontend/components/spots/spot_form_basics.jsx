import React from 'react';

export default (props) => {

  return (
    <div id='spot-form-basics-main-container'>
      <h1>Hi, {currentUser.email}! Let's get you ready to become a host.</h1>

      <form id='spot-form-basics-form'>

        <h4>STEP 1</h4>
        <h2>What kind of place do you have?</h2>

        <select id='spot_privacy_level' />

        <select id='spot_num_guests' />

        <select id='spot_state' />

        <button form='spot-form' className='spot_form_basics-button'>Continue</button>
      </form>

      <div className='spot-form-info-box'>

      </div>
    </div>
  )
}

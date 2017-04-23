import React from 'react';

export default (props) => {

  const privacyLevelOptions = [];
  for(let id in spotConstants.privacyLevels){
    privacyLevelOptions.push(<option key={id} value={id}>{spotConstants.privacyLevels[id]}</option>);
  }


  const numGuestsOptions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(
    (numGuests, idx) => {
      return (
        <option key={idx} value={parseInt(numGuests)}>
          {numGuests === 1 ? `for ${numGuests} guest` : `for ${numGuests} guests`}
        </option>
      );
    }
  );


  // const getAddressPredictions = () => {
  //   const displayPredictions = (predictions, status) => {
  //     console.log(predictions.map((prediction) => prediction.description));
  //   };
  //
  //   const googleAutocompleteService = new google.maps.places.AutocompleteService();
  //   googleAutocompleteService.getQueryPredictions({ input: '279 Ocea' }, displayPredictions);
  // }

  // function getAddressPredictions(string, callback){
  //   const googleAutocompleteService = new google.maps.places.AutocompleteService();
  //   googleAutocompleteService.getQueryPredictions( { 'input': string}, function(predictions, status) {
  //      return callback(predictions.map((prediction) => prediction.description));
  //   });
  // }

  // let locationPredictionDivs = '';
  // if(props.locationInput){
  //   const locationPredictionDivs =
  //     predictions.map((locationPrediction) => <div className='location-prediction-div'>{locationPrediction}</div>)
  // }

  const currentUser = props.currentUser ? props.currentUser.email : '';

  return (
    <div id='spot-form-basics-main-container'>
      <h1>Hi, {currentUser}! Let's get you ready to become a host.</h1>

      <form id='spot-form-basics-form'>

        <h4>STEP 1</h4>
        <h2>What kind of place do you have?</h2>

        <div className='spot-form-fields'>
          <select
            id='spot-privacy-level'
            className='half-width-field'
            onChange={props.changeField('privacy_level_id')}
            value={props.formValues.privacy_level_id}
          >
            {privacyLevelOptions}
          </select>

          <select
            id='spot-num-guests'
            className='half-width-field'
            onChange={props.changeField('num_guests')}
            value={props.formValues.num_guests}
          >
            {numGuestsOptions}
          </select>

          <input
            type='text'
            id='spot-city'
            className='full-width-field'
            placeholder='e.g. San Francisco'
            onChange={props.changeField('city')}
            value={props.formValues.city}
          />

          <div className='location-predictions'>
          </div>

        </div>

        <button
          className='continue-button'
          onClick={props.switchForm('details')}>
          Continue
        </button>
      </form>

      <div className='spot-form-tip-box'>

      </div>
    </div>
  );
};

// {locationPredictionDivs}

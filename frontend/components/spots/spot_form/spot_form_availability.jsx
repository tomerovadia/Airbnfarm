import React from 'react';

export default (props) => {

  const stateOptions = [];
  for(let id in spotConstants.states){
    stateOptions.push(<option key={id} value={id}>{spotConstants.states[id]}</option>);
  }

  return (


    <div id='spot-form-details-main-container spot-form-main-container'>
      <h1>Tell us about the availability of your place.</h1>

    </div>
  );
};

import React from 'react';

export default (props) => {

  const stateOptions = [];
  for(let id in spotConstants.states){
    stateOptions.push(<option key={id} value={id}>{spotConstants.states[id]}</option>);
  }

  return (


    <div id='spot-form-details-main-container spot-form-main-container'>
      <h1>Tell us more about your place.</h1>

      <form id='spot-form-details-form'>

        <input
          onChange={props.changeField('title')}
          value={props.formValues.title}
          placeholder='Title'
        />


        <input
          onChange={props.changeField('base_price')}
          value={props.formValues.basePrice}
          placeholder='Price'
        />


        <input
          onChange={props.changeField('main_photo_url')}
          value={props.formValues.mainPhotoUrl}
          placeholder='Photo URL'
        />



        <div>
          <div>{`${props.formValues.num_bedrooms} bedrooms`}</div>
          <button onClick={props.addToValue('num_bedrooms', -1)}>-</button>
          <button onClick={props.addToValue('num_bedrooms', 1)}>+</button>
        </div>

        <div>
          <div>{`${props.formValues.num_beds} beds`}</div>
          <button onClick={props.addToValue('num_beds', -1)}>-</button>
          <button onClick={props.addToValue('num_beds', 1)}>+</button>
        </div>

        <div>
          <div>{`${props.formValues.num_bathrooms} bathroom`}</div>
          <button onClick={props.addToValue('num_bathrooms', -0.5)}>-</button>
          <button onClick={props.addToValue('num_bathrooms', 0.5)}>+</button>
        </div>


        <input
          onChange={props.changeField('summary')}
          value={props.formValues.summary}
          placeholder='Summary'
        />


        <input
          onChange={props.changeField('description')}
          value={props.formValues.description}
          placeholder='Description'
        />

        <input
          onChange={props.changeField('street_address')}
          value={props.formValues.street_address}
          placeholder='Street Address'
        />


        <select
            onChange={props.changeField('state_id')}
            value={props.formValues.state_id}
            placeholder='State'
          >
          {stateOptions}
        </select>

        <input
          onChange={props.changeField('zipcode')}
          value={props.formValues.zipcode}
          placeholder='Zip Code'
        />




        <button className='spot-form-back-button' onClick={props.switchForm('basics')}>
          Back
        </button>

        <button className='spot-form-finish-button' onClick={props.handleSubmit}>
          Finish
        </button >


      </form>


    </div>
  );
};

import React from 'react';

export default (props) => {

  const stateOptions = [];
  for(let id in spotConstants.states){
    stateOptions.push(<option key={id} value={id}>{spotConstants.states[id]}</option>);
  }

  return (


    <div id='spot-form-details-main-container spot-form-main-container'>
      <h2>Tell us more about your place.</h2>

      <form id='spot-form-details-form'>

        <input
          className='full-width-field'
          onChange={props.changeField('title')}
          value={props.formValues.title}
          placeholder='Title'
        />


        <input
          className='full-width-field'
          onChange={props.changeField('base_price')}
          value={props.formValues.base_price}
          placeholder='Price ($)'
        />

        <input
          className='full-width-field'
          onChange={props.changeField('main_photo_url')}
          value={props.formValues.main_photo_url}
          placeholder='Photo URL'
        />

        <div className='number-toggle-div'>
          <div className='num-display'>{`${props.formValues.num_bedrooms} bedrooms`}</div>
          <button className='increment-button' onClick={props.addToValue('num_bedrooms', -1)}>-</button>
          <button className='increment-button' onClick={props.addToValue('num_bedrooms', 1)}>+</button>
        </div>

        <div className='number-toggle-div'>
          <div className='num-display'>{`${props.formValues.num_beds} beds`}</div>
          <button className='increment-button' onClick={props.addToValue('num_beds', -1)}>-</button>
          <button className='increment-button' onClick={props.addToValue('num_beds', 1)}>+</button>
        </div>

        <div className='number-toggle-div'>
          <div className='num-display'>{`${props.formValues.num_bathrooms} bathroom`}</div>
          <button className='increment-button' onClick={props.addToValue('num_bathrooms', -0.5)}>-</button>
          <button className='increment-button' onClick={props.addToValue('num_bathrooms', 0.5)}>+</button>
        </div>


        <textarea
          onChange={props.changeField('summary')}
          value={props.formValues.summary}
          placeholder='Summary'
        />


        <textarea
          onChange={props.changeField('description')}
          value={props.formValues.description}
          placeholder='Description'
        />

        <input
          className='full-width-field'
          onChange={props.changeField('street_address')}
          value={props.formValues.street_address}
          placeholder='Street Address'
        />


        <select
          className='half-width-field'
            onChange={props.changeField('state_id')}
            value={props.formValues.state_id}
            placeholder='State'
          >
          {stateOptions}
        </select>

        <input
          className='half-width-field'
          onChange={props.changeField('zipcode')}
          value={props.formValues.zipcode}
          placeholder='Zip Code'
        />

        <div className='nav-buttons-div clearfix'>
          <button className='spot-form-back-button' onClick={props.switchForm('basics')}>Back</button>

          <button className='spot-form-next-button' onClick={props.switchForm('availability')}>Next</button >
        </div>

      </form>


    </div>
  );
};

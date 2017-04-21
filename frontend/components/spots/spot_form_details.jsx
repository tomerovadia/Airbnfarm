import React from 'react';

export default (props) => {

  return (
    <div id='spot-form-basics-main-container'>
      <h1>Tell us more about your place.</h1>

      <form id='spot-form-details-form'>

        <input
          onChange={props.changeField('title')}
          value={props.formValues.title}
          placeholder='Title'
        />

        <br />

        <input
          onChange={props.changeField('basePrice')}
          value={props.formValues.basePrice}
          placeholder='Price'
        />

        <br />

        <input
          onChange={props.changeField('mainPhotoUrl')}
          value={props.formValues.mainPhotoUrl}
          placeholder='Photo URL'
        />

        <br />

        <br />

        <div>
          <div>{`${props.formValues.numBedrooms} bedrooms`}</div>
          <button onClick={props.addToValue('numBedrooms', -1)}>-</button>
          <button onClick={props.addToValue('numBedrooms', 1)}>+</button>
        </div>

        <div>
          <div>{`${props.formValues.numBeds} beds`}</div>
          <button onClick={props.addToValue('numBeds', -1)}>-</button>
          <button onClick={props.addToValue('numBeds', 1)}>+</button>
        </div>

        <div>
          <div>{`${props.formValues.numBathrooms} bathroom`}</div>
          <button onClick={props.addToValue('numBathrooms', -0.5)}>-</button>
          <button onClick={props.addToValue('numBathrooms', 0.5)}>+</button>
        </div>

        <br />

        <input
          onChange={props.changeField('summary')}
          value={props.formValues.summary}
          placeholder='Summary'
        />

        <br />

        <input
          onChange={props.changeField('description')}
          value={props.formValues.description}
          placeholder='Description'
        />

        <br />

        <button className='spot-form-back-button' onClick={props.switchForm('basics')}>
          Back
        </button>

        <button className='spot-form-finish-button'>
          Finish
        </button >


      </form>


    </div>
  )
}

//
// title: null,
// basePrice: null,
// mainPhotoUrl: null,
// numBedrooms: null,
// numBeds: null,
// numBathrooms: null,
// summary: null,
// description: null,

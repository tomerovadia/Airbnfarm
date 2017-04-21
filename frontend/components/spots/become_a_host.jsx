import React from 'react';
import SpotFormBasics from './spot_form_basics';
import SpotFormDetails from './spot_form_details';
import merge from 'lodash/merge';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: 'basics',
      tips: {},
      spotProperties: {
        privacy_level_id: Object.keys(window.spotConstants.privacyLevels)[0],
        num_guests: 1,
        city: '',
        title: '',
        base_price: 0,
        main_photo_url: '',
        num_bedrooms: 0,
        num_beds: 0,
        num_bathrooms: 0,
        summary: '',
        description: '',
        street_address: '',
        state_id: Object.keys(window.spotConstants.states)[0],
        zipcode: '',
      },
    }

    this.limits = {
      num_bedrooms: 10,
      num_beds: 16,
      num_bathrooms: 8,
    };

    this.changeField = this.changeField.bind(this);
    this.addToValue = this.addToValue.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.setTips = this.setTips.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeField(field){
    return (e) => {
      const newSpotDetails = this.state.spotProperties;
      if(field === 'privacy_level_id' || field === 'state_id' || field === 'num_guests'){
        newSpotDetails[field] = parseInt(e.target.value);
      } else {
        newSpotDetails[field] = e.target.value;
      }

      this.setState({spotProperties: newSpotDetails})
    };
  }

  addToValue(field, addend){
    return (e) => {
      const result = this.state.spotProperties[field] + addend;
      if(result <= this.limits[field] && result >= 0){
        const newSpotDetails = this.state.spotProperties;
        newSpotDetails[field] = result;
        this.setState({spotProperties: newSpotDetails})
      }
    }
  }

  switchForm(newForm){
    return (e) => {
      this.setState({form: newForm});
    }
  }

  setTips(tips){
    this.setState({tips});
  }

  handleSubmit(e){
    this.props.createSpot(this.state.spotProperties);
    this.props.receiveErrors({});
  }





  render() {
    let errorsLis = [];
    for(let field in this.props.errors){
      this.props.errors[field].forEach( (errorMessage, idx) => {
        errorsLis.push(
          <li key={`${idx}${field}${errorMessage}`}>{field} {errorMessage}</li>
        )
      })
    }


    let form;
    switch(this.state.form){
      case 'details':
        form =
          <SpotFormDetails
            changeField={this.changeField}
            addToValue={this.addToValue}
            formValues={this.state.spotProperties}
            switchForm={this.switchForm}
            handleSubmit={this.handleSubmit}
          />
        break
      default:
        form =
          <SpotFormBasics
            changeField={this.changeField}
            locationInput={this.state.location}
            currentUser={this.props.currentUser}
            formValues={this.state.spotProperties}
            switchForm={this.switchForm}
          />
    }

    let rightPanelContents = <img src={window.images.flowers} />;
    if(Object.keys(this.state.tips).length > 0){
      let tipElements = [];
      for(let key in this.state.tips){
        tipElements.push(
          <div key={key} className='spot-form-tip'>
            <h4 className='spot-form-header'>{key}</h4>
            <p className='spot-form-content'>{this.state.tips[key]}</p>
          </div>
        )
      }

      rightPanelContents =
        <div className='spot-form-tip-box' className='spot-form-tip-container'>
          <i>LIGHTBULB</i>
          {tipElements}
        </div>
    }

    return (
      <div
        className='become-a-host-main-container'
      >
        <div
          className='become-a-host-errors'
          style={{display: Object.keys(this.props.errors).length === 0 ? 'none' : 'block' }}
        >
          <ul>
            {errorsLis}
          </ul>
        </div>

        <div className='become-a-host-panels'>

          <div className='become-a-host-left-panel'>
            <div className='become-a-host-left-panel-contents'>

              {form}

            </div>
          </div>

          <div className='become-a-host-right-panel'>
            <div className='become-a-host-right-panel-contents'>

              {rightPanelContents}

            </div>
          </div>
        </div>

      </div>

    )
  }
}

export default BecomeAHost;
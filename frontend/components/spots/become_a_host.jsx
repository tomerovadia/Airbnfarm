import React from 'react';
import SpotFormBasics from './spot_form_basics';
import SpotFormDetails from './spot_form_details';
import merge from 'lodash/merge';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: 'basics',
      tips: {'entire place': 'guests will rent the entire place', 'private room': 'guests share some spaces but'},
      spotDetails: {
        privacyLevel: '',
        numGuests: '',
        city: '',
        title: '',
        basePrice: '',
        mainPhotoUrl: '',
        numBedrooms: 0,
        numBeds: 0,
        numBathrooms: 0,
        summary: '',
        description: '',
        streetAddress: '',
        state: '',
        zipcode: '',
      },
    }

    this.limits = {
      numBedrooms: 10,
      numBeds: 16,
      numBathrooms: 8,
    };

    this.changeField = this.changeField.bind(this);
    this.addToValue = this.addToValue.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.setTips = this.setTips.bind(this);
  }

  changeField(field){
    return (e) => this.setState({spotDetails: {[field]: e.target.value}})
  }

  addToValue(field, addend){
    return (e) => {
      const result = this.state.spotDetails[field] + addend;
      if(result <= this.limits[field] && result >= 0){
        const newSpotDetails = this.state.spotDetails;
        newSpotDetails[field] = result;
        this.setState({spotDetails: newSpotDetails})
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

  render() {

    let form;
    switch(this.state.form){
      case 'details':
        form =
          <SpotFormDetails
            changeField={this.changeField}
            addToValue={this.addToValue}
            formValues={this.state.spotDetails}
            switchForm={this.switchForm}
          />
        break
      default:
        form =
          <SpotFormBasics
            changeField={this.changeField}
            locationInput={this.state.location}
            currentUser={this.props.currentUser}
            formValues={this.state.spotDetails}
            switchForm={this.switchForm}
          />
    }

    let rightPanelContents = <img src={window.images.flowers} />;
    if(this.state.tips){
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
      <div className='become-a-host-main-container'>
        <div className='left-panel'>
          <div className='left-panel-contents'>

            {form}

          </div>
        </div>

        <div className='right-panel'>
          <div className='right-panel-contents'>

            {rightPanelContents}

          </div>
        </div>

      </div>

    )
  }
}

// <SpotFormDetails
//   changeField={this.changeField}
//   addToValue={this.addToValue}
//   formValues={this.state}
// />
//
// <SpotFormBasics
//   changeField={this.changeField}
//   locationInput={this.state.location}
//   currentUser={this.props.currentUser}
//   formValues={this.state}
// />

export default BecomeAHost;

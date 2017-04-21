import React from 'react';
import SpotFormBasics from './spot_form_basics';
import SpotFormDetails from './spot_form_details';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: 'basics',
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

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.addToValue = this.addToValue.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  handleFieldChange(field){
      return (e) => this.setState({[field]: e.target.value})
  }

  addToValue(field, addend){
    return (e) => {
      const result = this.state[field] + addend;
      if(result <= this.limits[field] && result >= 0){
        this.setState({[field]: result})
      }
    }
  }

  switchForm(newForm){
    return (e) => {
      this.setState({form: newForm});
    }
  }

  render() {

    let form;
    switch(this.state.form){
      case 'details':
        form =
          <SpotFormDetails
            handleFieldChange={this.handleFieldChange}
            addToValue={this.addToValue}
            formValues={this.state}
            switchForm={this.switchForm}
          />
        break
      default:
        form =
          <SpotFormBasics
            handleFieldChange={this.handleFieldChange}
            locationInput={this.state.location}
            currentUser={this.props.currentUser}
            formValues={this.state}
            switchForm={this.switchForm}
          />
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

            <img src={window.images.flowers} />

          </div>
        </div>

      </div>

    )
  }
}

// <SpotFormDetails
//   handleFieldChange={this.handleFieldChange}
//   addToValue={this.addToValue}
//   formValues={this.state}
// />
//
// <SpotFormBasics
//   handleFieldChange={this.handleFieldChange}
//   locationInput={this.state.location}
//   currentUser={this.props.currentUser}
//   formValues={this.state}
// />

export default BecomeAHost;

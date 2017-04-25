import React from 'react';
import SpotFormBasics from './spot_form_basics';
import SpotFormDetails from './spot_form_details';
import SpotFormAvailability from './spot_form_availability';
import merge from 'lodash/merge';
import {hashHistory} from 'react-router';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      form: 'basics',
      tips: {},
      startAvailabilityDate: null,
      endAvailabilityDate: null,
      spotProperties: {
        privacy_level_id: Object.keys(window.spotConstants.privacyLevels)[0],
        num_guests: 1,
        city: '',
        title: '',
        base_price: '',
        // main_photo_url: '',
        num_bedrooms: 0,
        num_beds: 0,
        num_bathrooms: 0,
        summary: '',
        description: '',
        street_address: '',
        state_id: Object.keys(window.spotConstants.states)[0],
        zipcode: '',
        main_photo_file: null,
        main_photo_url: '',
      },
    };

    this.limits = {
      num_bedrooms: 10,
      num_beds: 16,
      num_bathrooms: 8,
    };

    this.tips = {
      privacy_level: {
        'Entire place': 'Guests will rent the entire place. Includes in-law units.',
        'Private room': 'Guests share some spaces but they’ll have their own private room for sleeping.',
        'Shared room': 'Guests don’t have a room to themselves.'
      },
      num_beds: {
        'Beds': 'The number and type of beds you have determines how many guests can stay comfortably. Bed details help guests understand what the sleeping arrangements are like.'
      },
      num_bedrooms: {
        'Bedrooms': 'Bedrooms are rooms guests will have as their own private space for sleeping.'
      },
      num_bathrooms: {
        'Bathrooms': 'If you have a toilet separate from the shower, count it as 0.5 bathroom. Count only the bathrooms guests can use.'
      }
    }

    this.changeField = this.changeField.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addToValue = this.addToValue.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.setTips = this.setTips.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.receiveAvailabilityDates = this.receiveAvailabilityDates.bind(this);
    this.createAvailabilities = this.createAvailabilities.bind(this);
  }

  changeField(field){
    return (e) => {
      const newSpotProperties = this.state.spotProperties;

      let newValue = e.target.value;
      newSpotProperties[field] = newValue;
      if(field === 'privacy_level_id' || field === 'state_id' || field === 'num_guests' || field === 'base_price' || field === 'zipcode'){
        if(/^\d*$/.test(newValue)){
          newValue = parseInt(e.target.value);
          this.setState({spotProperties: newSpotProperties});
        }
      } else {
        this.setState({spotProperties: newSpotProperties});
      }
    };
  }

  updateFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const newSpotProperties = this.state.spotProperties;
      newSpotProperties.main_photo_file = file;
      newSpotProperties.main_photo_url = fileReader.result;
      this.setState({spotProperties: newSpotProperties});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }

    debugger

  }

  addToValue(field, addend){
    return (e) => {
      e.preventDefault();

      this.setTips(field)();
      const result = this.state.spotProperties[field] + addend;

      if(result <= this.limits[field] && result >= 0){
        const newSpotProperties = this.state.spotProperties;
        newSpotProperties[field] = result;
        this.setState({spotProperties: newSpotProperties});
      }
    };
  }

  receiveAvailabilityDates(startAvailabilityDate, endAvailabilityDate){
    this.setState({startAvailabilityDate});
    this.setState({endAvailabilityDate});
  }

  switchForm(newForm){
    return (e) => {
      this.setState({form: newForm});
    };
  }

  setTips(field){
    return () => {
      const tips = this.tips[field]
      this.setState({tips});
    }
  }

  createAvailabilities(startDate, endDate, spot_id){
    let date = startDate;

    while(date <= endDate){
      this.props.createAvailability({available_date: date, spot_id: spot_id});
      date = new Date(date.valueOf());
      date.setDate(date.getDate() + 1);
    }
  }

  handleSubmit(e){
    const startAvailabilityDate = this.state.startAvailabilityDate;
    const endAvailabilityDate = this.state.endAvailabilityDate;
    const createAvailabilities = this.createAvailabilities;

    if(startAvailabilityDate && endAvailabilityDate){

      const spotProperties = this.state.spotProperties;

      const formData = new FormData();
      formData.append('spot[title]', spotProperties.title);
      formData.append('spot[base_price]', spotProperties.base_price);
      formData.append('spot[summary]', spotProperties.summary);
      formData.append('spot[main_photo_url]', spotProperties.main_photo_url);
      formData.append('spot[main_photo]', spotProperties.main_photo_file);
      formData.append('spot[privacy_level_id]', spotProperties.privacy_level_id);
      formData.append('spot[num_guests]', spotProperties.num_guests);
      formData.append('spot[num_bedrooms]', spotProperties.num_bedrooms);
      formData.append('spot[num_beds]', spotProperties.num_beds);
      formData.append('spot[num_bathrooms]', spotProperties.num_bathrooms);
      formData.append('spot[street_address]', spotProperties.street_address);
      formData.append('spot[city]', spotProperties.city);
      formData.append('spot[state_id]', spotProperties.state_id);
      formData.append('spot[zipcode]', spotProperties.zipcode);
      formData.append('spot[description]', spotProperties.description);

      this.props.createSpot(formData)



        .then( (action) => {
          createAvailabilities(startAvailabilityDate, endAvailabilityDate, action.spot.id);
          return action.spot.id;
        })
        .then(function(spotId) {
          this.props.router.push(`/spots/profile/${spotId}`);
        }.bind(this));
    } else {
      this.props.receiveErrors({availability: ['cannot be blank']});
    }
  }





  render() {

    let errorsLis = [];
    for(let field in this.props.errors){
      if(this.props.errors[field].constructor === Array){
        this.props.errors[field].forEach( (errorMessage, idx) => {
          errorsLis.push(
            <li key={`${idx}${field}${errorMessage}`}>{field} {errorMessage}</li>
          );
        });
      }
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
            updateFile={this.updateFile}
          />;
        break;
      case 'availability':
        form =
          <SpotFormAvailability
            formValues={this.state.spotProperties}
            switchForm={this.switchForm}
            handleSubmit={this.handleSubmit}
            setTips={this.setTips}
            receiveAvailabilityDates={this.receiveAvailabilityDates}
            startAvailabilityDate={this.state.startAvailabilityDate}
            endAvailabilityDate={this.state.endAvailabilityDate}
          />;
        break;
      default:
        form =
          <SpotFormBasics
            changeField={this.changeField}
            locationInput={this.state.location}
            currentUser={this.props.currentUser}
            formValues={this.state.spotProperties}
            switchForm={this.switchForm}
            setTips={this.setTips}
          />;
    }

    let rightPanelContents = <div className='flowers-image-container'><img src={window.images.flowers} /></div>;
    if(Object.keys(this.state.tips).length > 0){
      let tipElements = [];
      for(let key in this.state.tips){
        tipElements.push(
          <div key={key} className='spot-form-tip'>
            <h4 className='spot-form-header'>{key}</h4>
            <p className='spot-form-content'>{this.state.tips[key]}</p>
          </div>
        );
      }

      rightPanelContents =
        <div className='spot-form-tip-box spot-form-tip-container'>
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
          {tipElements}
        </div>
    }

    return (
      <div className='become-a-host-main-container'>

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

    );
  }
}

export default BecomeAHost;

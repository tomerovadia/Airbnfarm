import React from 'react';
import SpotFormBasics from './spot_form_basics';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      privacyLevel: null,
      numGuests: null,
      location: null,
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(field){
    return (e) => this.setState({[field]: e.target.value})
  }

  render() {

    return (
      <div className='become-a-host-main-container'>
        <div className='left-panel'>
          <div className='right-panel-contents'>
            <SpotFormBasics handleFieldChange={this.handleFieldChange} locationInput={this.state.location}/>
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

export default BecomeAHost;

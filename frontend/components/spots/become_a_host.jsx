import React from 'react';
import SpotForm from './spot_form';

class BecomeAHost extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className='become-a-host-main-container'>
        <div className='left-panel'>
          <SpotForm />
        </div>

        <div className='right-panel'>

        </div>


      </div>

    )
  }
}

export default BecomeAHost;

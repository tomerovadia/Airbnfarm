import React from 'react';
import Trip from './trip';


class Trips extends React.Component {

  constructor(props){
    super(props)
  }



  render(){

    return(
      <div className='trips-main-container'>

        <Trip />
        <Trip />

      </div>

    );

  }

}

export default Trips;

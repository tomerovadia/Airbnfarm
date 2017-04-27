import React from 'react';
import Trip from './trip';
import NavContainer from '../main/nav_container';
import { connect } from 'react-redux';

class TripsPage extends React.Component {

  constructor(props){
    super(props)


  }



  render(){

    return(

      <div className='trips-page-main-container'>

        <NavContainer searchBarVisible={false} />

        <h1 className='trips-page-h1'>Past Trips</h1>

        <section className='trips-section'>

          <Trip />
          <Trip />
          <Trip />
          <Trip />
          <Trip />
          <Trip />
          <Trip />

        </section>

      </div>

    );

  }

}

export default connect(
  (state) => {

  },
  (dispatch) => {
    
  }
)(TripsPage);

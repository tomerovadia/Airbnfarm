import React from 'react';
import SpotMini from './../spots/spot_mini';
import { fetchUserListings } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class ListingsPage extends React.Component {

  constructor(props){
    super(props)

    this.props.fetchUserListings(this.props.currentUser.id);
  }

  render(){

    let listings = this.props.listings.map((listing) => {
      return (<SpotMini
        key={listing.id}
        spot={listing}
        />
      )
    });

    if(this.props.listings.length === 0){
      listings = <h3> You have no listings yet!</h3>
    }


    return(

      <div className='listings-page-main-container'>

        <div className='listings-page-listings'>
          {listings}
        </div>

      </div>

    );

  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    listings: state.listings.listings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserListings: (userId) => dispatch(fetchUserListings(userId)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingsPage));

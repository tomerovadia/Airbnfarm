import { connect } from 'react-redux';
import SpotProfileSidebar from './spot_profile_sidebar';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {

  return {

  };

};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotProfileSidebar));

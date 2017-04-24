import { connect } from 'react-redux';
import SpotSearch from './spot_search';
import { getSearchResults } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    searchResults: getSearchResults(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotSearch);

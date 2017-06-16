// import { connect } from 'react-redux';
// import SpotSearch from './spot_search';
// import { getSearchResults } from '../../reducers/selectors';
// import { withRouter } from 'react-router';
// import { fetchSearchResults } from '../../actions/spot_actions';
//
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     searchResults: getSearchResults(state),
//     spotErrors: state.spots.errors,
//   };
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//
//   return {
//     fetchSearchResults: (criteria) => dispatch(fetchSearchResults(criteria)),
//   };
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(SpotSearch));

export const getSearchResults = ({spots: {searchResults}}) => {
  return Object.keys(searchResults).map((id) => searchResults[id]);
};

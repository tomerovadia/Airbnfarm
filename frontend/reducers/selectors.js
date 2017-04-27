export const getSearchResults = ({spots: {searchResults}}) => {
  if(!searchResults || Object.keys(searchResults).length === 0){
    return {};
  } else {
    return Object.keys(searchResults).map((id) => searchResults[id]);
  }
};

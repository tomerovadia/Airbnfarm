export const RECEIVE_SEARCH_CRITERIA = 'RECEIVE_SEARCH_CRITERIA';

export const receiveSearchCriteria = (criteria) => {
  return {
    type: RECEIVE_SEARCH_CRITERIA,
    criteria,
  };
};

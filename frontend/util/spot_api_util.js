export const createSpot = (formData) => {

  return $.ajax({
    method: 'post',
    url: 'api/spots',
    contentType: false,
    processData: false,
    data: formData,
  });

};

export const fetchSpot = (id) => {
  const url = `api/spots/${id}`;

  return $.ajax({
    method: 'get',
    url,
  });

};

export const fetchSearchResults = (criteria) => {

  return $.ajax({
    method: 'get',
    url: 'api/spots',
    responseText: 'json',
    data: criteria,
  });

};

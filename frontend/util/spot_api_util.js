export const createSpot = (spot) => {

  return $.ajax({
    method: 'post',
    url: 'api/spots',
    data: {spot},
  });

};

export const fetchSpot = (id) => {
  const url = `api/spots/${id}`;

  return $.ajax({
    method: 'get',
    url,
  });

};

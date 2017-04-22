export const createAvailability = (availability) => {

  return $.ajax({
    method: 'post',
    url: 'api/availabilities',
    data: {availability},
  });

};

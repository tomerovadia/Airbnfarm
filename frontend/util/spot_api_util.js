export const createSpot = (spot) => {

  return $.ajax({
    method: post,
    url: 'api/spots',
    data: {spot},
  })

}

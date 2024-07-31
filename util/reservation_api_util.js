export const fetchReservations = () => {
  return fetch(`http://127.0.0.1:3000/api/reservations`, {
    error: err => console.log(err)
  })
  // return $.ajax({
  //   method: 'GET',
  //   url: '/api/reservations',
  //   error: (err) => console.log(err)
  // });
};

export const createReservation = reservation => {
  return $.ajax({
    method: 'POST',
    url: '/api/reservations',
    data: { reservation },
    error: (err) => console.log(err)
  });
};

export const updateReservation = reservation => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/reservations/${reservation.id}`,
    data: { reservation },
    error: (err) => console.log(err)
  });
};

export const cancelReservation = reservationId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reservations/${reservationId}`,
    error: (err) => console.log(err)
  });
};
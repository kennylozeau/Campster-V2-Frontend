export const fetchCampsites = data => {
  return fetch("http://127.0.0.1:3000/api/campsites", {data})
  // return $.ajax({
  //   method: 'GET',
  //   url: '/api/campsites',
  //   data: { bounds: data },
  //   error: (err) => console.log(err)
  // });
};

export const fetchCampsite = (campsiteId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/campsites/${campsiteId}`,
    error: (err) => console.log(err)
  });
};
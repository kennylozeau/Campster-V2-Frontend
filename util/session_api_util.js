export const fetchUser = userId => {
  return fetch(`http://127.0.0.1:3000/api/users/${userId}`, {
    error: err => console.log(err)
  })
  // return $.ajax({
  //   method: 'GET',
  //   url: `/api/users/${userId}`
  // });
};

export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  });
};

export const login = user => {
  return fetch(`http://127.0.0.1:3000/api/session/`, {
    method: 'POST',
    data: {user},
    error: err => console.log(err)
  })
  // return $.ajax({
  //   method: 'POST',
  //   url: '/api/session',
  //   data: { user }
  // });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session'
  });
};
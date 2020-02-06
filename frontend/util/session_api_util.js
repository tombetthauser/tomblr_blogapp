export const signup = (user) => (
  $.ajax({
    url: `api/user/`,
    method: "POST",
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    url: `api/session/`,
    method: "POST",
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    url: `api/session/`,
    method: "DELETE"
  })
);

export const fetchUser = userId => (
  // alert(`fetchUser triggered for userId: ${userId}`)
  $.ajax({
    url: `/api/users/${userId}/`,
    method: 'GET',
    data: null
  })
);
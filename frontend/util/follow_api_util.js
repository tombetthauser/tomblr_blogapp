export const fetchFollows = () => (
  $.ajax({
    url: `api/follows/`,
    method: 'GET'
  })
);

export const fetchFollow = followId => (
  $.ajax({
    url: `/api/follows/${followId}/`,
    method: 'GET',
    data: null,
  })
);

export const createFollow = follow => (
  $.ajax({
    url: `api/follows/`,
    method: 'POST',
    data: { follow }
  })
);

export const updateFollow = follow => (
  $.ajax({
    url: `/api/follows/${follow.id}`,
    method: 'PATCH',
    data: { follow }
  })
);

export const deleteFollow = followId => (
  $.ajax({
    url: `/api/follows/${followId}/`,
    method: 'DELETE',
    data: null
  })
)

export const fetchUserFollows = userId => (
  $.ajax({
    url: `/api/users/${userId}/follows`,
    method: 'GET',
    data: null
  })
)
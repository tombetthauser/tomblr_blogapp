export const fetchBlogs = () => (
  $.ajax({
    url: `api/blogs/`,
    method: 'GET'
  })
);

export const fetchBlog = blogId => (
  $.ajax({
    url: `/api/blogs/${blogId}/`,
    method: 'GET',
    data: null
  })
);

export const createBlog = blog => (
  $.ajax({
    url: `api/blogs/`,
    method: 'POST',
    data: { blog }
  })
);

export const updateBlog = blog => (
  $.ajax({
    url: `/api/blogs/${blog.id}`,
    method: 'PATCH',
    data: { blog }
  })
);

export const deleteBlog = blogId => (
  $.ajax({
    url: `/api/blogs/${blogId}/`,
    method: 'DELETE',
    data: null
  })
)
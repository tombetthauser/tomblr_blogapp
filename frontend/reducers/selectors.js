export const selectBlog = (state, blogId) => {
  return state.entities.blogs[blogId];
};

// export const selectBlog = (state, blogId) => state.entities.blogs[blogId];
// export const selectAllConversations = (state, blogId) => Object.values(state.entities.blogs);
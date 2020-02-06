export const selectBlog = (state, blogId) => {
  return state.entities.blogs[blogId];
};

export const selectUser = (state, id) => {
  return state.entities.users[id];
}

// export const selectBlog = (state, blogId) => state.entities.blogs[blogId];
// export const selectAllConversations = (state, blogId) => Object.values(state.entities.blogs);
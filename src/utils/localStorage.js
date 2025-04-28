// Utility functions for local storage operations
export const getPosts = () => {
  const posts = localStorage.getItem('posts');
  return posts ? JSON.parse(posts) : [];
};

export const savePost = (post) => {
  const posts = getPosts();
  const newPost = {
    ...post,
    id: Date.now().toString(), // Generate a unique ID
    created_at: new Date().toISOString(),
    upvotes: 0
  };
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));
  return newPost;
};

export const updatePost = (postId, updates) => {
  const posts = getPosts();
  const index = posts.findIndex(post => post.id === postId);
  if (index !== -1) {
    posts[index] = { ...posts[index], ...updates };
    localStorage.setItem('posts', JSON.stringify(posts));
    return posts[index];
  }
  return null;
};

export const deletePost = (postId) => {
  const posts = getPosts();
  const filteredPosts = posts.filter(post => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(filteredPosts));
}; 
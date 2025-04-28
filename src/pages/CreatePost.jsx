// src/pages/CreatePost.jsx

import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !content) {
      alert('Title and Content are required.');
      return;
    }

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title: title,
          content: content,
          image_url: imageUrl || null,
          upvotes: 0, // Start with 0 upvotes
        },
      ]);

    if (error) {
      console.error('Error creating post:', error.message);
      alert('Failed to create post.');
    } else {
      alert('Post created successfully!');
      navigate('/'); // Go back to Home after posting
    }
  }

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;

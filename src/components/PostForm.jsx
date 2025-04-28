import { useState } from 'react';
import { savePost } from '../utils/localStorage';

function PostForm({ refreshPosts }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (!title || !content) {
      setError('Title and content are required');
      setLoading(false);
      return;
    }

    try {
      const newPost = savePost({
        title,
        content,
        image_url: imageUrl || null
      });

      console.log('Post created successfully:', newPost);
      setTitle('');
      setContent('');
      setImageUrl('');
      refreshPosts();
    } catch (err) {
      console.error('Unexpected error:', err);
      setError(`An unexpected error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="post-form">
      {error && <div className="error-message">{error}</div>}
      <input 
        type="text" 
        placeholder="Post Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        required
        disabled={loading}
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        required
        disabled={loading}
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={imageUrl} 
        onChange={(e) => setImageUrl(e.target.value)}
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}

export default PostForm;

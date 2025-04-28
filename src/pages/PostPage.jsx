import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Comment from '../components/Comment';
import { getPosts, updatePost } from '../utils/localStorage';
import Header from '../components/Header';

function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  function fetchPost() {
    const posts = getPosts();
    const foundPost = posts.find(p => p.id === id);
    setPost(foundPost);
  }

  function fetchComments() {
    const posts = getPosts();
    const foundPost = posts.find(p => p.id === id);
    setComments(foundPost?.comments || []);
  }

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  function handleUpvote() {
    if (post) {
      const updatedPost = updatePost(post.id, { upvotes: post.upvotes + 1 });
      setPost(updatedPost);
    }
  }

  function handleDelete() {
    const posts = getPosts();
    const filteredPosts = posts.filter(p => p.id !== id);
    localStorage.setItem('posts', JSON.stringify(filteredPosts));
    navigate('/');
  }

  function handleComment() {
    if (post) {
      const updatedComments = [...(post.comments || []), {
        id: Date.now().toString(),
        content: newComment,
        created_at: new Date().toISOString()
      }];
      const updatedPost = updatePost(post.id, { comments: updatedComments });
      setPost(updatedPost);
      setComments(updatedComments);
      setNewComment('');
    }
  }

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="post-page">
        <div className="post-actions">
          <button onClick={() => navigate('/')} className="back-button">
            ← Back to Home
          </button>
          <div className="post-controls">
            <button onClick={handleUpvote} className="upvote-button">
              Upvote ({post.upvotes})
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete Post
            </button>
          </div>
        </div>

        <div className="post-content">
          <h1>{post.title}</h1>
          <p className="post-date">
            Posted on {new Date(post.created_at).toLocaleDateString()}
          </p>
          <p className="post-text">{post.content}</p>
          {post.image_url && <img src={post.image_url} alt="Post" className="post-image" />}
        </div>

        <div className="comments-section">
          <h2>Comments</h2>
          {comments.length === 0 ? (
            <p className="no-comments">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          )}
          <div className="add-comment">
            <input 
              type="text" 
              placeholder="Leave a comment..." 
              value={newComment} 
              onChange={(e) => setNewComment(e.target.value)}
              className="comment-input"
            />
            <button onClick={handleComment} className="comment-button">
              Post Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;

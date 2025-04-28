import { Link } from 'react-router-dom';

function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>Posted: {new Date(post.created_at).toLocaleString()}</p>
      <p>Upvotes: {post.upvotes}</p>
      <Link to={`/post/${post.id}`}>View Post</Link>
    </div>
  );
}

export default PostCard;

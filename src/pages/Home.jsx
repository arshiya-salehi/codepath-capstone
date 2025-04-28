import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { getPosts } from '../utils/localStorage';
import Header from '../components/Header';

function Home() {
  const [posts, setPosts] = useState([]);
  const [orderBy, setOrderBy] = useState('created_at');
  const [search, setSearch] = useState('');

  function fetchPosts() {
    const allPosts = getPosts();
    setPosts(allPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, [orderBy]);

  const filteredPosts = posts
    .filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (orderBy === 'created_at') {
        return new Date(b.created_at) - new Date(a.created_at);
      }
      return b.upvotes - a.upvotes;
    });

  return (
    <div>
      <Header />
      <div className="container">
        <PostForm refreshPosts={fetchPosts} />
        
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search by title..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="created_at">Newest</option>
            <option value="upvotes">Top Voted</option>
          </select>
        </div>

        <div className="posts">
          {filteredPosts.length === 0 ? (
            <p className="no-posts">No posts found. Create your first post!</p>
          ) : (
            filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

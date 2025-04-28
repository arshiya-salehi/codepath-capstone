import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">My Blog</Link>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create" className="nav-link">Create Post</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header; 
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
} from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <header>
        <nav>
          <Link to="/">Home</Link> <Link to="/posts">Posts</Link>{" "}
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
      <footer>
        <p>&copy; 2026 CommunityHub</p>
      </footer>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About CommunityHub</h1>;
}

function NotFound() {
  return <h1>404: Page not found</h1>;
}

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <Link to="/posts">&larr; Back to Posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data
    navigate("/"); // Redirect to home
  };

  return (
    <nav>
      {/* NavLink adds an active class automatically */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

function RouterDemo() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:postId" element={<PostDetail />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterDemo;
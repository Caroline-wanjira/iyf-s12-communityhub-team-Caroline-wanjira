import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import LoadingSpinner from "../components/shared/LoadingSpinner.jsx";
import ErrorMessage from "../components/shared/ErrorMessage.jsx";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

function Posts() {
    const { data: posts, loading, error } = useFetch(URL);

    if (loading) {
        return <LoadingSpinner text="Loading posts..." />;
    }
    if (error) {
        return <ErrorMessage message={error} />;
    }
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

export default Posts;

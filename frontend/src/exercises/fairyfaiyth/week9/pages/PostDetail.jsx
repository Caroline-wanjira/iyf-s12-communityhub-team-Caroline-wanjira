import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

function PostDetail() {
    const { postId } = useParams();
    const { data: post, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <article>
            <Link to="/posts">&larr; Back to Posts</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </article>
    );
}

export default PostDetail;

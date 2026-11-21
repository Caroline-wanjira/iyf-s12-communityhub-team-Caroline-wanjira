import useFetch from "../../hooks/useFetch.js";

const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";

function FetchPosts() {
    const { data: posts, loading, error } = useFetch(URL);

    if (loading) {
        return <p>Loading posts...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default FetchPosts;

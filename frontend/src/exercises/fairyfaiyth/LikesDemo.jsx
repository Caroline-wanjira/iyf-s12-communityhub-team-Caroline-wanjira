import { useState } from "react";

const INITIAL_POSTS = [
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 },
];

function Stats({ totalPosts, totalLikes }) {
    return (
        <div className="stats">
            <span>{totalPosts} posts</span> <span>{totalLikes} total likes</span>
        </div>
    );
}

function LikeCard({ post, onLike }) {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <button onClick={onLike}>Like {post.likes}</button>
        </div>
    );
}

function LikesDemo() {
    const [posts, setPosts] = useState(INITIAL_POSTS);

    const handleLike = (id) => {
        setPosts(posts.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post)));
    };

    const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

    return (
        <div>
            <Stats totalPosts={posts.length} totalLikes={totalLikes} />
            {posts.map((post) => (
                <LikeCard key={post.id} post={post} onLike={() => handleLike(post.id)} />
            ))}
        </div>
    );
}

export default LikesDemo;

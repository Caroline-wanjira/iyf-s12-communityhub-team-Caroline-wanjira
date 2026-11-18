import { useState } from "react";
import { sortNewestFirst, searchPosts } from "../../utils/posts.js";

const INITIAL_POSTS = [
    { id: 1, title: "Welcome to CommunityHub", excerpt: "Say hello to the community.", author: "Caroline", date: "2026-11-10", likes: 3 },
    { id: 2, title: "Getting Started with React", excerpt: "Learn the basics of React.", author: "Faith", date: "2026-11-15", likes: 5 },
    { id: 3, title: "Tips for Clean Code", excerpt: "Names, small functions, tests.", author: "Brian", date: "2026-11-12", likes: 1 },
];

function PostList() {
    const [posts] = useState(INITIAL_POSTS);
    const [query, setQuery] = useState("");

    const visiblePosts = sortNewestFirst(searchPosts(posts, query));

    return (
        <section className="post-list">
            <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title or author"
            />
            {visiblePosts.length === 0 && <p>No posts found.</p>}
            {visiblePosts.map((post) => (
                <article key={post.id} className="post-card">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="post-meta">
                        <span>By {post.author}</span> <span>{post.date}</span> <span>Likes: {post.likes}</span>
                    </div>
                </article>
            ))}
        </section>
    );
}

export default PostList;

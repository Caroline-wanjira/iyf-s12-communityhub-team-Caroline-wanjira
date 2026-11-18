export function sortNewestFirst(posts) {
    return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function searchPosts(posts, query) {
    const term = query.trim().toLowerCase();
    if (term === "") {
        return [...posts];
    }
    return posts.filter(
        (post) =>
            post.title.toLowerCase().includes(term) || post.author.toLowerCase().includes(term)
    );
}

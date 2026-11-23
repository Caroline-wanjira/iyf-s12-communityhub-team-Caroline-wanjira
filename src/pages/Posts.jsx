import { useState } from 'react';
import { usePosts } from '../context/PostsContext';
import usePageTitle from '../hooks/usePageTitle';
import PostList from '../components/Post/PostList';
import { Input, LoadingSpinner, ErrorMessage } from '../components/shared';
import styles from './Pages.module.css';

function Posts() {
  usePageTitle('Posts');
  const { posts, loading, error, refetch } = usePosts();
  const [query, setQuery] = useState('');

  // Keep only the posts whose title or text contains what was typed.
  const search = query.trim().toLowerCase();
  const filtered = posts.filter(
    (post) => post.title.toLowerCase().includes(search) || post.body.toLowerCase().includes(search)
  );

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Posts</h1>
        <p className={styles.lead}>Everything the community has shared.</p>
      </div>

      <div className={styles.searchRow}>
        <Input
          label="Search posts"
          name="search"
          type="search"
          placeholder="Type a word from a title or post"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading && <LoadingSpinner text="Loading posts..." />}
      {error && <ErrorMessage message={`Could not load posts. ${error}`} onRetry={refetch} />}

      {!loading && !error && (
        <>
          {/* role="status" announces the new count to screen readers while typing */}
          <p className={styles.resultCount} role="status">
            Showing {filtered.length} of {posts.length} posts
          </p>
          <PostList posts={filtered} emptyText="No posts match your search." />
        </>
      )}
    </>
  );
}

export default Posts;

import { usePosts } from '../context/PostsContext';
import usePageTitle from '../hooks/usePageTitle';
import PostList from '../components/Post/PostList';
import { Button, LoadingSpinner, ErrorMessage } from '../components/shared';
import styles from './Pages.module.css';

function Home() {
  usePageTitle('Home');
  const { posts, loading, error, refetch } = usePosts();

  return (
    <>
      <section className={styles.hero}>
        <h1>Your community, in one place.</h1>
        <p>Share updates, ask questions and read what other members are posting.</p>
        <div className={styles.heroActions}>
          <Button to="/create-post" size="large" style={{ background: 'var(--accent)', color: 'var(--ink)' }}>Write a post</Button>
          <Button to="/posts" size="large" variant="outline" style={{ color: '#fff', borderColor: '#fff' }}>
            Browse posts
          </Button>
        </div>
      </section>

      <section aria-labelledby="recent-heading">
        <div className={styles.sectionHeader}>
          <h2 id="recent-heading">Recent posts</h2>
        </div>

        {loading && <LoadingSpinner text="Loading recent posts..." />}
        {error && <ErrorMessage message={`Could not load posts. ${error}`} onRetry={refetch} />}
        {!loading && !error && <PostList posts={posts.slice(0, 3)} />}
      </section>
    </>
  );
}

export default Home;

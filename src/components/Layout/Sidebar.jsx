import { Link } from 'react-router-dom';
import { usePosts } from '../../context/PostsContext';
import { Card } from '../shared';
import styles from './Layout.module.css';

function Sidebar() {
  const { posts, myPosts, likedCount } = usePosts();

  return (
    <aside className={styles.sidebar} aria-label="Community summary">
      <Card title="At a glance">
        <ul className={styles.stats}>
          <li><strong>{posts.length}</strong> posts in the community</li>
          <li><strong>{myPosts.length}</strong> written by you</li>
          <li><strong>{likedCount}</strong> posts you liked</li>
        </ul>
      </Card>
      <Card title="Quick links">
        <ul className={styles.quickLinks}>
          <li><Link to="/create-post">Write a post</Link></li>
          <li><Link to="/posts">Browse all posts</Link></li>
          <li><Link to="/challenges">Practice challenges</Link></li>
        </ul>
      </Card>
    </aside>
  );
}

export default Sidebar;

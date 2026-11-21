import { Link } from 'react-router-dom';
import { usePosts, getAuthorName } from '../../context/PostsContext';
import { Card, Avatar } from '../shared';
import styles from './Post.module.css';

function PostCard({ post }) {
  const { isLiked, toggleLike } = usePosts();
  const liked = isLiked(post.id);
  const author = getAuthorName(post);

  return (
    <Card as="article">
      <div className={styles.meta}>
        <Avatar name={author} size="small" />
        <span>{author}</span>
      </div>

      <h3 className={styles.title}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <p className={styles.excerpt}>{post.body.slice(0, 100)}...</p>

      {/* aria-pressed tells screen readers this is an on/off button */}
      <button
        type="button"
        className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
        onClick={() => toggleLike(post.id)}
        aria-pressed={liked}
      >
        <span aria-hidden="true">{liked ? '♥' : '♡'}</span> {liked ? 'Liked' : 'Like'}
        <span className="visually-hidden"> post: {post.title}</span>
      </button>
    </Card>
  );
}

export default PostCard;

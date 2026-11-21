import PostCard from './PostCard';
import styles from './Post.module.css';

function PostList({ posts, emptyText = 'No posts found.' }) {
  if (posts.length === 0) return <p>{emptyText}</p>;

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

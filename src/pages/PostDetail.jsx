import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import usePageTitle from '../hooks/usePageTitle';
import { API_URL, usePosts, getAuthorName } from '../context/PostsContext';
import { Card, Avatar, LoadingSpinner, ErrorMessage } from '../components/shared';
import styles from './Pages.module.css';

function PostDetail() {
  // useParams reads the :postId part of the URL (/posts/:postId)
  const { postId } = useParams();
  const { getLocalPost, isLiked, toggleLike } = usePosts();

  // Posts the user wrote are stored locally; the rest come from the API.
  const localPost = getLocalPost(postId);
  const isLocal = String(postId).startsWith('local-');

  // Passing null to useFetch skips the request.
  const postRequest = useFetch(isLocal ? null : `${API_URL}/posts/${postId}`);
  const commentsRequest = useFetch(isLocal ? null : `${API_URL}/posts/${postId}/comments`);

  const post = isLocal ? localPost : postRequest.data;
  usePageTitle(post ? post.title : 'Post');

  if (!isLocal && postRequest.loading) return <LoadingSpinner text="Loading post..." />;
  if (!isLocal && postRequest.error) {
    return (
      <>
        <Link to="/posts" className={styles.backLink}>&larr; Back to posts</Link>
        <ErrorMessage message={`Could not load this post. ${postRequest.error}`} onRetry={postRequest.refetch} />
      </>
    );
  }
  if (!post) {
    return (
      <>
        <Link to="/posts" className={styles.backLink}>&larr; Back to posts</Link>
        <p>That post could not be found.</p>
      </>
    );
  }

  const author = getAuthorName(post);
  const liked = isLiked(post.id);

  return (
    <article>
      <Link to="/posts" className={styles.backLink}>&larr; Back to posts</Link>

      <h1 className={styles.detailTitle}>{post.title}</h1>
      <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--muted)' }}>
        <Avatar name={author} size="small" /> {author}
      </p>
      <p className={styles.postBody}>{post.body}</p>

      <button
        type="button"
        onClick={() => toggleLike(post.id)}
        aria-pressed={liked}
        style={{ font: 'inherit', padding: '0.3rem 1rem', borderRadius: '999px', border: '2px solid #8a9b97', background: liked ? '#fdeceb' : '#fff', cursor: 'pointer' }}
      >
        <span aria-hidden="true">{liked ? '♥' : '♡'}</span> {liked ? 'Liked' : 'Like this post'}
      </button>

      {!isLocal && (
        <section aria-labelledby="comments-heading" style={{ marginTop: '2rem' }}>
          <h2 id="comments-heading">Comments</h2>
          {commentsRequest.loading && <LoadingSpinner size="small" text="Loading comments..." />}
          {commentsRequest.error && (
            <ErrorMessage message={`Could not load comments. ${commentsRequest.error}`} onRetry={commentsRequest.refetch} />
          )}
          {commentsRequest.data && (
            <ul className={styles.comments}>
              {commentsRequest.data.map((comment) => (
                <li key={comment.id}>
                  <Card>
                    <p className={styles.commentName}>{comment.name}</p>
                    <p className={styles.commentBody}>{comment.body}</p>
                  </Card>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </article>
  );
}

export default PostDetail;

import usePageTitle from '../hooks/usePageTitle';
import CreatePostForm from '../components/Post/CreatePostForm';
import styles from './Pages.module.css';

function CreatePost() {
  usePageTitle('New post');

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Write a post</h1>
        <p className={styles.lead}>Share something with the community. Fields marked * are required.</p>
      </div>
      <div className={styles.narrow}>
        <CreatePostForm />
      </div>
    </>
  );
}

export default CreatePost;

import usePageTitle from '../hooks/usePageTitle';
import styles from './Pages.module.css';

function About() {
  usePageTitle('About');

  return (
    <div className={styles.prose}>
      <div className={styles.pageHeader}>
        <h1>About CommunityHub</h1>
      </div>
      <p>
        CommunityHub is a small place for a community to share posts and read what others are
        talking about. It is a React app built for IYF Week 9.
      </p>
      <h2>What it can do</h2>
      <ul>
        <li>Load posts from the JSONPlaceholder test API</li>
        <li>Search posts and open a full page for each one</li>
        <li>Let you write and like posts (saved in your browser)</li>
        <li>Show clear loading and error messages</li>
      </ul>
      <h2>Good to know</h2>
      <p>
        Posts you write are saved only in this browser. JSONPlaceholder is a practice API, so it
        does not store new posts for real.
      </p>
    </div>
  );
}

export default About;

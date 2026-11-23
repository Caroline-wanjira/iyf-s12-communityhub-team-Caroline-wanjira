import styles from './LoadingSpinner.module.css';

// role="status" makes screen readers announce the text politely.
function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`} role="status">
      <div className={styles.spinner} aria-hidden="true"></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;

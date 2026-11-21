import Button from '../Button';
import styles from './ErrorMessage.module.css';

// role="alert" makes screen readers announce the problem straight away.
function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.box} role="alert">
      <p className={styles.text}>
        <span aria-hidden="true">⚠️ </span>
        {message}
      </p>
      {onRetry && (
        <Button variant="outline" size="small" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorMessage;

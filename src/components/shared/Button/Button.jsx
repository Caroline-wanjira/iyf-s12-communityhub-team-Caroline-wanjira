import { Link } from 'react-router-dom';
import styles from './Button.module.css';

// Reusable button. Pass `to="/somewhere"` to make it a router link instead.
function Button({
  children,
  variant = 'primary', // primary | secondary | outline | danger | ghost
  size = 'medium', // small | medium | large
  loading = false,
  disabled = false,
  fullWidth = false,
  to,
  onClick,
  type = 'button',
  className: extraClass = '',
  ...rest
}) {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : '',
    extraClass,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={className}
      {...rest}
    >
      {loading ? (
        <>
          <span className={styles.spinner} aria-hidden="true"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;

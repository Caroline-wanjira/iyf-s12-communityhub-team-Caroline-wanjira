import styles from './Card.module.css';

// A white box with a border. Use `as="article"` for post cards.
function Card({ as: Tag = 'div', title, children, className = '' }) {
  return (
    <Tag className={`${styles.card} ${className}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {children}
    </Tag>
  );
}

export default Card;

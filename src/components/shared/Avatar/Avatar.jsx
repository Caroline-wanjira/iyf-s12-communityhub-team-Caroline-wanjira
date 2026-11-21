import styles from './Avatar.module.css';

// All of these colours are dark enough for white text (good contrast).
const COLORS = ['#0e5e54', '#7a3b8f', '#1d4e89', '#8a4b08', '#a02c4f', '#3f5f12'];

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join('');
}

// Round badge with the person's initials. The name is shown next to it
// in the page, so the badge itself is hidden from screen readers.
function Avatar({ name = '?', size = 'medium' }) {
  // Pick a colour from the name so the same person always gets the same colour.
  let hash = 0;
  for (const char of name) hash += char.charCodeAt(0);
  const background = COLORS[hash % COLORS.length];

  return (
    <span className={`${styles.avatar} ${styles[size]}`} style={{ background }} aria-hidden="true">
      {getInitials(name)}
    </span>
  );
}

export default Avatar;

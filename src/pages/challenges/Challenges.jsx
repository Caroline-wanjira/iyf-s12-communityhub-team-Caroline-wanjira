import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import { Card } from '../../components/shared';
import styles from '../Pages.module.css';

const challenges = [
  { to: '/challenges/timer', title: 'Day 1: Timer', text: 'Start, stop and reset a timer using useEffect.' },
  { to: '/challenges/search', title: 'Day 2: API search', text: 'Search users from the API with a debounced input.' },
  { to: '/challenges/tabs', title: 'Day 3: Tabs', text: 'A reusable tabs component.' },
  { to: '/challenges/profile/1', title: 'Day 4 + 5: User profile', text: 'A members-only page. You will be asked to log in first.' },
];

function Challenges() {
  usePageTitle('Challenges');

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Daily challenges</h1>
        <p className={styles.lead}>Small practice projects from Week 9.</p>
      </div>
      <ul className={styles.challengeGrid}>
        {challenges.map((c) => (
          <li key={c.to}>
            <Card>
              <h2><Link to={c.to}>{c.title}</Link></h2>
              <p>{c.text}</p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Challenges;

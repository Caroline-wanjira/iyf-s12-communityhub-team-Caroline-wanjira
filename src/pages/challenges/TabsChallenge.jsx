import usePageTitle from '../../hooks/usePageTitle';
import { Tabs } from '../../components/shared';
import styles from '../Pages.module.css';

// The tabs are described by a simple array. Tabs builds the buttons and panels from it.
const tabs = [
  { id: 'overview', label: 'Overview', content: <p>Tabs let you split content into sections and show one at a time.</p> },
  { id: 'props', label: 'Props', content: <p>Pass a <code>tabs</code> array with an id, label and content for each tab. Optionally pass <code>defaultTab</code>.</p> },
  { id: 'keyboard', label: 'Keyboard', content: <p>Click a tab, or focus one and use the left and right arrow keys.</p> },
];

function TabsChallenge() {
  usePageTitle('Tabs');

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Tabs</h1>
        <p className={styles.lead}>A reusable Tabs component with a fade-in transition.</p>
      </div>
      <Tabs tabs={tabs} />
    </>
  );
}

export default TabsChallenge;

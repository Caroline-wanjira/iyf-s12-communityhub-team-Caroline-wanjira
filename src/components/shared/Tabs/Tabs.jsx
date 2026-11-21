import { useState, useId } from 'react';
import styles from './Tabs.module.css';

// Reusable tabs. Usage:
//   <Tabs tabs={[{ id: 'a', label: 'First', content: <p>Hi</p> }, ...]} />
// Arrow keys move between tabs (standard keyboard behaviour for tabs).
function Tabs({ tabs, defaultTab }) {
  const [activeId, setActiveId] = useState(defaultTab || tabs[0].id);
  const baseId = useId();

  const handleKeyDown = (e, index) => {
    let nextIndex;
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
    else return;

    e.preventDefault();
    const nextId = tabs[nextIndex].id;
    setActiveId(nextId);
    document.getElementById(`${baseId}-tab-${nextId}`)?.focus();
  };

  const activeTab = tabs.find((t) => t.id === activeId) || tabs[0];

  return (
    <div>
      <div role="tablist" className={styles.list}>
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              id={`${baseId}-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-panel`}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => setActiveId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* key={activeTab.id} makes React re-create the panel, which replays the fade-in. */}
      <div
        key={activeTab.id}
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${activeTab.id}`}
        className={styles.panel}
      >
        {activeTab.content}
      </div>
    </div>
  );
}

export default Tabs;

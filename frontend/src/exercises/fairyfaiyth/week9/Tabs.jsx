import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Home", content: "Welcome to the Home tab!" },
    { title: "About", content: "This is the About section." },
    { title: "Contact", content: "Contact us here!" },
  ];

  return (
    <div>
      <div role="tablist" aria-label="Example tabs">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            role="tab"
            id={`tab-${index}`}
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;

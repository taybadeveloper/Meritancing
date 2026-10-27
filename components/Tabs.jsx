"use client";

import { useState } from "react";

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tabs">
      <div className="tab-labels" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={`tab-label${index === active ? " active" : ""}`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-panels">{tabs[active].content}</div>
    </div>
  );
}

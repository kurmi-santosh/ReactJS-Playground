import { useState } from "react";

export const TabComponent = ({ children }) => {
  let [activeTab, setActiveTab] = useState(0);

  var tabs = children.map((child, index) => {
    return (
      <button
        key={`tab-${index}`}
        className={activeTab === index ? "btn-active" : "btn"}
        disabled={activeTab === index}
        onClick={() => setActiveTab(index)}
      >
        {child.props.title}
      </button>
    );
  });

  var views = children.map((child, index) => {
    return (
      <div key={`content-${index}`} className="view">
        {child.props.children}
      </div>
    );
  });

  return (
    <div className="tabs">
      {tabs}
      {views[activeTab]}
    </div>
  );
};

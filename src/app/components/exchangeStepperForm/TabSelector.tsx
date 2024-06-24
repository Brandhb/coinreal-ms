import React from "react";

interface TabSelectorProps {
  activeTab: "crypto" | "fiat";
  setActiveTab: (tab: "crypto" | "fiat") => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-4 flex justify-around">
      <button
        className={`px-4 py-2 ${activeTab === "crypto" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setActiveTab("crypto")}
      >
        Buy with Crypto
      </button>
      <button
        className={`px-4 py-2 ${activeTab === "fiat" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setActiveTab("fiat")}
      >
        Buy with Fiat
      </button>
    </div>
  );
};

export default TabSelector;

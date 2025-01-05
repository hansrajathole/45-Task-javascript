import React, { useState } from "react";

const App = () => {
  const items = [
    "This is an inbox layout.",
    "Check one item",
    "Hold down your Shift key",
    "Check a lower item",
    "Everything in between should also be set to checked",
    "Try do it without any libraries",
    "Just regular JavaScript",
    "Good Luck!",
    "Don't forget to tweet your result!",
  ];

  const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
  const [lastChecked, setLastChecked] = useState(null);

  const handleCheck = (index, event) => {
    const updatedCheckedItems = [...checkedItems];

    if (event.shiftKey && lastChecked !== null) {
      
      const start = Math.min(index, lastChecked);
      const end = Math.max(index, lastChecked);

      for (let i = start; i <= end; i++) {
        updatedCheckedItems[i] = true; 
      }
    } else {
     
      updatedCheckedItems[index] = !updatedCheckedItems[index];
    }

    setCheckedItems(updatedCheckedItems); 
    setLastChecked(index);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-yellow-400">
      <div className="bg-white shadow-lg rounded-lg p-4 w-1/2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2 py-2 border-b">
            <input
              type="checkbox"
              checked={checkedItems[index]}
              onClick={(event) => handleCheck(index, event)} 
              className="cursor-pointer"
            />
            <span
              className={`text-gray-700 ${
                checkedItems[index] ? "line-through" : ""
              }`}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

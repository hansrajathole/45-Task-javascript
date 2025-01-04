import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [blur, setBlur] = useState(5); // Default blur value
  const [bgColor, setBgColor] = useState(255); // Default background color (as a range)

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
     
    >
      <h1 className="text-2xl font-bold mb-4">Blur Image Control</h1>
      <div className="flex items-center mb-4">
        <label className="mr-2">Blur:</label>
        <input
          type="range"
          min="0"
          max="20"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
          className="cursor-pointer"
        />
      </div>

      <div className="flex flex-col items-center  mb-14">
        <label className="mr-2 mb-2">Background Brightness:</label>
        <input
          type="range"
          min="0"
          max="255"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="cursor-pointer w-64"
        />
      </div>

      <div className=" overflow-hidden rounded-lg mb-4"
         style={{ backgroundColor: `rgb(${bgColor}, ${bgColor}, ${bgColor})` }}
      >
        <img
          src="https://images.unsplash.com/photo-1733690210785-8a48c7895083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Blurred"
          className=" h-full object-cover"
          style={{ filter: `blur(${blur}px)` }}
        />
      </div>

      
    </div>
  );
}

export default App

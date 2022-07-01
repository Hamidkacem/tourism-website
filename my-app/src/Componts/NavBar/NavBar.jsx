import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.css";
function NabBar() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="Navbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div className='line'></div>
      <ul className="NavBar">
        <li>00 Home</li>
        <li>01 Destination</li>
        <li>02 Crew</li>
        <li>03 Technology</li>
      </ul>
    </div>
  );
}

export default NabBar;

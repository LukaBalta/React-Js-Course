import React from "react";

export default function TapButton({ children, onSelect, isSelected }) {
  // document.querySelector("button").addEventListener("click",()={}) vanilla javascript

  console.log("TabButton render count");

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

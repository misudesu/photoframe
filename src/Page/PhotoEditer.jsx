import React from "react";

export default function PhotoEditer({ name, active, handleClick }) {
  return (
    
    <button
      className={`sidebar-item ${active ? "rounded-md bg-gray-300 px-2 py-1 ml-4 mt-2 peer-active:accent-slate-600 hover:bg-blue-700 hover:text-white":"active px-2 text-green-600" }`}
   
      onClick={handleClick}
    >
      {name}
    </button>
    
  );
}
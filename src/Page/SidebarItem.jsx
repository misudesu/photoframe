import React from "react";

export default function SidebarItem({ name, active, handleClick }) {
  return (
    
    <button
    //   className={`sidebar-item ${active ? "active" : ""}`}
    className="rounded-md bg-gray-300 px-2 py-1 ml-4 mt-2 peer-active:accent-slate-600 hover:bg-blue-700 hover:text-white"
      onClick={handleClick}
    >
      {name}
    </button>
    
  );
}
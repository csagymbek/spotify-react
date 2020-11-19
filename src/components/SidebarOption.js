import React from "react";
import "../styles/SidebarOption.css";

export default function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
    </div>
  );
}

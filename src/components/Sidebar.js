import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="sidebar logo"
        className="sidebar__logo"
      />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your Library" />
    </div>
  );
}

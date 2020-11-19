import React from "react";
import { accessUrl } from "../configs/spotify";
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="login">
      {/* Spotify Logo  */}
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="spotify logo"
      />
      {/* Login Button  */}
      <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

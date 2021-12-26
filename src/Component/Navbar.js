import React from "react";

export default function navbar() {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <span>CAL</span>ISTHENICS
        </a>

        <div id="menu-btn" className="fas fa-bars"></div>
        <nav className="navbar ">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#features">features</a>
          <a href="#pricing">pricing</a>
          <a href="#trainers">trainers</a>
          <a href="#blog">blog</a>
        </nav>
      </header>
    </div>
  );
}

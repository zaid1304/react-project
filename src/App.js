// import logo from './logo.svg';
// import React, { Component } from "react";

import "./App.css";
import Navbar from "./Component/Navbar.js";

function App() {
  let menu = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".header .navbar");

  menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
  };
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;

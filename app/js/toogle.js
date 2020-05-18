"use strict";

var navMain = document.querySelector(".list-nav");
var navToggle = document.querySelector(".button__nav");
var header = document.querySelector(".header");


navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("list-nav_closed")) {
    navMain.classList.add("list-nav_opened");
    navMain.classList.remove("list-nav_closed");
    header.classList.add("header_opened");
  } else {
    navMain.classList.add("list-nav_closed");
    navMain.classList.remove("list-nav_opened");
    header.classList.remove("header_opened");
  }
});

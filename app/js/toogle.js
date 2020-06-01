"use strict";

var navToggle = document.querySelector(".button__nav");
var header = document.querySelector(".header");

navToggle.addEventListener("click", function () {
  if (header.classList.contains("header_opened")) {
    header.classList.remove("header_opened");
  } else {
    header.classList.add("header_opened");
  }
});

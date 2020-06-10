"use strict";

var navToggle = document.querySelector(".button__nav");
var header = document.querySelector(".header");
var siteNav = document.querySelector(".container__site-nav");

navToggle.addEventListener("click", function () {
    if (header.classList.contains("header_opened")) {
        header.classList.remove("header_opened");
        siteNav.classList.remove("container__site-nav_opened");
    } else {
        header.classList.add("header_opened");
        siteNav.classList.add("container__site-nav_opened");
    }
});

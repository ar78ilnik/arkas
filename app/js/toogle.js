"use strict";

var navToggle = document.querySelector(".button__nav");
var header = document.querySelector(".header");
var offer = document.querySelector(".container__offer");

navToggle.addEventListener("click", function () {
    if (header.classList.contains("header_opened")) {
        header.classList.remove("header_opened");
        offer.classList.remove("container__offer_opened");
    } else {
        header.classList.add("header_opened");
        offer.classList.add("container__offer_opened");
    }
});

"use strict";
var imgMini = document.querySelectorAll(".catalog-unit__mini-item");
var imgBig = document.querySelector(".catalog-unit__img");

imgMini.forEach(function (item) {
  item.addEventListener("click", function () {
    var imgMiniSrc = item.getAttribute("src");
    imgBig.setAttribute("src", imgMiniSrc);
  })
});

"use strict";
var imgItem = document.querySelectorAll(".catalog-unit__mini-item");

imgItem.forEach(function (item) {
  item.addEventListener("click", function () {
    alert("hola");
  })
});

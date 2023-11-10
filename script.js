"use strict";

const preloader = document.querySelector(".preload");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList("loaded");
});

// We need to get the value of mouse and update that value to our cursor follower

const cursorFollower = document.getElementById("mouse-follower");

window.addEventListener("mousemove", function (e) {
  let xValue = e.clientX;
  let yValue = e.clientY;
  setTimeout(() => {
    cursorFollower.style.top = `${yValue}px`;
    cursorFollower.style.left = `${xValue}px`;
  }, 100);
});

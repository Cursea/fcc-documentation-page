import "./styles.css";

const navbarIcon = document.querySelector("#navbar-icon");
const nav = document.querySelector("#navbar");
const grid = document.querySelector("#container");
const body = document.querySelector("body");
const nightModeIcon = document.querySelector("#night-mode-icon");

let navShowing = nav.style.display !== "none";

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM loaded");
  let cls = localStorage.getItem("night-mode");
  console.log(cls);

  //should return false (because undefined) onLoad but, if true,
  //should add whatever class it finds to the body
  if (cls) {
    body.classList.add("night-mode");
  }
});

document.onload = event => {
  console.log("document loaded");
};

console.log(localStorage.getItem("night-mode"));

//expand/collapse the sidebar + move the icon
navbarIcon.addEventListener("click", function() {
  //switches "navShowing" from true to false; very clever
  navShowing = !navShowing;

  nav.style.display = !navShowing ? "none" : "initial";
  navbarIcon.style.left = !navShowing ? "calc(-0.5vw)" : "calc(95vw / 5)";
  navbarIcon.innerText = !navShowing ? ">" : "<";
  grid.style.gridTemplateAreas =
    '"' +
    (navShowing ? "navbar " : "") +
    'main-doc main-doc main-doc main-doc"';
  grid.style.gridTemplateColumns =
    '"' + (navShowing ? "1fr " : "") + '1fr 1fr 1fr 1fr"';
});

//nightmode toggle
nightModeIcon.addEventListener("click", function() {
  //returns true/false/undefined
  let nightModeEnabled = localStorage.getItem("night-mode");

  //if nightModeEnabled is false/undefined,
  //turn it on and make the page dark, else reverse
  if (!nightModeEnabled) {
    body.classList.add("night-mode");
    nightModeEnabled = "true";
    localStorage.setItem("night-mode", nightModeEnabled);
  } else {
    body.classList.remove("night-mode");
    nightModeEnabled = "";
    localStorage.setItem("night-mode", nightModeEnabled);
  }
  //night-mode state
  console.log({ ...localStorage });
});

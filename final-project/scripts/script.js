// Greet returning visitors
const greeting = document.getElementById("greeting");
const hasVisited = localStorage.getItem("visitedBefore");

if (greeting) {
  greeting.textContent = hasVisited ? "Welcome back!" : "Welcome!";
  if (!hasVisited) localStorage.setItem("visitedBefore", "true");
}

// Show last modified date
const lastModifiedText = document.querySelector("#lastModified");
if (lastModifiedText) {
  lastModifiedText.textContent = `Last Modified: ${document.lastModified}`;
}

// Hamburger toggle logic
const myButton = document.getElementById("myButton");
const menu = document.querySelector(".menuLinks");

if (myButton && menu) {
  myButton.addEventListener("click", () => {
    myButton.classList.toggle("open");
    menu.classList.toggle("open");
  });
}

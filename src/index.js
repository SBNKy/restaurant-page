import "./style.css";
import createHome from "./components/Home/Home.js";
import createMenu from "./components/Menu/Menu.js";
import createContact from "./components/Contact/Contact.js";

const contentContainer = document.querySelector("main");
const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const contactBtn = document.querySelector("#contact-button");

function loadComponent(component) {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(component);
}

homeBtn.addEventListener("click", () => {
    loadComponent(createHome());
});

menuBtn.addEventListener("click", () => {
    loadComponent(createMenu());
})

contactBtn.addEventListener("click", () => {
    loadComponent(createContact());
})

// loadComponent(homeComponent())
// loadComponent(createMenu());
loadComponent(createContact());
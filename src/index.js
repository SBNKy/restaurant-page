import "./style.css";
import createHome from "./components/Home/Home";

const contentContainer = document.querySelector("main");

function loadComponent(component) {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(component);
}

const homeComponent = createHome();

loadComponent(homeComponent)
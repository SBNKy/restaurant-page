import "./style.css";
import createHome from "./components/Home/Home";

const contentContainer = document.querySelector("main");

const homeComponent = createHome();

contentContainer.appendChild(homeComponent);

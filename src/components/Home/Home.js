import "./style.css";

export default function createHomepage() {
    const container = document.createElement("div");
    container.classList.add('container');
    
    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-container");
    const welcomeText = document.createElement("h1");
    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome to {your restaurant name}";
    const welcomeDescription = document.createElement("p");
    welcomeDescription.classList.add("welcome-description");
    welcomeDescription.textContent = "A place where your expectations match reality";

    welcomeDiv.appendChild(welcomeText)
    welcomeDiv.appendChild(welcomeDescription);


    container.appendChild(welcomeDiv);
    return container;
}
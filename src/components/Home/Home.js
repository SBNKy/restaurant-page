import "./style.css";
import freshFood from "../../assets/images/freshFood.jpg";

export default function createHomepage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-container");
    const welcomeText = document.createElement("h1");
    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome to {your restaurant name}";
    const welcomeDescription = document.createElement("p");
    welcomeDescription.classList.add("welcome-description");
    welcomeDescription.textContent =
        "A place where your expectations match reality";
    welcomeDiv.appendChild(welcomeText);
    welcomeDiv.appendChild(welcomeDescription);

    const foodSection = document.createElement("div");
    foodSection.classList.add("grid");
    const freshFoodImage = document.createElement("img");
    freshFoodImage.classList.add("food-image");
    freshFoodImage.src = freshFood;
    freshFoodImage.height = 400;

    const foodDescription = document.createElement("div");
    foodDescription.classList.add("food-description");
    const foodDescriptionTitle = document.createElement("h2");
    foodDescriptionTitle.textContent = "<Your food description title>";
    const foodDescriptionText = document.createElement("p");
    foodDescriptionText.textContent =
        "We believe that the best dishes start long before they reach the kitchen. That’s why we partner with local farmers to source organic, sun-ripened ingredients harvested at their peak. No shortcuts, no preservatives—just the pure, vibrant taste of nature on your plate. Taste the difference that true quality makes.";

    foodDescription.appendChild(foodDescriptionTitle);
    foodDescription.appendChild(foodDescriptionText);

    foodSection.appendChild(freshFoodImage);
    foodSection.appendChild(foodDescription);

    container.appendChild(welcomeDiv);
    container.appendChild(foodSection);

    return container;
}

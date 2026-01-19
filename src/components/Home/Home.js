import "./style.css";
import freshFood from "../../assets/images/freshFood.jpg";
import cookingPhoto from "../../assets/images/cooking-photo.jpg";

export default function createHomepage() {
    const container = document.createElement("div");
    container.classList.add("container");
    
    function createSeparator() {
        const separatorLine = document.createElement("div");
        separatorLine.classList.add("separator-line");
        return separatorLine;
    }

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-container");
    const welcomeText = document.createElement("h1");
    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = "Welcome to {your restaurant name}";
    const welcomeDescription = document.createElement("p");
    welcomeDescription.classList.add("welcome-description");
    welcomeDescription.textContent =
        "A place where your expectations meet reality";

    welcomeDiv.appendChild(welcomeText);
    welcomeDiv.appendChild(welcomeDescription);

    const foodSection = document.createElement("div");
    foodSection.classList.add("grid");

    const freshFoodImage = document.createElement("img");
    freshFoodImage.classList.add("image");
    freshFoodImage.src = freshFood;
    freshFoodImage.height = 400;

    const foodDescription = document.createElement("div");
    foodDescription.classList.add("description");
    const foodDescriptionTitle = document.createElement("h2");
    foodDescriptionTitle.textContent = "The Art of Freshness";
    const foodDescriptionText = document.createElement("p");
    foodDescriptionText.textContent =
        "We believe that the best dishes start long before they reach the kitchen. That’s why we partner with local farmers to source organic, sun-ripened ingredients harvested at their peak. No shortcuts, no preservatives—just the pure, vibrant taste of nature on your plate. Taste the difference that true quality makes.";

    foodDescription.appendChild(foodDescriptionTitle);
    foodDescription.appendChild(foodDescriptionText);

    foodSection.appendChild(freshFoodImage);
    foodSection.appendChild(foodDescription);

    const teamSection = document.createElement("div");
    teamSection.classList.add("grid");

    const teamDescription = document.createElement("div");
    teamDescription.classList.add("description");
    const teamDescriptionTitle = document.createElement("h2");
    teamDescriptionTitle.textContent = "Crafted with Care";
    const teamDescriptionText = document.createElement("p");
    teamDescriptionText.textContent =
        "Behind every exquisite plate is a team of culinary artists obsessed with perfection. We believe that great food takes time, patience, and a steady hand. From the precise cut of the vegetables to the final garnish, our chefs pour their heart into every detail, ensuring that each bite tells a story of passion and mastery.";

    teamDescription.appendChild(teamDescriptionTitle);
    teamDescription.appendChild(teamDescriptionText);

    const teamImage = document.createElement("img");
    teamImage.classList.add("image");
    teamImage.src = cookingPhoto;
    teamImage.height = 400;

    teamSection.appendChild(teamDescription);
    teamSection.appendChild(teamImage);

    container.appendChild(welcomeDiv);
    container.appendChild(createSeparator());
    container.appendChild(foodSection);
    container.appendChild(createSeparator());
    container.appendChild(teamSection);

    return container;
}

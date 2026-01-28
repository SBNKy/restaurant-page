import "./style.css";
import freshFoodImg from "../../assets/images/freshFood.jpg";
import cookingPhoto from "../../assets/images/cooking-photo.jpg";
import meatDishPhoto from "../../assets/images/meat-dish.jpg";
import foodPlatingPhoto from "../../assets/images/food-plating-photo.jpeg";
import dessertPhoto from "../../assets/images/dessert-photo.webp";

export default function createHomepage() {
    const container = document.createElement("div");
    container.classList.add("home-container");

    const welcomeTitle = "Welcome to {your restaurant name}";
    const welcomeText = "A place where your expectations meet reality";
    const welcomeDiv = createWelcomeMessage(welcomeTitle, welcomeText);

    const foodSectionDescTitle = "The Art of Freshness";
    const foodSectionDescText =
        "We believe that the best dishes start long before they reach the kitchen. That’s why we partner with local farmers to source organic, sun-ripened ingredients harvested at their peak. No shortcuts, no preservatives—just the pure, vibrant taste of nature on your plate. Taste the difference that true quality makes.";
    const foodSectionImgSrc = freshFoodImg;
    const foodSectionImgHeight = 400;

    const foodSection = createSection(
        foodSectionDescTitle,
        foodSectionDescText,
        foodSectionImgSrc,
        foodSectionImgHeight,
        false,
    );

    const teamSectionDescTitle = "Crafted with Care";
    const teamSectionDescText =
        "Behind every exquisite plate is a team of culinary artists obsessed with perfection. We believe that great food takes time, patience, and a steady hand. From the precise cut of the vegetables to the final garnish, our chefs pour their heart into every detail, ensuring that each bite tells a story of passion and mastery.";
    const teamSectionImgSrc = cookingPhoto;
    const teamSectionImgHeight = 400;

    const teamSection = createSection(
        teamSectionDescTitle,
        teamSectionDescText,
        teamSectionImgSrc,
        teamSectionImgHeight,
    );

    const columnSectionTitle = "Tradition Meets Innovation";
    const leftImgSrc = meatDishPhoto;
    const middleImgSrc = foodPlatingPhoto;
    const rightImgSrc = dessertPhoto;
    const columnSectionImgHeight = 400;

    const columnSection = createColumnSection(
        columnSectionTitle,
        leftImgSrc,
        middleImgSrc,
        rightImgSrc,
        columnSectionImgHeight,
    );

    container.appendChild(welcomeDiv);
    container.appendChild(createSeparator());
    container.appendChild(foodSection);
    container.appendChild(createSeparator());
    container.appendChild(teamSection);
    container.appendChild(createSeparator());
    container.appendChild(columnSection);
    return container;
}

function createWelcomeMessage(title, text) {
    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcome-container");
    const welcomeText = document.createElement("h1");
    welcomeText.classList.add("welcome-text");
    welcomeText.textContent = title;
    const welcomeDescription = document.createElement("p");
    welcomeDescription.classList.add("welcome-description");
    welcomeDescription.textContent = text;

    welcomeDiv.appendChild(welcomeText);
    welcomeDiv.appendChild(welcomeDescription);

    return welcomeDiv;
}

function createSection(
    descTitle,
    descText,
    imgSrc,
    imgHeight,
    imgOnRight = true,
) {
    const section = document.createElement("div");
    section.classList.add("grid");

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = imgSrc;
    image.height = imgHeight;

    const description = document.createElement("div");
    description.classList.add("description");
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = descTitle;
    const descriptionText = document.createElement("p");
    descriptionText.textContent = descText;

    description.appendChild(descriptionTitle);
    description.appendChild(descriptionText);

    if (imgOnRight) {
        section.appendChild(description);
        section.appendChild(image);
    } else {
        section.appendChild(image);
        section.appendChild(description);
    }

    return section;
}

function createColumnSection(
    title,
    leftImgSrc,
    middleImgSrc,
    rightImgSrc,
    imgHeight,
) {
    const section = document.createElement("div");
    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("three-col-grid-title");
    sectionTitle.textContent = title;

    const colSection = document.createElement("div");
    colSection.classList.add("three-col-grid");

    const leftImg = document.createElement("img");
    const middleImg = document.createElement("img");
    const rightImg = document.createElement("img");
    leftImg.src = leftImgSrc;
    middleImg.src = middleImgSrc;
    rightImg.src = rightImgSrc;

    const images = [leftImg, middleImg, rightImg];
    images.forEach((img) => {
        img.height = imgHeight;
        img.classList.add("image");
        colSection.appendChild(img);
    });

    section.appendChild(sectionTitle);
    section.appendChild(colSection);
    return section;
}

function createSeparator() {
    const separatorLine = document.createElement("div");
    separatorLine.classList.add("separator-line");
    return separatorLine;
}

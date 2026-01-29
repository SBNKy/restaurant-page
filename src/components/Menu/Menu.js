import "./style.css";
import { getMenuData } from "./menuData";

export default function createMenuPage() {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";

    

    const menuColumns = createMenu();

    container.appendChild(menuTitle);
    container.appendChild(createMenuSeparator());
    container.appendChild(menuColumns);
    return container;
}

function createMenuSeparator() {
    const separatorLine = document.createElement("div");
    separatorLine.classList.add("menu-separator");
    return separatorLine;
}

function createMenu() {
    const menuColumns = document.createElement("div");
    menuColumns.classList.add("menu-columns");

    const menuData = getMenuData();
    menuData.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("menu-category");

        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category.category;
        
        categoryDiv.appendChild(categoryTitle);

        category.items.forEach(dish => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("menu-item");

            const headerDiv = document.createElement("div");
            headerDiv.classList.add("menu-item-header");
            
            const dishName = document.createElement("span");
            dishName.classList.add("menu-item-name");
            dishName.textContent = dish.name;
            
            const dishPrice = document.createElement("span");
            dishPrice.classList.add("menu-item-price");
            dishPrice.textContent = dish.price;

            headerDiv.appendChild(dishName);
            headerDiv.appendChild(dishPrice);

            const dishIngredients = document.createElement("p");
            dishIngredients.classList.add("menu-item-ingredients");
            dishIngredients.textContent = dish.ingredients;

            itemDiv.appendChild(headerDiv)
            itemDiv.appendChild(dishIngredients);

            categoryDiv.appendChild(itemDiv);
        })

        menuColumns.appendChild(categoryDiv);
    })

    return menuColumns;
}

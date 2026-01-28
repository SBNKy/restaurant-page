import "./style.css"

export default function createMenu() {
    const container = document.createElement("div");
    container.classList.add("menu-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";




    container.appendChild(menuTitle);
    container.appendChild(createMenuSeparator());
    return container;   
}

function createMenuSeparator() {
    const separatorLine = document.createElement("div");
    separatorLine.classList.add("menu-separator");
    return separatorLine;
}
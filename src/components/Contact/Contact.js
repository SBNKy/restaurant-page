import "./style.css";

export default function createContactPage() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("contact-container");

    const form = document.createElement("form");

    const personalDataFieldset = createPersonalDataFieldset();

    const formTextarea = document.createElement("textarea");
    
    form.appendChild(personalDataFieldset);
    form.appendChild(formTextarea);

    containerDiv.appendChild(form);
    return containerDiv;
}

function createPersonalDataFieldset() {
    const personalDataFieldset = document.createElement("fieldset");

    const nameLabelText = "Name:";
    const nameLabel = createLabel(nameLabelText)
    const nameInput = createInput("name");
    nameLabel.appendChild(nameInput);

    const surnameLabelText = "Surname:";

    personalDataFieldset.appendChild(nameLabel);
    return personalDataFieldset;
}

function createLabel(text) {
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = text;
    
    label.appendChild(span);
    return label;
}

function createInput(name, type="input", value="") {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = value;

    return input;
}
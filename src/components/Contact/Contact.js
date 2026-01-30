import "./style.css";

export default function createContactPage() {
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("contact-container");

    const contactText = document.createElement("h2");
    contactText.classList.add("contact-text")
    contactText.textContent = "Contact Us"

    const form = document.createElement("form");

    const personalDataFieldset = createPersonalDataFieldset();
    const formTextarea = document.createElement("textarea");
    formTextarea.cols = "70";
    formTextarea.rows = "10";

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.textContent = "Send";

    form.appendChild(personalDataFieldset);
    form.appendChild(formTextarea);
    form.appendChild(submitBtn);


    containerDiv.appendChild(contactText);
    containerDiv.appendChild(form);
    return containerDiv;
}

function createPersonalDataFieldset() {
    const personalDataFieldset = document.createElement("fieldset");

    const fieldsConfig = [
        {name: "name", label: "Name:", type: "text"},
        {name: "surname", label: "Surname:", type: "text"},
        {name: "email", label: "Email:", type: "email"},
        {name: "phone-number:", label: "Phone number:", type: "tel"}
    ];

    fieldsConfig.forEach(config => {
        const label = createLabel(config.label);
        const input = createInput(config.name, config.type);

        label.appendChild(input);
        
        personalDataFieldset.appendChild(label);
    })

    return personalDataFieldset;
}

function createLabel(text) {
    const label = document.createElement("label");
    const span = document.createElement("span");
    span.textContent = text;

    label.appendChild(span);
    return label;
}

function createInput(name, type, value = "") {
    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    input.value = value;

    return input;
}

// Change text dynamically
document.getElementById("change-text").addEventListener("click", () => {
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.textContent = "The text has been changed dynamically!";
});

// Add a new element
document.getElementById("add-element").addEventListener("click", () => {
    const contentSection = document.getElementById("content");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a newly added paragraph!";
    contentSection.appendChild(newParagraph);
});

// Remove the last added element
document.getElementById("remove-element").addEventListener("click", () => {
    const contentSection = document.getElementById("content");
    const lastElement = contentSection.lastElementChild;
    if (lastElement && lastElement !== document.getElementById("dynamic-text")) {
        contentSection.removeChild(lastElement);
    }
});

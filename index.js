import products from "./src/data/products.js";
import { createCard, createImgContainer, createDescription } from "./src/logic.js";

for (let i of products) {
    
    const card = createCard(i) // Create card 

    const imgContainer = createImgContainer(i) // Create image container with the image inside

    card.appendChild(imgContainer);

    // Create and append the description to the image container
    const description = createDescription(i)

    card.appendChild(description);

    //append the card to the dom
    const productsContainer = document.querySelector(".products-container");

    productsContainer.appendChild(card);
}

function filterItem(value){
    // Compare to see which button was pressed to add the class active
    let buttons = document.querySelectorAll(".filter-selection");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Selecting all cards 
    let cards = document.querySelectorAll(".card");
    // If value equals All then all cards will be displayed
    if (value.toUpperCase() == "ALL") {
        cards.forEach((card) => {
            card.classList.remove("hide");
        })
    // Else there will be evaluated if the cards category match the value
    } else {
        cards.forEach((card) => {
            if (card.classList.contains(value)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        })
    }
}

// Search button click

function searchItem(){
    filterItem("nothing");
    let item = document.getElementById("search-input").value.toUpperCase();
    // Gathering the cards in a list and the description
    let descriptions = document.querySelectorAll(".description");

    descriptions.forEach((description) => {
        
        let name = description.innerText;
        if (name.includes(item)) {
            description.parentElement.classList.remove("hide");
        } else {
            description.parentElement.classList.add("hide");
        }
    })
};

// Add the function searchItem to the search-btn
document.getElementById("search-btn").addEventListener ("click", searchItem);

// Add the feature to execute the searchItem when the Enter button is pressed
document.addEventListener("keydown", function(event){
    if(event.code === 'Enter') {
        searchItem();
    }
})

// Make sure All products are shown when the page is loaded for the first time
window.onload = () => {
    filterItem("All");
}
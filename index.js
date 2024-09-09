import products from "./src/data/products.js";

for (let i of products) {
    //create the cards for the products
    const card = document.createElement("div");
    //card should have category
    card.classList.add("card", i.category, "hidden");
    //image div
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    //craete the image 
    const image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //create and append the description to the image container
    const description = document.createElement("h5");
    description.classList.add("description")
    description.innerHTML = (i.productName + "<br>" + "$" + i.price).toUpperCase();
    card.appendChild(description);
    //append the card to the dom
    const productsContainer = document.querySelector(".products-container");
    productsContainer.appendChild(card);
}

function filterItem(value){
    //buttons class
    let buttons = document.querySelectorAll(".filter-selection");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //selecting all cards 
    let cards = document.querySelectorAll(".card");
    //if value equals All then all cards will be displayed
    if (value.toUpperCase() == "ALL") {
        cards.forEach((card) => {
            card.classList.remove("hide");
        })
    //else there will be evaluated if the cards category match the value
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

//search button click

function searchItem(){
    filterItem("nothing");
    let item = document.getElementById("search-input").value.toUpperCase();
    //gathering the cards in a list and the description
    let descriptions = document.querySelectorAll(".description");

    descriptions.forEach((description) => {
        
        let name = description.innerText;
        if (name.includes(item)) {
            console.log(name);
            description.parentElement.classList.remove("hide");
        } else {
            description.parentElement.classList.add("hide");
        }
    })
};

document.getElementById("search-btn").addEventListener ("click", searchItem);

document.addEventListener("keydown", function(event){
    if(event.code === 'Enter') {
        searchItem();
    }
})

window.onload = () => {
    filterItem("All");
}
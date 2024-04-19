let products = {
    data: [{
        productName: "Cotton Pants",
        category: "Bottomwear",
        price: "35",
        image: "img/beige-cotton-pants.jpg"
    },
    {
        productName: "Beige Jacket",
        category: "Jacket",
        price: "40",
        image: "img/beige-jacket.jpg"
    },
    {
        productName: "Beige Shirt",
        category: "Topwear",
        price: "25",
        image: "img/beige-shirt.jpg"
    },
    {
        productName: "Beige Short",
        category: "Bottomwear",
        price: "30",
        image: "img/beige-short.jpg"
    },
    {
        productName: "Beige Swearter",
        category: "Topwear",
        price: "35",
        image: "img/beige-sweater.jpg"
    },
    {
        productName: "Black Jogger",
        category: "Bottomwear",
        price: "30",
        image: "img/black-jogger.jpg"
    },
    {
        productName: "Black T-shirt",
        category: "Topwear",
        price: "20",
        image: "img/black-t-shirt.jpg"
    },
    {
        productName: "Blue Jean Jacket",
        category: "Jacket",
        price: "40",
        image: "img/blue-jean-jacket.jpg"
    },
    {
        productName: "Blue Shirt",
        category: "Topwear",
        price: "20",
        image: "img/blue-shirt.jpg"
    },
    {
        productName: "Brown Watch",
        category: "Watch",
        price: "70",
        image: "img/brown-watch.jpg"
    },
    {
        productName: "Gray Pants",
        category: "Bottomwear",
        price: "40",
        image: "img/gray-pants.jpg"
    },
    {
        productName: "Green Jacket",
        category: "Jacket",
        price: "50",
        image: "img/green-jacket.jpg"
    },
    {
        productName: "Green Pants",
        category: "Bottomwear",
        price: "35",
        image: "img/green-pants.jpg"
    },
    {
        productName: "Green Shirt",
        category: "Topwear",
        price: "20",
        image: "img/green-shirt.jpg"
    },
    {
        productName: "Light Blue Pants",
        category: "Bottomwear",
        price: "55",
        image: "img/light-blue-pants.jpg"
    },
    {
        productName: "Sleeveless Gray Shirt",
        category: "Topwear",
        price: "35",
        image: "img/sleeveless-gray-shirt.jpg"
    },
    {
        productName: "Sporty Smart Watch",
        category: "Watch",
        price: "70",
        image: "img/sporty-black-watch.jpg"
    },
],
};

for (let i of products.data) {
    //create the cards for the products
    let card = document.createElement("div");
    //card should have category
    card.classList.add("card", i.category, "hidden");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    //craete the image 
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //create and append the description to the image container
    let description = document.createElement("h5");
    description.classList.add("description")
    description.innerHTML = (i.productName + "<br>" + "$" + i.price).toUpperCase();
    card.appendChild(description);
    //append the card to the dom
    let productsContainer = document.querySelector(".products-container");
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
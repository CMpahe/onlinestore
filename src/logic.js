export const createCard = (product) => {
    // Create the card for the product
    const card = document.createElement("div");
    // Add the classList with the category
    card.classList.add("card", product.category, "hidden");

    return card
}

export const createImgContainer = (product) => {
    // Create the imageContainer
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    // Create the image to put into the container
    const image = document.createElement("img");
    image.setAttribute("src", product.image);
    imgContainer.appendChild(image); // Append the image into the container

    return imgContainer
}

export const createDescription = (product) => {
    // Create the description for the image container
    const description = document.createElement("h5");
    description.classList.add("description")
    description.innerHTML = (product.productName + "<br>" + "$" + product.price).toUpperCase();

    return description
}


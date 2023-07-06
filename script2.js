let items = "Item1,Item2,Item3,Item4,Item5,Item6,Item7,Item8,Item9,Item10,Item11,Item12";
let itemsArray = items.split(",");
let j = 1;
console.log("here");

itemsArray.forEach(element => {

    let container = document.getElementsByClassName("container")[0];
    let card = document.createElement("div");
    let card_image = document.createElement("img");
    let card_body = document.createElement("div");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");

    container.appendChild(card);
    card.appendChild(card_image);
    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);

    card.setAttribute("class", "card");
    // card.setAttribute("style", "width: 18rem;");

    card_image.setAttribute("src", "images/items/item"+ j++ +".jpg");
    card_image.setAttribute("class", "card-img-top");
    card_image.setAttribute("alt", "...");

    card_body.setAttribute("class", "card-body");

    card_title.setAttribute("class", "card-title");
    card_title.innerHTML = element;

    card_text.setAttribute("class", "card-text");
    card_text.innerHTML = "Price: " + "Rs.230";
});

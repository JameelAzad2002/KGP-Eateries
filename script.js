let eateries = "Eatery1,Eatery2,Eatery3,Eatery4,Eatery5,Eatery6,Eatery7,Eatery8,Eatery9,Eatery10";
let eateriesArray = eateries.split(",");
console.log(eateriesArray);
let i = 1;

eateriesArray.forEach(element => {

    let container = document.getElementsByClassName("container")[0];
    let card = document.createElement("div");
    let card_image = document.createElement("img");
    let card_body = document.createElement("div");
    let card_title = document.createElement("h5");
    let card_text = document.createElement("p");
    let card_btn = document.createElement("a");

    container.appendChild(card);
    card.appendChild(card_image);
    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(card_btn);

    card.setAttribute("class", "card");
    // card.setAttribute("style", "width: 18rem;");

    card_image.setAttribute("src", "/images/img"+i++ +".jpg");
    card_image.setAttribute("class", "card-img-top");
    card_image.setAttribute("alt", "...");

    card_body.setAttribute("class", "card-body");

    card_title.setAttribute("class", "card-title");
    card_title.innerHTML = element;

    card_text.setAttribute("class", "card-text");
    card_text.innerHTML = "Location: Lorem ipsum dolor sit uno";

    card_btn.setAttribute("href", "./details-"+(i-1)+".html");
    card_btn.setAttribute("class", "btn btn-primary");
    card_btn.innerHTML = "Menu & More";
});

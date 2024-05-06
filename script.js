// // Create an element requirement:
// const myItem = document.createElement("li");

// // Create a text:
// const textItem = document.createTextNode("footwear");

// // Append the text node to the "li" node:
// myItem.appendChild(textItem);

// // Append the "li" node to the list:
// document.getElementById("myList").appendChild(myItem);

document.body.appendChild.(myItem);
const fragment = document.createDocumentFragment();
const li = fragment
    .appendChild(document.createElement("section"))
    .appendChild(document.createElement("ul"))
    .appendChild(document.createElement("li"));
li.textContent = "footwear";

document.body.appendChild(fragment);

//add.eventListener requirements


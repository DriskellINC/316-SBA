 // Cache the ul element with id myList
 const myList = document.getElementById("myList");

 // Create a new li element
 const newItem = document.createElement("li");

 // Create a text node
 const textNode = document.createTextNode("suit");

 // Append the text node to the li element
 newItem.appendChild(textNode);

 // Append the li node to the ul list
 myList.appendChild(newItem);

// document.body.appendChild(myItem);


// document.body.appendChild.(myItem);
// const fragment = document.createDocumentFragment();
// const li = fragment
//     .appendChild(document.createElement("section"))
//     .appendChild(document.createElement("ul"))
//     .appendChild(document.createElement("li"));
// li.textContent = "belts";

// document.body.appendChild(fragment);

// //add.eventListener requirements
// const flex = document.getElementById("flex");
// .addEventListener('keypress', checkIfEnter);
// .addEventListener('keypress', checkIfEnter);

// function checkIfEnter(event){
//   if (event.keyCode === 13) {
//     getResults("flex".value);
//   }
// }

// flex.addEventListener('click', userClicked);

// function userClicked(event){
//     getResults(flex.value);
}
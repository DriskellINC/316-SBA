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



}
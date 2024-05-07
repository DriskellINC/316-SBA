// Cache the ul element with id myList
const myList = document.getElementById("myList");

// Create a new li element
const newItem = document.createElement("li");

// Create a text 
const textNode = document.createTextNode("suit");

// Append the text node to the li element
newItem.appendChild(textNode);

// Append the li node to the list
myList.appendChild(newItem);

// validate form
function validateForm() {
    const searchInput = document.getElementById("searchInput").value;

    // Check if the search input is empty
    if (searchInput === "") {

        alert("Please enter a search term.");
      return false;
    }
    // If the search input is not empty, allow the submit
    return true;
  }



}
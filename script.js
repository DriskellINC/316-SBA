// Cache the ul element with id myList
const myList = document.getElementById("myList");

// Create a new li element
const newItem = document.createElement("li");

// Create a text 
const textNode = document.createTextNode("suit"); //idk???

// Append the text node to the li element
newItem.appendChild(textNode);

// Append the li node to the list
myList.appendChild(newItem); //not appending

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

  // Cache the navbar element using querySelector
  const navbar = document.querySelector(".navbar");

  // Navigate from navbar to body using parentNode
  const body = navbar.parentNode;


  // Modify background-color style of navbar in response to user interaction
  navbar.addEventListener("mouseover", function() {
    navbar.style.backgroundColor = "#ffccbc";
  });
  const myBody = 
  document.write.("<h1>to show understanding</h1>");
  document.body.innerHTML = "Some new HTML content";






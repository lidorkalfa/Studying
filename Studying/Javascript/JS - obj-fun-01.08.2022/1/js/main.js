// Gets the div ID from the html page - the ID is 'root'
let myDiv = document.getElementById("root");

// Creates a new HTML element, in this case its a 'button'
let myBtn = document.createElement('button');

// Insert a text to the button we just created, the text is 'Click me'
myBtn.textContent = "Click Me";

// Adds the element 'myBtn' we just created to the last child in the HTML code
myDiv.appendChild(myBtn);

// make somthing happend to the div we choosed, in this case its 'myDiv' which we created before
// when a specific thing is happening - in this case we're changing the bg color of the div
// to BLACK (#000000) when the mouse is on the button and back to WHITE (#ffffff) when the mouse
// leaves the button (two diffrent listeners)
myBtn.addEventListener('mouseenter',() => { myDiv.style.backgroundColor = "#000000" });
myBtn.addEventListener('mouseout',() => { myDiv.style.backgroundColor = "#ffffff" });

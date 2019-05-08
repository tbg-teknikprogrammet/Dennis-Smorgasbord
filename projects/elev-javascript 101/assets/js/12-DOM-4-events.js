// Making things interactive with events

// Events are everywhere!
// - Clicking on a button
// - Hovering over a link
// - Dragging and dropping
// - Pressing the Enter key

/*
***************************************
The Process
***************************************
*/

// We select an element and then add an event listener
// "Listen for a click on this <button>"
// "Listen for a hover event on the <h1>"
// "Listen for a keypress event on text input"

/*
***************************************
The syntax
***************************************
*/

// To add a listener, we use a method called addEventListener() which takes two arguments. 
// addEventListener("event", function(){}, true/false) - where false is standard in the bubbling phase

// select the button
var btn = document.querySelector("button");

// manipulate
btn.addEventListener("click", function() {
    setTimeout(function() {
        document.querySelector("p").innerHTML = "Yay! I've been clicked!";
    }, 500); // delay in milliseconds
});

// select
var lis = document.querySelectorAll("li");

// manipulate
// lis[0].addEventListener("click", function() {
//     lis[0].style.textDecoration = "line-through";
// });
// lis[1].addEventListener("click", function() {
//     lis[1].style.textDecoration = "line-through";
// });
// lis[2].addEventListener("click", function() {
//     lis[2].style.textDecoration = "line-through";
// });

for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() {
        this.style.textDecoration = "line-through"; // The keyword this refers to the item just before .addEventListener
    });
}

/*
***************************************
Color changer
***************************************
*/

// select button
var btnToggle = document.querySelector("#btnToggleBg");
var isPurple = false;

btnToggle.addEventListener("click", function() {
    document.getElementsByTagName("body")[0].classList.toggle("toggleBg");  
    // if(isPurple) {
    //     document.getElementsByTagName("body")[0].style.background = "#34495e";
    // }
    // else {
    //     document.getElementsByTagName("body")[0].style.background = "#663399";
    // }
    // isPurple = !isPurple;
});



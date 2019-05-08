// The process goes as follows:
// SELECT an element and then MANIPULATE it

// select
var h1 = document.querySelector("h1");

// manipulate
h1.style.color = "red";

// Toggle Background color
// select
var bg = document.getElementsByTagName("body")[0];
var isGreen = false;

// manipulate
var interval = setInterval(function() {
    if(isGreen) {
        bg.style.backgroundColor = "white";
    }
    else {
        bg.style.backgroundColor = "green";
    }
    isGreen = !isGreen;
}, 1000);

bg.addEventListener("click", function() {
    clearInterval(interval);
})
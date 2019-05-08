// DOM Manipulation
// We're going to cover different ways of:
// - changing an element's style
// - adding and removing classes
// - changing the content of a tag
// - changing attributes(src, href, etc.)

// select
var element = document.getElementById("highlight");

// manipulate
element.style.color = "orange";
element.style.border = "2px solid black";
element.style.fontSize = "20px";
element.style.backgroundColor = "#aaa";
element.style.marginTop = "10px";

// We get to manipulate each element like this because the element is turned into a JavaScript object with properties, like style
// But the code above isn't very DRY, so of course there's a better way of changing multiple style properties on a single element

var ele = document.querySelector("h1");
ele.classList.add("some-class");

// select
var tag = document.getElementsByClassName("special")[1];

// manipulate
tag.classList.add("another-class");
tag.classList.remove("another-class");
tag.classList.toggle("another-class");

/*
***************************************
Manipulating text and content
***************************************
*/

// select the element
var pEle = document.querySelector(".test");
pEle.textContent = "This is a really <strong>awesome</strong> paragraph";
// innerHTML is similiar to textContent, except it returns a string of all the 
//HTML contained in a given element
pEle.innerHTML = "This is a really really <strong>awesome</strong> paragraph"

// chaining methods
document.getElementsByTagName("h1")[1].textContent = "The End!";
document.getElementsByTagName("h1")[1].innerHTML = "The <i>End!</i>";

/*
***************************************
Manipulating attributes
***************************************
*/

// Use getAttribute() and setAttribute() to read and write attributes
// like src and href

var link = document.querySelector("a");
link.getAttribute("href"); // outputs the value in href attribute
link.setAttribute("href", "http://teknikundervisning.se/");

document.getElementsByTagName("img")[0].setAttribute("src", "assets/js/separation-of-concerns.jpg");
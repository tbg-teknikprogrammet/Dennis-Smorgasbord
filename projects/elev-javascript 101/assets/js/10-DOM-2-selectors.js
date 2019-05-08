// It all starts with the document, the root node
document.URL;
document.links;
document.body;
document.head;

// select
// Takes a string argument and returns the one element with a matching ID
var element = document.getElementById("highlight");

// Takes a string argument and returns a list of elements that have a matching class
var elements = document.getElementsByClassName("bolded"); // returns a nodelist

// Takes a string argument and returns a list of all elements of a given tag name, like <li> or <h1>
var eles = document.getElementsByTagName("li");

// Takes a string argument and returns the first element that matches a given CSS-style selector
// document.querySelector("h1");
// document.querySelector(".bolded");
// document.querySelector("#menu a.active");
// Searching for an element that does not exist returns null
var queryTag = document.querySelector(".bolded");

var queryAllTag = document.querySelectorAll(".bolded");

/*
***************************************
Excerise 1
***************************************
*/

// Come up with 5 different methods to select the first <p> tag
// <body>
//   <h1>I am an H1</h1>
//   <p id="first" class="special">Hello</p>
//   <p class="special">Goodbye</p>
//   <p>Hi again</p>
//   <p id="last">Goodbye Again</p>
// </body>

var pID = document.getElementById("first");
var pClass = document.getElementsByClassName("special")[0];
var pTag = document.getElementsByTagName("p")[0];
var pQS = document.querySelector("h1 + p"); // first p tag after a h1 - the adjacent element
var pQSA = document.querySelectorAll("p")[0];

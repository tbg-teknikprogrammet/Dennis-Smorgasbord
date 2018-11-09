// // Föräldern sjunger och barnet lyssnar
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamanat i skyn");

// // Barnet nynnar med
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamanat i skyn");

// // Nu sjunger barnet den helt själv
// console.log("Blinka lilla stjärna där");
// console.log("Blinka lilla stjärna där");
// console.log("hur jag undrar var du är");
// console.log("fjärran lockar du min syn");
// console.log("likt en diamanat i skyn");

// THIS CODE IS WET! Write Everything Twice
// Eftersträva att er kod är DRY! Don't Repeat Yourself
function twinkleTwinkle() {
    console.log("Blinka lilla stjärna där");
    console.log("Blinka lilla stjärna där");
    console.log("hur jag undrar var du är");
    console.log("fjärran lockar du min syn");
    console.log("likt en diamanat i skyn");
}

// Call a function - Kalla/Anropa på funktionen
twinkleTwinkle();
twinkleTwinkle();
twinkleTwinkle();

// Deklarera en funktion
function doSomething() {
    console.log("Hello World!");
    console.log("Im doing something...");
}

// Anropa funktionen
doSomething();
// Visar innehållet i funktionen
doSomething;

// Parameter och Argument

// Deklarerar en funktion med två stycken parametrar
function square(num, num1) {
    console.log(num * num1);
}

// Anropar funktionen med två stycken argument
square(5, 6);

function sayHello(name) {
    console.log("Well hello there, dear " + name);
}

// Anropar funktionen med ett argument, i form av en string
sayHello("Kingman");
sayHello("Greta");

function area(length, height) {
    console.log("The area of: " + length + " and " + height + " is: " + 
    length * height);
}

area(5, 10);

function greet(person1, person2, person3, person4) {
    console.log("Hej, " + person1 + "!");
    console.log("Hej, " + person2 + "!");
    console.log("Hej, " + person3 + "!");
    console.log("Hej, " + person4 + "!");
}

console.log(greet("Dennis", "Emelie", "Seth", "Sixten"));

/*
***************************************
functions - return
***************************************
*/

// Tänk er att en funktion är som en maskin
// funktionen tar några inputs (argument)
// Dessa argument används sedan inuti funktionen på något sätt -
// Kanske matematiska beräkningar - kollar om värdet stämmer överens
// Sedan returnerar funktionen ett värde, någon sorts output
// Detta kallas för return a value - Returnerar ett värde
// Man kan alltså fånga upp värdet som funktionen ger
// Och vidare i sin kod använda värdet av den funktionen för att använda
// På något annat sätt, exempelvis i en annan funktion

function squared(x) {
    return x * x;
}

console.log("4 squared is: " + squared(4));

// return kan endast returnera ett värde per funktion
// Om man har två stycken rader med return, så kommer funktionen enbart att
// returnera den första return som den stöter på

var result = squared(10);
console.log(result);    

/*
***************************************
functions - muntligt test
***************************************
*/

// Test 1
// Förklara vad som händer
function test1(x, y) {
    return y - x;
}

console.log(test1(10, -40));

// Test 2
// Förklara vad som händer
function test2(x) {
    return x * 2;
    console.log(x);
    return x / 2;
}

console.log(test2(40));

/*
***************************************function isEven() {

}
functions - skriftligt test
***************************************
*/

// Write a function isEven() which takes a single numeric argument and 
// returns true if the number is even, and false otherwise

function isEven(num) {
    if(num % 2 === 0) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(isEven(123));

// Write a function kebabToSnake() which takes a single kebab-cased string
// Argument and returns the snake_cased version
// Basically replace "-" with "_"

function kebabToSnake(str) {
    // Everything inbetween / /g will get replaced - A pattern - A RegExp - Regular Expression
    var myString = str.replace(/-/g, "_"); // replace makes a new copy of that string which we store in a new variable
    return myString;
}

 kebabToSnake("Hej-jag-heter-Dennis");
 console.log(kebabToSnake("h-e-l-l-o-W-o-r-l--d")); // helloWorld

 /*
***************************************
JS Scope
***************************************
*/

function localScope() {
    var showScope = 31; 
    console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "I'm a global variable"; // Global variable === Accessible in the entire script
console.log(showScope);

var showScopeY = 99; // Global variable
function localScopeY() {
    showScopeY = 100; 
    console.log(showScopeY);
}

console.log(showScopeY); // Global showScopeY
localScopeY();
console.log(showScopeY); // Global showScopeY

/*
***************************************
JS Scope - muntligt test
***************************************
*/

// Förklara vad som händer
var num = 8; // 1. global variable
function doMath() { // 4. Script runs when invoked
    num += 1; // 5. num is now 10
    if(num % 5 === 0) { // 6. 10 / 5 === 2 === no modulo, Zero
        return true; // 7. returns true
    }
    else {
        return false;
    }
}

num += 1; // 2. num is now 9
doMath(); // 3. now the script runs

function hi() {
    var name = "Dennis"; // Local variable
    console.log(name);
}

hi();

function bye() {
    console.log(name); // Variable not defined
}

bye();

/*
***************************************
JS functions - higher order functions
Simple explanation: A function that can take another function as an argument
***************************************
*/

function sing() {
    console.log("Im singing in the rain!");
    console.log("Its funny on a sunny day!");
}

// setInterval(sing, 2500);

// var anon = setInterval(function() {
//     console.log("Im an anonymous function");
// }, 3000);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("mouseenter", function() {
    clearInterval(myTime);
});

document.querySelector("button").addEventListener("mouseleave", function() {
    myTime = setInterval(myTimer, 1000);
});
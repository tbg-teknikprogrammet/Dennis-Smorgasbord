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
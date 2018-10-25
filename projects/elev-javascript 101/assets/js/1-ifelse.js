var name = "Dennis"; // String
var age = 31; // Number
// == jämför men kollar inte datatyp
// === jämför och kollar datatyp

if(age < 18) {
    // Är påståendet true - kör koden mellan måsvingarna
    console.log("STOP! Du är " + age + " år");
} else if(age > 18 && age < 45) {
    console.log("SHUTDOWN! YOUR AGE IS TOO COOL 4 sCho_ol!");
} else {
    // Är påstående false - kör koden här mellan måsvingarna 
    console.log("Välkommen! Du är " + age + " år");
}


// Single line comment
/* Block line comment 
*************
    --- Guessing app --- 
*************
*/

// Deklarera en variabel
var secretNumber = 7;

// User input - Ta emot data
var userInput = Number(prompt("Gissa ett nummer mellan 1-10 d-_-b")); // Detta returneras som en sträng

while(userInput !== secretNumber) {
    if(userInput === secretNumber) {
        document.writeln("Grattis! Du har gissat rätt nummer! 10p <br>");
    } else if(userInput === 6 || userInput === 8) {
        document.writeln("DET BRÄNNS!");
    } else if(userInput > secretNumber) {
        document.writeln("Du gissade för högt! Testa igen...");
    } else {
        document.writeln("Du gissade för lågt! Gissa igen.");
    }
     var userInput = Number(prompt("Gissa ett nummer mellan 1-10 d-_-b")); // Detta returneras som en sträng
}
// Läsa av villkoret - Läser av user input


// var age = Number(prompt("Din ålder: "));

// if(age < 0) {
//     // Du är inte född ännu
//     document.writeln("Du är tyvärr inte född ännu...");
// } 
// else if(age % 2 !== 0) {
//     document.writeln("Du är udda!");
// }

// // Jämnt tal
// else if(age % 2 === 0) {
//     document.writeln("Du är jämn");
// }
// else {
//     document.writeln("Now then???");
// }

// var isSunny = false;

// if(isSunny === true) {
//     console.log("Put on some shorts today.");
// } else {
//     console.log("Put on some warm clothes today.");
// }

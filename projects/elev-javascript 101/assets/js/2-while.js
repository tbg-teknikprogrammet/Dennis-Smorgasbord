// // När använder vi while?
// // När vi inte vet hur många gånger koden behöver itereras

// // while(villkor) {
//     // kod
// // }

var text = "";
var i = 0;

// while(i <= 20) {
//     text += "Numret är: " + i + "<br>";
//     i += 2;
//     // if(i == 6) {
//     //     break;
//     // }
// }

// // THE DOM - DOM Manipulation
// // document.getElementById("output").innerHTML = text;

// // Övning
// // Skriv ut talen -19->19
// i = -19;
// while(i <= 19) {
//     text += "Numret är: " + i + "<br/>";
//     i++;
// }
// // document.getElementById("output").innerHTML = text;

// Skriv ut alla jämna tal mellan 10->40
// i = 10;
// while(i <= 40) {
//     if(i % 2 === 0) {
//         text += "Numret är: " + i + "<br/>";
//         
//     }i++;
// }
// document.getElementById("output").innerHTML = text;

// Skriv ut alla udda tal mellan 300->333 OBS! Använd modulo
// i = 300;
// while(i <= 333) {
//     if(i % 2 !== 0) {
//         text += "Numret är: " + i + "<br/>";
    
//     }i++;
// }
// document.getElementById("output").innerHTML = text;
// Skriv ut alla tal som är delbara med 3 och 5 mellan 5 och 50 OBS! Använd modulo
i = 5;
while(i <= 50) {
    if(i % 3 === 0 && i % 5 === 0) {
        text += " " + i;
    }
    i++;
}
document.getElementById("output").innerHTML = text;

// Gå tillbaka till if-else.js och modifiera Guessing app så att den ingår i en
// while-loop - Alltså , fråga användaren om att gissa talet så länge denne gissar fel

// Ask the user "Are we there yet"
// Keep asking again and again until they enter "yes" OR "yeah"
// Then, alert "Yay, we finally made it!"

// BONUS: A user can enter any string as long it contains "ye" in it
// Then, alert "Yay, we finally made it!"


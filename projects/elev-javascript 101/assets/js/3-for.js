// Jämförelse med while är att var enbart existerar i for-loopen
// for använder man när man vet hur många gånger loopen ska köras

for(var i = 0; i < 6; i++) {
    console.log(i);
}

var str = "Hello World!";
for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
}
//            0       1        2          3  4  5 
var myArr = ["CSS", "HTML", "JavaScript", 1, 5, 9];
var len = myArr.length;
for(var i = 0; i < len; i++) {
    console.log(myArr[i]);
}

// Muntlig uppgift 1 - Beskriv vad som händer
for(var i = 0; i < 16; i += 8) {
    console.log(i); // 0 8
}

// Muntlig uppgift 2 - Beskriv vad som händer
var str = "xwhiqenblwmlypo";
for(var i = 2; i < str.length; i += 3) {
    console.log(str[i]); // h e l l o      
}

// Print all numbers between -10 and 19
for(var i = -10; i <= 19; i++) {
    console.log(i);
}

// Print all even numbers between 10 and 40
for(var i = 10; i <= 40; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

// Print all odd numbers between 300 and 333
for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// Print all even numbers divisible by 5 AND 3 between 5 and 50
for(var i = 5; i <= 50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

// Genomgång: Nested for loops
// Square with 5*5 stars
var rows = 5;
var cols = 5;

for(var i = 0; i < rows; i++) {
    for(var j = 0; j < cols; j++) {
        document.write("* ");
    }
    document.write("<br/>");
}

// Downgoing pyramid from 10 rows to 1
for(var i = 10; i >= 0; i--) { 
    for(var j = 0; j <= i; j++) {
        document.write("* ");
    }

    document.write("<br>");
}

// Upgoing pyramid from 1 rows to 10
for(var i = 0; i <= 10; i++) {
    for(var j = 0; j <= i; j++) {
        document.write("* ");
    }
	document.write("<br/>");
}

// A christmas tree
var row = 5;
for(i = 1; i <= row; i++) {
    for(var j = 1; j <= (row - i); j++) {
        document.write("&nbsp;");
    }
    for(var k = 1; k <= i; k++) {
        document.write("* ");
    }
    document.write("<br/>");
}
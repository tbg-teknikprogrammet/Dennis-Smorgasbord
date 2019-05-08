// Suppose we wanted to model a single person; name, age and city
var person = ["Sid", 31, "EagleShieldBay"];

// Retrieve data from person

// hometown
console.log(person[2]);

// reverse the order of data
var person2 = [31, "Livelong", "Bill"];

// hometown
console.log(person2[2]);

// To model a person is the perfect use case for an object
var person = {
    name: "Bob", // key:value pair nyckel:värde-par
    age: 29,
    hometown: "Heresneezedduck"
};

// Note: Unlike arrays, objects have no order
// The key/value pairs are just floating around inside the object

// retrieve data from object with the dot notation
console.log("This person's name is: " + person.name);

console.log(person.age);

person.age = person.age + 1; // += 1;

console.log(person.age);

person.hometown = "Buy a harbour";

// Like arrays, there are a few methods of initializing objects

// make an empty object and assign key/value pair to is
var oddNums = {};
oddNums.int = 1;
oddNums.str = "one";
oddNums.isOdd = true;

// all at once
var dog = {
    name: "Doggo",
    breed: "Golden",
    age: 3,
    isFriendly: true
}

var cat = new Object();
cat.name = "Smilla";
cat.breed = "Skogskatt";
cat.age = 4;
cat.isLazy = true;

// objects can hold all sorts of data
var junkObject = {
    name: "Junko",
    age: 33,
    color: "Space grey",
    isEvil: true,
    friends: ["Daruk", "Revali", "Urbosa"],
    pet: {
        name: "Challe",
        species: "Gris",
        age: 9
    }
}

console.log(junkObject.pet.species);
console.log(junkObject.friends[2]);
console.log(junkObject.isEvil);

// 1. Create an array of posts (author, title, comments) where each index is an object

var posts = [
    {
        title: "Cats are loveable!",
        author: "Cat LuVr",
        comments: ["Awesome post man!", "OH, NO?!"]
    },
    {
        title: "Dogs own cats",
        author: "DoggoKing",
        comments: ["<3", "F* DOGGOKIND!"]
    }
];

// 2. Arrays and Objects is often used in conjuction with eachother
// array[index].objectProperty[index]
console.log(posts[1].comments[0]);

for(var i = 0; i < posts.length; i++) {
    console.log(posts[i].title, posts[i].author, posts[i].comments,);
}

var anObject = {};

// Which of the following are valid?
anObject._name = "Hedwig"; // valid
anObject.author = "Adam"; // valid

/*
***************************************
Create your own code - movieDB - Individual excerise
***************************************
*/

// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Use boolean values for hasWatched
// Iterate through the array with a forEach and print out
// something that looks like:

/* this is the output from console.log
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/

var movies = [
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Django",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Vaiana",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Shawshank Redemption",
        rating: 5,
        hasWatched: false
    }
];

movies.forEach(function(movie) {
    if(movie.hasWatched === true) {
        console.log("You have seen " + movie.title + " with the rating of: " + movie.rating);
    }
    else {
        console.log("You have not seen " + movie.title + " with the rating of: " + movie.rating);
    }
});

function movieDB(movie) {
    if(movie.hasWatched === true) {
        console.log("You have seen " + movie.title + " with the rating of: " + movie.rating);
    }
    else {
        console.log("You have not seen " + movie.title + " with the rating of: " + movie.rating);
    }
}

movies.forEach(movieDB);

console.log(movieDB);

movies.forEach(function(movie) {
    var result = "You have";
    if(movie.hasWatched === true) {
        result += "seen ";
    }
    else {
        result += "not seen ";
    }
    result += movie.title + " with the rating of " + movie.rating;
    console.log(result);
});

var count = {
    text: "This is some text",
    add: function(x, y) {
        return x + y;
    }
}

console.log(count.add(10, 15));

var persona = {
    friends: ["Lyza", "Myza", "Carl"],
    unfriended: function() {
        this.friends.pop();
    },
    addFriend: function(friend) {
        this.friends.push(friend);
    }
}
persona.unfriended();
persona.addFriend("Debbus");
console.log(persona.friends);

var comments = {};
comments.data = ["Good work!", "Awesome job!", "Keep it up!", "Im angry at you!"];

function print(arr) {
    arr.forEach(function(ele) {
        console.log(ele);
    });
}
print(comments.data);

comments.print = function() {
    this.data.forEach(function(ele) {
        console.log("+ " + ele)
    });
}

comments.print();

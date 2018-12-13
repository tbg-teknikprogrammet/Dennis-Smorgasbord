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

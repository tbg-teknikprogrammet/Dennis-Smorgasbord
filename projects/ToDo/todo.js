// Create a ToDo application

// create an empty array
var todos = [];

// Add an event listener on button
var btnActivate = document.getElementById("activate");
btnActivate.addEventListener("click", function() {
    var input = prompt("What would you like to do?");
// as long as the input is not "quit" the app should continue running
    while(input !== "quit") {
        if(input === "new") {
            newTodo();
        }

        else if (input === "list") {
            listTodo();
        }

        else if(input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
    if(input === "quit") {
        console.log(">>> Ok, you quit the app! :/ <<<");
    }
});

function newTodo() {
    var newTodo = prompt("What would you like to add?");
    todos.push(newTodo);
    console.log(newTodo + " was added to the list");
}

function listTodo() {
    todos.forEach(function(todo, i) {
        console.log("On index: " + i + ": " + todo);
    });
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("You have deleted index: " + index);
}
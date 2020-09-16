// variables
const inputEl = document.querySelector(".inputEl");
const addButton = document.querySelector(".addToDoBtn");
const todos = document.querySelector(".todos");
const todolist = []



// Delete Todo
function deleTodo() {
    const delButtons = document.querySelectorAll(".delBtn");
    delButtons.forEach(function (button, index) {
        console.log(button);
        button.onclick = function () {
            console.log("clicked");
            console.log(index);
            todolist.splice(index, 1)
            this.parentElement.style.display = "none";
            console.log(todolist);
        }
    })
}


// create Todo 
function createTodo() {
    todolist.push(inputEl.value);
    const singleTodo = document.createElement("p")
    const delbtn = document.createElement("button")
    delbtn.innerHTML = "x"
    delbtn.className = "btn btn-danger delBtn"

    todolist.forEach(function (todoitem, itemid) {
        singleTodo.innerText = todoitem;
        singleTodo.appendChild(delbtn)
        delbtn.className = `btn btn-danger delBtn ${itemid} `
    }
    );
    todos.appendChild(singleTodo); //inject each todo within the div of class todos.

    deleTodo()

}
// inputEl.onchange = createTodo
addButton.onclick = createTodo









//? CRUD - Create Read Update and Delete

// // TODO Delete Todo .
//TODO Update Todo .
//TODO Design .

//TODO Create persistant todos via localstorage
//TODO 
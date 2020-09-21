// variables
const inputEl = document.querySelector(".inputEl");
const addButton = document.querySelector(".addToDoBtn");
const todos = document.querySelector(".todos");


// * CRUD -create, read , delete

// createTodoStore
function createTodoStore() {
  let todostore = JSON.parse(localStorage.getItem("todos"));
  if (todostore === null) {
    localStorage.setItem("todos", JSON.stringify([]));
    return todostore;
  } else {
    return todostore;
  }
}
createTodoStore();

//* Delete Todo
function deleTodo() {
  const delButtons = document.querySelectorAll(".delBtn");
  let todostore = createTodoStore();
console.log(delButtons);
  delButtons.forEach(function (button, index) {
    button.onclick = function () {
      todostore.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todostore));
      console.log(todostore);
      displayTodo();
      location.reload();
    };
  });
}

//* create Todo
function createTodo() {
  let todostore = createTodoStore();
  todostore.push(inputEl.value);

  localStorage.setItem("todos", JSON.stringify(todostore));

  displayTodo();
  deleTodo();
}
//* displayTodo
function displayTodo() {
  let todostore = createTodoStore();

  todos.innerHTML = "";

  todostore.forEach(function (todoitem, itemid) {
    const singleTodo = document.createElement("p");
    const delbtn = document.createElement("button");
    delbtn.innerHTML = "delete";
    delbtn.className = "btn btn-danger delBtn";

    singleTodo.innerText = todoitem;
    singleTodo.appendChild(delbtn);
    delbtn.className = `btn btn-danger delBtn ${itemid} `;

    todos.appendChild(singleTodo); //inject each todo within the div of class todos.
  });
}
displayTodo();
deleTodo();
// inputEl.onchange = createTodo
addButton.onclick = createTodo;

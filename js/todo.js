const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function addTodoList(todoInputValue) {
  const listOfTodo = document.createElement("li");
  const contentOfTodo = document.createElement("span");
  todoList.appendChild(listOfTodo);
  listOfTodo.appendChild(contentOfTodo);
  contentOfTodo.innerText = todoInputValue;
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  addTodoList(todoInputValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);

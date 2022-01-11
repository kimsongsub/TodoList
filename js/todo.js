const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const LOCALSTORAGE_TODO_KEY = "Todos";
loadSavedTodos();

function deleteBtn(event) {
  const listOfTodo = event.target.parentElement;
  listOfTodo.remove();
  const liOfTodo = event.target.parentElement;
  const spanOfTodo = liOfTodo.querySelector("span").innerText;
  todos.splice(todos.indexOf(spanOfTodo), 1);
  // let ll = todos.filter((deleteElement) => {
  //   return spanOfTodo !== deleteElement;
  // });
  // todos = ll;
  saveTodo();
  liOfTodo.remove();
}

function printTodos(todoInputValue) {
  const liOfTodo = document.createElement("li");
  todoList.appendChild(liOfTodo);

  const spanOfTodo = document.createElement("span");
  liOfTodo.appendChild(spanOfTodo);
  spanOfTodo.innerText = todoInputValue;

  const buttonOfDeleteTodo = document.createElement("button");
  liOfTodo.appendChild(buttonOfDeleteTodo);
  buttonOfDeleteTodo.innerText = "✅";

  buttonOfDeleteTodo.addEventListener("click", deleteBtn);
}

function saveTodo() {
  localStorage.setItem(LOCALSTORAGE_TODO_KEY, JSON.stringify(todos));
}

const todos = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  todos.push(todoInputValue);
  saveTodo(todoInputValue);
  printTodos(todoInputValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);

function loadSavedTodos() {
  const savedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGE_TODO_KEY));
  if (savedTodos) {
    savedTodos.forEach(printTodos);
  }
}

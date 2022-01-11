const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

function deleteBtn(event) {
  const listOfTodo = event.target.parentElement;
  listOfTodo.remove();
}

function addTodoList(todoInputValue) {
  const listOfTodo = document.createElement("li");
  todoList.appendChild(listOfTodo);

  const contentOfTodo = document.createElement("span");
  listOfTodo.appendChild(contentOfTodo);
  contentOfTodo.innerText = todoInputValue;

  const todoDeleteBtn = document.createElement("button");
  listOfTodo.appendChild(todoDeleteBtn);
  todoDeleteBtn.innerText = "✅";

  todoDeleteBtn.addEventListener("click", deleteBtn);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoInputValue = todoInput.value;
  todoInput.value = "";
  addTodoList(todoInputValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);

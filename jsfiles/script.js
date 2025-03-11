const todoBtn = document.getElementById("todo-btn");
const todoContainer = document.getElementById("todo-container");
const boardBtn = document.getElementById("board-btn");
const mainContainer = document.getElementById("main-container");
const removeTask = document.getElementById("remove-task");
const TaskContainer = document.getElementsById("task-cont")

// addding a task to the todo section

todoBtn.addEventListener("click", () => {
  const task = prompt("Please Add Your Task");
  const todoItem = document.createElement("div");
  todoItem.classList.add("items");
  const para = document.createElement("p");
  para.classList.add("task");
  para.innerText = task;
  todoItem.appendChild(para);
  TaskContainer.append(todoItem);

  // adding delete button

  const removeTask = document.createElement("button");
  // console.log(removeTask);
  removeTask.innerHTML = `<i class="ri-close-line"></i>`;
  removeTask.id = "remove-task";
//   removeTask.classList.add("button");
  todoItem.append(removeTask);
  removeTask.addEventListener("click", () => {
    todoItem.remove();
  });

  // console.log(todoContainer);

  // adding an edit button using js

  const editTask = document.createElement("button");
  editTask.innerHTML = `<i class="ri-edit-2-line"></i>`;
  editTask.id = "edit-task";
//   editTask.classList.add("button");
  todoItem.append(editTask);
  editTask.addEventListener("click", () => {
    para.contentEditable = true;
    const doneBtn = document.createElement("button");
    doneBtn.id = "done-btn";
    doneBtn.innerHTML = `<i class="ri-check-double-line"></i>`;
    // doneBtn.classList.add("button");
    todoItem.append(doneBtn);
    doneBtn.addEventListener("click", () => {
      para.contentEditable = false;
      doneBtn.remove();
    });
  });
});

// Creating a new board  using a board button
boardBtn.addEventListener("click", () => {
  const newBoardName = prompt("add name of new board");
  const newBoard = document.createElement("div");
  newBoard.classList.add("containers");
  const boardName = document.createElement("h1");
  boardName.innerText = newBoardName;
  newBoard.appendChild(boardName);
  mainContainer.appendChild(newBoard);
  // console.log(mainContainer)

  // adding a remove button to remove board

  const removeBoard = document.createElement("button");
  // console.log(removeTask);
  removeBoard.innerText = "Delete Board";
  removeBoard.id = "remove-board";
  removeBoard.classList.add("button");
  newBoard.append(removeBoard);
  removeBoard.addEventListener("click", () => {
    newBoard.remove();
  });

  const addTask = document.createElement("button");
  addTask.innerText = "Add Task";
  addTask.id = "add-task";
  addTask.classList.add("button");
  newBoard.append(addTask);
  addTask.addEventListener("click", () => {
    const task = prompt("Please Add Your Task");
    const todoItem = document.createElement("div");
    todoItem.classList.add("items");
    const para = document.createElement("p");
    para.classList.add("task");
    para.innerText = task;
    newBoard.appendChild(para);
    todoContainer.appendChild(newBoard);
  });
});

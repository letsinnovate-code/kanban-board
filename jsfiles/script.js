const todoBtn = document.getElementById("todo-btn")
const todoContainer = document.getElementById("todo-container")
const boardBtn = document.getElementById("board-btn")
const mainContainer = document.getElementById("main-container")

todoBtn.addEventListener("click",()=>{
    const task = prompt('Please Add Your Task')
    const todoItem = document.createElement('div')
    todoItem.classList.add('items')
    const para = document.createElement('p')
    para.classList.add('task')
    para.innerText = task;
    todoItem.appendChild(para);
    todoContainer.appendChild(todoItem)
    console.log(todoContainer);    
    
})

boardBtn.addEventListener('click',()=>{
    const newBoardName = prompt("add name of new board")
    const newBoard = document.createElement('div')
    newBoard.classList.add("containers")
    const boardName = document.createElement('h1')
    boardName.innerText = newBoardName;
    newBoard.appendChild(boardName)
    mainContainer.appendChild(newBoard)
    console.log(mainContainer)


})
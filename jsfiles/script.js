const todoBtn = document.getElementById("todo-btn")
const todoContainer = document.getElementById("todo-container")
const boardBtn = document.getElementById("board-btn")
const mainContainer = document.getElementById("main-container")
const removeTask = document.getElementById("remove-task")

todoBtn.addEventListener("click",()=>{
    const task = prompt('Please Add Your Task')
    const todoItem = document.createElement('div')
    todoItem.classList.add('items')
    const para = document.createElement('p')
    para.classList.add('task')
    para.innerText = task;
    todoItem.appendChild(para);
    todoContainer.appendChild(todoItem)



    // adding delete button 



    const removeTask = document.createElement("button")
    // console.log(removeTask);
    removeTask.innerText="Delete"
    removeTask.setAttribute("id",removeTask)
    todoItem.append(removeTask)
    removeTask.addEventListener('click',()=>{
        todoItem.remove()
    })
    
    // console.log(todoContainer);    

    // adding an edit button using js
    
    const editTask = document.createElement("button")
    editTask.innerText= "Edit"
    editTask.setAttribute("id",editTask)
    todoItem.append(editTask)
    editTask.addEventListener('click',()=>{
        para.contentEditable=true
        const doneBtn = document.createElement("button")
        doneBtn.setAttribute('id',doneBtn)
        doneBtn.innerText = 'Done'
        todoItem.append(doneBtn)
        doneBtn.addEventListener('click',()=>{
            para.contentEditable=false
            doneBtn.remove()
        })
        
    })
    
})

boardBtn.addEventListener('click',()=>{
    const newBoardName = prompt("add name of new board")
    const newBoard = document.createElement('div')
    newBoard.classList.add("containers")
    const boardName = document.createElement('h1')
    boardName.innerText = newBoardName;
    newBoard.appendChild(boardName)
    mainContainer.appendChild(newBoard)
    // console.log(mainContainer)

    const removeTask = document.createElement("button")
    // console.log(removeTask);
    removeTask.innerText="Delete"
    removeTask.setAttribute("id",removeTask)
    newBoard.append(removeTask)
    removeTask.addEventListener('click',()=>{
        newBoard.remove()
    })


})



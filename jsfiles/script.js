const todoBtn = document.getElementById("todo-btn")
const todoContainer = document.getElementById("todo-container")

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
const addTask=document.getElementById("add_task")
const inputTask=document.getElementById("input_task")
const taskContainer=document.getElementById("task_container")  

addTask.addEventListener("click", function(){
    let task=document.createElement("div")
    task.classList.add("task")

    let li=document.createElement("li")
    li.innerText=`${inputTask.value}`
    task.appendChild(li)

    let checkButton=document.createElement("button")
    checkButton.innerHTML=`<i class="fa-solid fa-check"></i>`
    checkButton.classList.add("checkBox")

    task.appendChild(checkButton)

    let deleteButton=document.createElement("button")
    deleteButton.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
    deleteButton.classList.add("deleteTask")

    task.appendChild(deleteButton)

    if(inputTask.value===""){
        alert("Input a task")
    }else{
        taskContainer.appendChild(task)
    }
    inputTask.value=""

    checkButton.addEventListener("click", function(){
        checkButton.parentElement.style.textDecoration="line-through"
    })
    deleteButton.addEventListener("click", function(e){
        let target=e.target
        target.parentElement.parentElement.remove()

    })
    
    
})
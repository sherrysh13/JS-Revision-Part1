
let allEachTasks = document.querySelectorAll(".eachTask");
let addTaskBtn = document.querySelectorAll(".addTask")
let allTasksDiv = document.querySelectorAll(".tasks")
let column1 = document.querySelector(".column1")
let column2 = document.querySelector(".column2")
let column3 = document.querySelector(".column3")
let allColumns = document.querySelectorAll(".column")

const showTasks = (e) => {

    let parentColumn = e.target.closest(".column")
    let tasksDiv = parentColumn.querySelector(".tasks")

    let newTask = document.createElement("button")
    newTask.className = "eachTask px-5 py-1 text-3xl bg-cyan-300 text-black font-bold rounded-md";
    newTask.setAttribute("draggable", "true")
    newTask.innerText = `${Math.floor(Math.random() * 1000)}`

    tasksDiv.appendChild(newTask)

    newTask.addEventListener('dragstart', (e) => {
        newTask.style.opacity = 0.5;
        newTask.style.background = "palegreen";
        e.dataTransfer.setData("text", newTask.innerHTML)
    })

    newTask.addEventListener('dragend', () => {
        newTask.style.opacity = 1;
        newTask.style.background = "cyan";
        newTask.remove()
    })

}

const dragOverFnc = (e) => {
    e.preventDefault()
}

const dropFnc = (e) => {
    e.preventDefault()

    let droppedColumn = e.target.closest(".column")
    let tasksDiv = droppedColumn.querySelector(".tasks")

    let textData = e.dataTransfer.getData("text")
    
    let newTaskBtn = document.createElement("button")
    newTaskBtn.className = "eachTask px-5 py-1 text-3xl bg-cyan-300 text-black font-bold rounded-md";
    newTaskBtn.setAttribute("draggable", "true");
    newTaskBtn.innerText = textData;

    newTaskBtn.addEventListener('dragstart', (e) => {
        newTaskBtn.style.opacity = 0.5;
        newTaskBtn.style.background = "palegreen";
        e.dataTransfer.setData("text", newTaskBtn.innerHTML)
    })

    newTaskBtn.addEventListener('dragend', () => {
        newTaskBtn.style.opacity = 1;
        newTaskBtn.style.background = "cyan";
        newTaskBtn.remove()
    })

    tasksDiv.appendChild(newTaskBtn)
    
}

allColumns.forEach((eachColumn) => {
    eachColumn.addEventListener("dragover", dragOverFnc)
    eachColumn.addEventListener("drop", dropFnc)
})

addTaskBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", showTasks)
})


// allTasksDiv.forEach((eachTasksDiv) => {
//     if(!eachTasksDiv.textContent){
//         eachTasksDiv.innerHTML = `<h1 class="text-white">Empty List Now<h1/>`
//     }

// })
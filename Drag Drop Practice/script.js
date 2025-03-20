let task = document.getElementById("task");
let dropZone = document.getElementById("dropZone");

function sayHello(){
    // 1️⃣ **Drag Start** – Jab user kisi element ko pick kare
task.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "task");  // Data store karna zaroori hai
    task.style.opacity = "0.5";  // Visual feedback for dragging
    console.log("Dragging started!");
});

// 2️⃣ **Drag Over** – Drop hone ke liye preventDefault() lagana zaroori hai
dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();  // Iske bina drop event work nahi karega
    dropZone.style.backgroundColor = "lightgreen";
    console.log("Dragging over drop zone");
});

// 3️⃣ **Drag Enter** – Jab draggable element drop zone ke andar aaye
dropZone.addEventListener("dragenter", () => {
    console.log("Entered drop zone");
});

// 4️⃣ **Drag Leave** – Jab draggable element drop zone se bahar chala jaye
dropZone.addEventListener("dragleave", () => {
    dropZone.style.backgroundColor = "lightgray";
    console.log("Left drop zone");
});

// 5️⃣ **Drop** – Jab element drop ho jaye
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.appendChild(task);  // Task ko drop zone mein move kar do
    task.style.opacity = "1";  // Opacity reset kar do
    dropZone.style.backgroundColor = "lightgray";
    console.log("Task dropped successfully!");
});

// 6️⃣ **Drag End** – Jab dragging complete ho jaye
task.addEventListener("dragend", () => {
    task.style.opacity = "1";  // Opacity reset after drop
    console.log("Dragging ended!");
});

}

task.addEventListener('dragstart', ()=>{
    // e.dataTransfer.setData()
    task.style.opacity = 0.5
    console.log("drag started")
})

dropZone.addEventListener('dragover', (e)=>{
    e.preventDefault()
    dropZone.appendChild(task)
})

dropZone.addEventListener('dragenter', ()=>{
    console.log("entered")
    dropZone.style.background = "green"
})
dropZone.addEventListener('dragleave', ()=>{
    console.log("left")
    dropZone.style.background = "purple"
})

dropZone.addEventListener('drop', ()=>{
    console.log("dropped")

})

task.addEventListener('dragend', ()=>{
    task.style.opacity = 1;
    dropZone.style.background = "lightgray"
})
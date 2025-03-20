
const images = [
    {
        text: "Sunset Beautiful View",
        src: "https://images.unsplash.com/photo-1741557571786-e922da981949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" 
    },
    {
        text: "Newspaper Shop",
        src: "https://images.unsplash.com/photo-1741540420894-46bc55554fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
        text: "Desert View",
        src: "https://images.unsplash.com/photo-1741567348603-0bef4612bea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8" 
    },
    {
        text: "Winter Cotton",
        src: "https://images.unsplash.com/photo-1734899889244-37963ab66ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
        text: "Alien Plannet Entry",
        src: "https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" 
    },
    {
        text: "NewYork Street",
        src: "https://images.unsplash.com/photo-1734671223970-16adb03bedb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTF8fHxlbnwwfHx8fHw%3D" 
    },
]

let dots = document.querySelectorAll(".dots i")
let imgCon = document.querySelector(".imgCon")
let imgText = document.querySelector(".imgText")
let prevBtn = document.querySelector(".prev")
let nextBtn = document.querySelector(".next")
let currIndx = 0;
let interval;

const showData = (idx) => {
        imgText.innerHTML = `
            <img src=${images[idx].src} class="h-[90%] w-[100%] object-cover object-center opacity-[0.4] transition-opacity duration-300 ease-in-out">
            <h1 class="backdrop-blur-md font-bold absolute bottom-[40px] text-1xl py-1 w-[100%] text-center text-white opacity-0 transition-opacity duration-300 ease-in-out">${images[idx].text}</h1>
        `;
    setTimeout(() => {
        document.querySelector(".imgText img").style.opacity = "1";
        document.querySelector(".imgText h1").style.opacity = "1";
    }, 60);
}
showData(currIndx)

nextBtn.addEventListener("click", () => {
    currIndx++
    currIndx >= images.length ? currIndx = 0 : currIndx
    showData(currIndx)
    clearInterval(interval)
    timeIntervalFnc()
})

prevBtn.addEventListener("click", () => {
    currIndx--
    currIndx <= 0 ? currIndx = images.length - 1 : currIndx
    showData(currIndx)
    clearInterval(interval)
    timeIntervalFnc()
})

const timeIntervalFnc = () => {
    interval = setInterval(()=>{
        currIndx++;
        currIndx >= images.length ? currIndx = 0 : currIndx
        showData(currIndx)
    }, 3000)
}

dots.forEach((eachDot, id) => {
    eachDot.addEventListener('click', ()=> {
        clearInterval(interval)
        showData(id)
        timeIntervalFnc()
    })
})

window.onload = timeIntervalFnc;
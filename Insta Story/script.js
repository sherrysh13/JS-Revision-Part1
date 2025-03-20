console.log("first");

let img = document.querySelector("img");
let profileName = document.querySelector("h2");
let stories = document.querySelector(".stories");
let fullScreen = document.querySelector(".fullScreen");

let data = [
    {
        src: `https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D`,
        name: `Amiliya`
    },
    {
        src: `https://images.unsplash.com/photo-1738363436173-0b49cd20dea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D`,
        name: `Jeff`
    },
    {
        src: `https://plus.unsplash.com/premium_photo-1679064458881-76904cf6d1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhpamFiJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D`,
        name: `Ayesha`
    },
    {
        src: `https://images.unsplash.com/photo-1737357126863-c6e6b1fff33d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D`,
        name: `Monica`
    },
    {
        src: `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww`,
        name: `Charlie`
    },
    {
        src: `https://plus.unsplash.com/premium_photo-1672907031715-fa4214fc3803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D`,
        name: `Lewis`
    },
    {
        src: `https://images.unsplash.com/photo-1735220985243-93ea40496532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D`,
        name: `Alizebeth`
    },
    {
        src: `https://images.unsplash.com/photo-1733697184692-efd62759118e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8`,
        name: `Enola`
    },
    {
        src: `https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D`,
        name: `SherLock`
    },
    {
        src: `https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww`,
        name: `Smith`
    }
];

data.forEach((obj, index)=>{
    stories.innerHTML += `
        <div class="story">
            <img id=${index} src=${obj.src} alt="">
            <h2>${obj.name}</h2>
        </div>
    `;
});

stories.addEventListener("click", (dets)=>{
    fullScreen.style.backgroundImage = `url(${data[dets.target.id].src})`;
    fullScreen.style.display = "block";

    setTimeout(()=>{
        fullScreen.style.display = "none";
    },3000);
});



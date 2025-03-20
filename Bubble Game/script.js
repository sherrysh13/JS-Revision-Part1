
let lowerSide = document.querySelector(".lowerSide");
let hitBoxVal = document.querySelector("#hitBoxVal");
let timerVal = document.querySelector("#timerVal");
let scoreVal = document.querySelector("#scoreVal");
let bubble = document.querySelector(".bubble");

const makeBubbleFunc = () => {
    lowerSide.innerHTML = "";
    for(let i=1; i<=207; i++){
        lowerSide.innerHTML += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
}

let hitValue = "";
const createHitValFunc = () => {
    hitValue = Math.floor(Math.random()*10);
    hitBoxVal.textContent = hitValue;
}

let timer = 60;
const timerValFunc = () => {
    if(timer>0){
        timer--;
        timerVal.textContent = timer;
    }else{
        clearInterval(timerValFunc);
        lowerSide.innerHTML = `<h1> The Game is Over.
                                     <br>
                                     Your Final Score is ${score}
                                     </h1>`;                                     
    }
}
setInterval(timerValFunc, 1000);

let score = 0;
const increaseScore = () => {
    score += 10;
    scoreVal.textContent = score;
}

lowerSide.addEventListener('click', (dets) => {
    if(hitValue === Number(dets.target.textContent)){
        increaseScore();
        createHitValFunc();
        makeBubbleFunc();
    }
})


makeBubbleFunc();
createHitValFunc();
timerValFunc();

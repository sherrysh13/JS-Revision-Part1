
let buttons = document.querySelector('.buttons');
let button = document.querySelector('button');
let displayBox = document.querySelector('input');

let displayValue = "";

buttons.addEventListener('click', (dets) => {
    
    if(dets.target.textContent === "DEL"){
        displayValue = displayValue.substring(0, displayValue.length - 1);
        displayBox.value = displayValue;
    }
    else if(dets.target.textContent === "AC"){
        displayValue = '';
        displayBox.value = displayValue;
    }
    else if(dets.target.textContent === "="){
        displayValue = eval(displayValue);
        displayBox.value = displayValue;
    }
    else{
        displayValue += dets.target.textContent;
        displayBox.value = displayValue;
    }
})

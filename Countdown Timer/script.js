let ascVal = document.querySelector(".ascVal")
        let desVal = document.querySelector(".desVal")

        let spanMins = document.querySelector(".desVal .mins")
        let spanSecs = document.querySelector(".desVal .secs")
        
        let msg = document.querySelector(".msg")
        
        let ascStart = document.querySelector(".ascStart")
        let ascStop = document.querySelector(".ascStop")
        let ascReset = document.querySelector(".ascReset")

        let oneMin = document.querySelector(".oneMin")
        let twoMin = document.querySelector(".twoMin")
        let fiveMin = document.querySelector(".fiveMin")

        let timeInterval;

        ascStart.addEventListener("click", ()=> {

            let time = 0;
            ascStart.disabled = true;
            
            timeInterval = setInterval(()=>{
                let updatedTime = time < 10 ? `0${time}` : time;
                time++;
                ascVal.innerText = updatedTime;
            }, 1000)
        })
        ascStop.addEventListener("click", ()=>{
            clearInterval(timeInterval)
            ascStart.disabled = false;
        })
        ascReset.addEventListener("click", ()=>{
            ascVal.innerText = 0;
            ascStart.disabled = false;
        })

        oneMin.addEventListener("click", ()=> {

            msg.innerText = "";
            oneMin.style.backgroundColor = "skyblue"
            oneMin.style.color = "white"
            oneMin.disabled = true;
            twoMin.disabled = true;
            fiveMin.disabled = true;
            
            let time = 60;
            desVal.innerText = time;
            
            timeInterval = setInterval(()=>{
                if(time > 0){
                    time--;
                    desVal.innerText = time;
                }else{
                    clearInterval(timeInterval)
                    oneMin.disabled = false;
                    twoMin.disabled = false;
                    fiveMin.disabled = false;
                    msg.innerText = `Your Time is Over`
                    oneMin.style.backgroundColor = "white"
                    oneMin.style.color = "black"
                }
            }, 1000)
        })
        
        twoMin.addEventListener("click", ()=>{
            let mins = 1;
            let secs = 60;

            oneMin.disabled = true;
            twoMin.disabled = true;
            fiveMin.disabled = true;

            msg.innerText = "";
            twoMin.style.backgroundColor = "skyblue";
            twoMin.style.color = "white";

            timeInterval = setInterval(()=>{
                
                if(secs <= 0){
                    mins = mins - 1;
                    secs = 59;
                }else{
                    secs--;
                }
                formattedSecs = secs < 10 ? `0${secs}` : secs;
                desVal.innerHTML = `<span class="mins">0${mins}</span>:<span class="secs">${formattedSecs}</span>`

                if(mins <= 0 && secs <= 0){
                    oneMin.disabled = false;
                    twoMin.disabled = false;
                    fiveMin.disabled = false;
                    clearInterval(timeInterval)
                    msg.innerText = `Your Time is Over`
                    twoMin.style.backgroundColor = "white"
                    twoMin.style.color = "black"
                }
            }, 1000)

        })

        fiveMin.addEventListener("click", ()=>{
            let mins = 4;
            let secs = 60;

            oneMin.disabled = true;
            time.disabled = true;
            fiveMin.disabled = true;
            msg.innerText = "";
            fiveMin.style.backgroundColor = "skyblue";
            fiveMin.style.color = "white";

            timeInterval = setInterval(()=>{
                if(secs <= 0){
                    mins = mins - 1;
                    secs = 59;
                }else{
                    secs--;
                }
                formattedSecs = secs < 10 ? `0${secs}` : secs;
                desVal.innerHTML = `<span class="mins">0${mins}</span>:<span class="secs">${formattedSecs}</span>`

                if(mins <= 0 && secs <= 0){
                    oneMin.disabled = false;
                    twoMin.disabled = false;
                    fiveMin.disabled = false;
                    clearInterval(timeInterval)
                    msg.innerText = `Your Time is Over`
                    fiveMin.style.backgroundColor = "white"
                    fiveMin.style.color = "black"
                }
            }, 1000)

        })


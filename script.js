const miliSecond = document.querySelector(".mili");
const secT = document.querySelector(".sec");
const minT = document.querySelector(".min");
const hrT = document.querySelector(".hr");

let mili = 0;
let min = 0;
let hr = 0;
let sec = 0;

let timer = false;

function start(){
    timer = true;
    showTime();
}

function showTime(){

    if(timer){
        mili = mili+1;

        if(mili === 100){
            sec = sec+1;
            mili = 0;
        }
        if(sec === 60){
            min = min+1;
            sec = 0;
        }
        if(min === 60){
            hr = hr+1;
            min = 0;
        }

        let second = sec;
        let minute = min;
        // let minisecond = mili;
        let hours = hr;

        // if(miliSecond <10){
        //     miliSecond = "0"+miliSecond;
        // }

        if(second <10){
            second = "0"+second;
        }

        if(minute <10){
            minute = "0"+minute;
        }

        if(hr <10){
            hours = "0"+hours;
        }

        setTimeout("showTime()",10);
        miliSecond.textContent = mili;
        secT.textContent = second;
        minT.textContent = minute;
        hrT.textContent = hours;

    }
}


function stop (){
    timer = false;
}

function reset (){
    location.reload();
}
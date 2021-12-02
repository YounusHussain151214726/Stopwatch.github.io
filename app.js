var min=0;
var sec=0;
var msec=0;
var interval;
minute =document.getElementById("min");
second =document.getElementById("sec");
msecond =document.getElementById("msec");


function timer(){
    msec++;
    msecond.innerHTML=msec;
    if(msec >=100){
        sec++;

second.innerHTML=sec;
msec=0;
    }
    else if(sec >=60){
        min++;
   minute.innerHTML=min;
   sec=0;
   
    }
    }
    function start(){
        interval=setInterval(timer,10);

    }

    function stop(){
        clearInterval(interval)
    }
   function reset(){
    var min=0;
    var sec=0;
    var msec=0;
    minute.innerHTML=min;
    second.innerHTML=sec;
    msecond.innerHTML=msec;
    clearInterval(interval)
   }

interval=setInterval(timer,10);


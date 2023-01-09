// variables for buttons
const stopStartBtn=document.getElementById("stopstartBtn")
const resetBtn=document.getElementById("resetBtn")

// variables for time values
let seconds=0
let minutes=0
let hours=0

// variables for leading zero
let leadingSeconds=0
let leadingMinutes=0
let leadingHours=0

// variables for set interval and timerStatus
let timerInterval=null
let timerStatus="stopped"

// stopWatch function
function stopWatch(){
    seconds++
    if (seconds / 60 === 1){
        seconds=0
        minutes++
    }
    if (minutes / 60 === 1){
        minutes =0
        hours++
    }
    if(seconds < 9){
        leadingSeconds="0" + seconds.toString()
    }else{
        leadingSeconds=seconds
    }
    if(minutes < 9){
        leadingMinutes="0" + minutes.toString()
    }else{
        leadingMinutes=minutes
    }
    if(hours < 9){
        leadingHours="0" + hours.toString()
    }else{
        leadingHours=hours
    }
   
let displayTime=document.querySelector(".timer").innerText=leadingHours + ":" + leadingMinutes + ":" + leadingSeconds
}
// window.setInterval(stopWatch, 1000)
// 
stopStartBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval=window.setInterval(stopWatch, 1000)
        document.getElementById("stopstartBtn").innerHTML= `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus="started"
    }else{
        timerInterval=window.clearInterval(timerInterval)
        document.getElementById("stopstartBtn").innerHTML= `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus="stopped"
    }
})
resetBtn.addEventListener("click", function(){
    window.clearInterval(timerInterval)
    seconds=0
    minutes=0
    hours=0
    document.querySelector("timer").innerHTML="00:00:00"
})
countt=document.getElementById("count_el")
incrementBtn=document.getElementById("increment_btn")
decrementBtn=document.getElementById("decrement_btn")
saveNdsplyBtn=document.getElementById("saveNdsplybtn")
prvsEntries=document.getElementById("prvs_entries")
let count = 0
incrementBtn.addEventListener("click",increment)
decrementBtn.addEventListener("click",decrement)
saveNdsplyBtn.addEventListener("click",save)


function increment(){
    count++
    countt.textContent=count
}
function decrement(){
    count-=1
    countt.textContent=count
}
function save(){
    let saveCount=count + "-"
    prvsEntries.textContent +=saveCount
    count=0
    countt.textContent=0


}

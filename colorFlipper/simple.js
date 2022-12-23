const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
btn=document.querySelector(".btn")
color=document.querySelector(".color")
btn.addEventListener("click", function(){
    let randomNumber=getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor=colors[randomNumber]
    color.textContent=colors[randomNumber]

    // document.body.style.backgroundColor=colors[1]
    // color.textContent=colors[1]
})
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
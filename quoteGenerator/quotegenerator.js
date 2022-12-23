quoteEl=document.querySelector(".quote")
personEl=document.querySelector(".person")
nextBtn=document.querySelector("#new-quote")

const quotes=[{
    quote:`"A man who believe himself has no need to convince others"`,
    person:'Lao Tzu'
},{
    quote:`"Success is not final, failure is not fatal: it is the courage to continue that counts"`, 
    person:"Winston S. Churchill" 
},{
    quote:`"There are no facts, only interpretations"`, 
    person:'Friedrich Nietzsche' 
},{
    quote:`"The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently"`, 
    person:'Friedrich Nietzsche' 
},{
    quote: `"Of all evil I deem you capable: Therefore I want good from you. Verily, I have often laughed at the weaklings who thought themselves good because they had no claws" `, 
    person:"Fredrick Nietzsche"
},{
    quote:`"But it is the same with man as with the tree. The more he seeks to rise into the height and light, the more vigorously do his roots struggle earthword, downword, into the dark, the deep - into evil"`, 
    person:"Friedrich Nietzsche" 
},{
    quote:`"Be yourself; everyone else is already taken." `, 
    person:"Oscar Wilde" 
},{
    quote:`"When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it always." `, 
    person:"Mahatma Gandhi" 
},{
    quote:`"I have not failed. I've just found 10,000 ways that won't work." `, 
    person:"Thomas A. Edison" 
},{
    quote:`"Closed in a room, my imagination becomes the universe, and the rest of the world is missing out.”`,
    person: "Criss Jami"
},{
    quote:`"I was a man who thrived on solitude; without it I was like another man without food or water. Each day without solitude weakened me. I took no pride in my solitude; but I was dependent on it. The darkness of the
room was like sunlight to me.”`,
    person:"Charles Bukowski"
}
]
nextBtn.addEventListener("click", function(){
    let random=Math.floor(Math.random()*quotes.length)
    quoteEl.textContent=quotes[random].quote
    personEl.textContent=quotes[random].person
})

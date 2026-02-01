let clock = document.querySelector(".clock")
let cal = document.querySelector(".calender")
let plea = document.querySelector(".plea")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayName = document.querySelector(".day")


let timer = setInterval(()=>{
let date = new Date();

let hi = date.toLocaleTimeString();
let bye = date.toLocaleDateString();
let pleasure = date.getTimezoneOffset();

clock.innerHTML = `${hi}`;
cal.innerHTML = `${bye}`;
plea.innerHTML = `${pleasure}`
dayName.innerHTML = `${days[date.getDay()]}`
},1000);

let body = document.querySelector("body")

body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.fontFamily = "sans-serif"
body.style.backgroundColor = "black"


let main = document.querySelector("main")

body.style.fontSize = "2rem"

clock.style.fontSize = "6rem"
plea.style.fontSize = "2rem"
dayName.style.fontSize = "4rem"
cal.style.fontSize = "4rem"

main.style.display = "flex"
main.style.flexDirection = "column"
main.style.gap = "1rem"
main.style.justifyContent = "center"
main.style.alignItems = "center"
main.style.marginTop = "5rem"


let button = document.querySelectorAll("button")[0]
let button1 = document.querySelectorAll("button")[1]

button.style.borderRadius = "80px"
button.style.padding = "20px 40px"
button.style.backgroundColor = "violet"
body.style.color = "white"
button.style.border = "2px solid black"

body.style.letterSpacing = " 5px"
// setTimeout(()=> clearInterval(timer), 5000)
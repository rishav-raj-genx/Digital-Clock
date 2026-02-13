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

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let vrect = [];

for(let i = 0; i<2; i++){
    var r = 200;
    var x = Math.random() * (canvas.width - r * 2) + r;
    var y = Math.random() * (canvas.height - r * 2) + r;
    var dx = 2;
    var dy = 2;
    vrect.push(new Rectangle(x, y, dx, dy, r));
}

function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < vrect.length; i++){
        vrect[i].draw();
    }
}

animate();

function Rectangle(x, y, dx, dy, r){

    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = () => {
        c.beginPath();
        c.rect(this.x, this.y, 200, 200);
        c.strokeStyle = "white";
        c.lineWidth = 1;
        c.stroke();
        this.update();
    }

     this.update = () => {
        if (this.x + this.r > innerWidth || this.x  < 0) this.dx = -this.dx;
        if (this.y + this.r > innerHeight || this.y < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;
    }
}
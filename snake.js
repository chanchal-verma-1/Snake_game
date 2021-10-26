let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};
let d;
document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d!="RIGHT" ){
        d = "LEFT";
    }else if(key == 38 && d!="DOWN" ){
        d = "UP";
    }else if(key == 39 && d!="LEFT"){
        d = "RIGHT";
    }else if(key == 40 && d!="UP"){
        d = "DOWN";
    }
}
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let score = 0;

const cvs = document.getElementById("snake");
const ctx = cvs.getcontext("2d");

const box = 32;

 const ground = new Image();
 ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";


function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}
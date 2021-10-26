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
        left.play();
        d = "LEFT";
    }else if(key == 38 && d!="DOWN" ){
        up.play();
        d = "UP";
    }else if(key == 39 && d!="LEFT"){
        right.play();
        d = "RIGHT";
    }else if(key == 40 && d!="UP"){
        down.play();
        d = "DOWN";
    }
}
let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}
let score = 0;

function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

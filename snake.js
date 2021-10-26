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


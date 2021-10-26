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

function draw(){
    
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
    }
    
    ctx.drawImage(foodImg, food.x, food.y);
}
let game = setInterval(draw,100);



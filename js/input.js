function mousePressed() {
    
    for(var i = 0; i < buttonList.length; i++) {
        buttonList[i].clicked();
    }
    
    for(var i = 0; i < colButtonList.length; i++) {
        colButtonList[i].clicked();
    }
    
    for (var i = 0; i < colButtonList2.length; i++) {
        colButtonList2[i].clicked();
    }
}

function keyPressed() {

    // Keybinds for snake 1 (Player 1)
    if      (keyCode === UP_ARROW && snake.yspeed != 1) {
        snake.dir(0,-snake.speed);
    } 
    else if (keyCode === DOWN_ARROW && snake.yspeed != -1) {
        snake.dir(0,snake.speed);
    }
    else if (keyCode === RIGHT_ARROW && snake.xspeed != -1) {
        snake.dir(snake.speed,0);
    } 
    else if (keyCode === LEFT_ARROW && snake.xspeed != 1) {
        snake.dir(-snake.speed,0);
    }
    
    // Keybinds for snake 2 (Player 2)
    if      (key === 'w' && snake2.yspeed != 1) {
        snake2.dir(0,-snake2.speed);
    } 
    else if (key === 's' && snake2.yspeed != -1) {
        snake2.dir(0,snake2.speed);
    }
    else if (key === 'd' && snake2.xspeed != -1) {
        snake2.dir(snake2.speed,0);
    } 
    else if (key === 'a' && snake2.xspeed != 1) {
        snake2.dir(-snake2.speed,0);
    }
    
    
    // Pause the game
    if (key === 'p' && screenNum == 0) {
        if(isLooping()) {
            
            push();
            // show paused
            fill(230);
            stroke(0);
            text('Paused', 300, 300, 200, 200);
            
            noLoop();             
            pop();
        }
        else {
            loop();
        }
    }
    
    
    // Quit out of the game
    if (key === 'q') {
        screenNum = 1;
        newGame();
    }
}
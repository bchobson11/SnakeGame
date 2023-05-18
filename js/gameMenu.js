
//Screen Option 1
function gameMenuScreen() {
    
    push();
    
    // Creator Tag
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(18);
    strokeWeight(3);
    text('Created by:', 450, 528, 150, 60);
    text('Brandon Hobson', 450, 550, 150, 60);
    
    rectMode(CENTER);
    
    // Snake Game Title
    stroke(0);
    fill(255,75,75);
    textAlign(CENTER,CENTER);
    textSize(70);
    strokeWeight(5);
    text('Snake Game', 300, 180, 500, 225);
    
    
    // Single Player Button
    sPButton.show();
    

    //Two Player Button
    tPButton.show();
    

    
    print('Game Menu Screen');
    
    pop();
}

// Screen Option -1
function gameEndScreen() {
    
    push();
    
    rectMode(CENTER);
    
    textAlign(CENTER, CENTER);
    stroke(0);
    fill(255, 75, 75);
    textSize(50);
    text('YOU DIED!!!', 300, 150, 300, 250);
    text('Score:', 300, 220, 260, 250);
    
    fill(255);
    textSize(100);
    text(snake.total, 300, 320, 200, 100);
    
    replayButton.show();
    homeButton.show();
    
    print('Game End Screen');
    
    pop();
}

// Screen Option 2
function singlePlayerScreen() {
    
    push();
    
    rectMode(CENTER);
    
    // SinglePlayer Title
    stroke(0);
    fill(240);
    textAlign(CENTER,CENTER);
    textSize(60);
    strokeWeight(5);
    fill(255,75,75);
    text('Single Player', 300, 110, 500, 225); 
    
    playButton.show();
    homeButton2.show();
    
    textAlign(CENTER,CENTER);
    strokeWeight(4);
    textSize(30);
    text('Choose Color of Snake', 300, 300, 400, 150);
    
    for (var i = 0; i < colButtonList.length; i++) {
        colButtonList[i].show();
    }
    
    print('Single Player Screen');
    
    pop();
}

// Screen Option 3
function twoPlayerScreen() {
    
    push();
    
    rectMode(CENTER);

    stroke(0);
    line(0, 220, 600, 220);
    line(300, 220, 300, 600);
    
    // Two Player Title  
    stroke(0);
    textAlign(CENTER,CENTER);
    textSize(60);
    strokeWeight(5);
    fill(255,75,75);
    text('Two Player', 300, 40, 500, 225); 
    
    playButton2.show();
    homeButton3.show();
    
    strokeWeight(4);
    textSize(40);
    
    text('Choose Color', 300, 195, 300, 100);
    text('Player 2', 150, 250, 300, 200);
    text('Player 1', 450, 250, 300, 200);
    
    // display for each players snake
    rectMode(CENTER);
    rect(150, 300, scl*5, scl);
    rect(450, 300, scl*5, scl);
    
    // Shows all color buttons for each snake
    for (var i = 0; i < colButtonList2.length; i++) {
        colButtonList2[i].show();
    }
    
    print('Two Player Screen');
    
    pop();
}


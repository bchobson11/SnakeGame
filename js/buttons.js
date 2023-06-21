
//Button Attributes
var midPointx;
var midPointy;
var buttTitle;
var buttWidth;
var buttHeight;
var buttValue;
var buttCol;

var buttOutline;

//Text Attributes
var buttTitleCol;

var buttonList = [];

var colButtonList = [];
var colButtonList2 = [];


function button(title, titleSize, x, y, wid, ht, val, scrn) {
   
    this.buttTitle = title;
    this.buttCol = color(75, 75, 75);
    this.buttTitleCol = color(255);
    this.midPointx = x;
    this.midPointy = y;
    this.buttWidth = wid;
    this.buttHeight = ht;
    this.buttVal = val;
    
    buttonList.push(this);
    
    this.show = function() {
        
        push();
        
        rectMode(CENTER);
        
        this.rollover(mouseX,mouseY);

        // Button Color and Shape
        strokeWeight(4);
        fill(this.buttCol);
        rect(this.midPointx, this.midPointy, this.buttWidth, this.buttHeight);

        // Text Color and Shape
        fill(this.buttTitleCol);
        textSize(titleSize);
        text(this.buttTitle, this.midPointx, this.midPointy, this.buttWidth, this.buttHeight);

        pop();
    }
    this.clicked = function() {
        
        //print('im trying to click on a button');
        //Determines if a mouse click is within a button
        //Only works if it was drawn in rectMode(CENTER)
        if (scrn == screenNum) {
            
            if (mouseX >= x - this.buttWidth/2 && mouseX <= x + this.buttWidth/2 && 
               mouseY >= y - this.buttHeight/2 && mouseY <= y + this.buttHeight/2) {
                
                if (this.buttTitle == 'Replay' || this.buttTitle == 'Play') {                    
                    newGame();
                }
                
                if (this.buttTitle == 'Single Player') {
                    singlePlayer = true;
                    twoPlayer = false;
                }
                else if (this.buttTitle == 'Two Player') {
                    singlePlayer = false;
                    twoPlayer = true;
                }
                
                print(this.buttTitle + ' was pressed');
                screenNum = this.buttVal;                
            }
        }
    }
    
    this.rollover = function(mx, my) {
        
        if (scrn == screenNum) {
            
            if (mx >= x - this.buttWidth/2 && mx <= x +this.buttWidth/2 && 
                my >= y - this.buttHeight/2 && my <= y + this.buttHeight/2) {
                
                this.buttTitleCol = color(75, 75, 75);
                this.buttCol = color(230);
                
                document.body.style.cursor = "pointer";
                
                //print('Changed color of ' + this.buttTitle);
                //print('cursor changed to pointer');
            }
            else {
                
                this.buttTitleCol = color(230);
                this.buttCol = color(75, 75, 75);
                
                document.body.style.cursor = "default";
                        
                //print('Changed back color of ' + this.buttTitle);
                //print('cursor changed to default');
            }
        }
    }
}

function colButton(title, x, y, wid, ht, col, scrn, snk) {
    
    this.buttTitle = title;
    this.midPointx = x;
    this.midPointy = y;
    this.buttWidth = wid;
    this.buttHeight = ht;
    this.buttCol = col;
    this.buttOutline = col;
    
    if (scrn == 2) {
        colButtonList.push(this);
    }
    if (scrn == 3) {
        colButtonList2.push(this);
    }
    
    this.show = function() {
        
        push();
        
        rectMode(CENTER);
        
        this.rollover(mouseX,mouseY);

        // Button Color and Shape
        stroke(this.buttOutline);
        fill(this.buttCol);
        rect(this.midPointx, this.midPointy, this.buttWidth, this.buttHeight);

        pop();
    }
    this.clicked = function() {
        
        //print('im trying to click on a button');
        //Determines if a mouse click is within a button
        //Only works if it was drawn in rectMode(CENTER)
        if (scrn == screenNum) {
            
            for (var i = 0; i < colButtonList.length; i++) {
            
                if (mouseX >= x - this.buttWidth/2 && mouseX <= x + this.buttWidth/2 && 
                    mouseY >= y - this.buttHeight/2 && mouseY <= y + this.buttHeight/2) {

                    if (snk == 1) {
                        snakeColor = this.buttCol;
                        this.buttOutline = color(0);
                    }
                    if (snk == 2) {
                        snake2Color = this.buttCol;
                        this.buttOutline = color(0);
                    }           
                }
                else {
                    this.buttOutline = this.buttCol;
                }
            }
        }
    }
    
    this.rollover = function(mx, my) {
        
        if (scrn == screenNum) {
            
            if (mx >= x - this.buttWidth/2 && mx <= x +this.buttWidth/2 && 
                my >= y - this.buttHeight/2 && my <= y + this.buttHeight/2) {               
                
                document.body.style.cursor = "pointer";             
            }
            else { 
                document.body.style.cursor = "default";              
            }
        }
    }      
}

//Screen -1: Game End (single Player)
var replayButton;

//Screen 1
var sPButton; // Single Player Button
var tPButton; // two Player Button

//Screen 2
var playButton; // play Button

var tempCol;
var whiteBtn;
var blueBtn;
var greenBtn;
var yellowBtn;
var orangeBtn;
var redBtn;


function setUpButtons() {
    
    //testButton = new button('test', 23, 25,25, 50, 50, 0, 1);
    
    //buttons on game end screen (-1)
    replayButton = new button('Replay', 23, 300, 450, 150, 60, 0, -1);
    homeButton = new button('Home', 23, 300, 535, 150, 60, 1, -1);
    
    //buttons on menu screen (1)
    sPButton = new button('Single Player', 23, 300, 300, 200, 50, 2, 1);
    tPButton = new button('Two Player', 23, 300, 375, 200, 50, 3, 1);
    
    //buttons on single player screen(2)
    playButton = new button('Play', 23, 300, 200, 150, 75, 0, 2);
    homeButton2 = new button('Home', 23, 300, 535, 150, 75, 1, 2);
    
    //buttons on two player screen(3)
    playButton2 = new button('Play', 30, 300, 125, 140, 65, 0, 3);
    homeButton3 = new button('Home', 30, 60, 50, 100, 65, 1, 3);
    
    
    // COLOR BUTTONS
    
    var size = 30; // button sizes
    
    // Buttons on single player screen
    
    tempCol = color(255,0,0);
    redBtn = new colButton('red btn', 100, 400, size, size, tempCol, 2, 1);
    
    tempCol = color(255);
    whiteBtn = new colButton('white btn', 300, 400, size, size, tempCol, 2, 1);
    
    tempCol = color(0, 0, 255);
    blueBtn = new colButton('blue btn', 200, 400, size, size, tempCol, 2, 1);
    
    tempCol = color(255,255,51);
    yellowBtn = new colButton('yellow btn', 400, 400, size, size, tempCol, 2, 1);
    
    tempCol = color(0,255,0);
    greenBtn = new colButton('green btn', 500, 400, size, size, tempCol, 2, 1);
    
    
    // Buttons on 2 Player Screen
    
    // Snake 1
    tempCol = color(255,0,0);
    redBtn2 = new colButton('red btn', 350, 350, size, size, tempCol, 3, 1);
    
    tempCol = color(255);
    whiteBtn2 = new colButton('white btn', 400, 350, size, size, tempCol, 3, 1);
    
    tempCol = color(0, 0, 255);
    blueBtn2 = new colButton('blue btn', 450, 350, size, size, tempCol, 3, 1);
    
    tempCol = color(255,255,51);
    yellowBtn2 = new colButton('yellow btn', 500, 350, size, size, tempCol, 3, 1);
    
    tempCol = color(0,255,0);
    greenBtn2 = new colButton('green btn', 550, 350, size, size, tempCol, 3, 1);
    
    
    // Snake 2
    tempCol = color(255,0,0);
    redBtn3 = new colButton('red btn', 50, 350, size, size, tempCol, 3, 2);
    
    tempCol = color(255);
    whiteBtn3 = new colButton('white btn', 100, 350, size, size, tempCol, 3, 2);
    
    tempCol = color(0, 0, 255);
    blueBtn3 = new colButton('blue btn', 150, 350, size, size, tempCol, 3, 2);
    
    tempCol = color(255,255,51);
    yellowBtn3 = new colButton('yellow btn', 200, 350, size, size, tempCol, 3, 2);
    
    tempCol = color(0,255,0);
    greenBtn3 = new colButton('green btn', 250, 350, size, size, tempCol, 3, 2);    
    
    
}


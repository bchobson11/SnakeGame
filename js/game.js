// Game variables
var food;
var scl = 25;
var screenNum = 1;
var gameSpeed = 10; //range 5 -20

// snake 1 Variables
var snake;
var score;
var snakeColor;
var snakeOutline;

// snake 2 Variables
var snake2;
var score2;
var snake2Color;
var snake2Outline;

// Single Player or Multiplayer Variables
var singlePlayer = false;
var twoPlayer = false;

//var scrnW = window.innerWidth  - 70; // fullscreen ish
//var scrnH = window.innerHeight - 54; // fullscreen ish

var scrnW = 600;
var scrnH = 600;

var foodImg;

function preload() {
    var food = ['apple', 'banana', 'bread', 'cheese', 'chicken', 'fries', 'hamburger', 'steak'];
    foodImg = food.map(food => {
        return loadImage(`./assets/food/${food}.png`);
    })
}

function setup() {

    
    snakeColor = color(0, 0, 255);
    snakeOutline = color(0);
    
    snake2Color = color(255, 0, 0);
    snake2Outline = color(0);
    
    var canvas = createCanvas(scrnW, scrnH);
    canvas.parent('sketch-holder');
    newGame();
    setUpButtons();
    angleMode(DEGREES);
    
    strokeWeight(4);
    stroke(0);
    push();
}

function draw() {
    
    push();
    
    //Background and Outline
    background(180);
    stroke(0);
    strokeWeight(5);
    noFill();
    rect(0, 0, scrnW, scrnH);
    
    pop();
       
    // Handles the Screen Showing
    
    if      (screenNum == -1) {
        gameEndScreen();
    }
    else if (screenNum == 0) {
        if (singlePlayer) {
            gameRun();
        }
        else if(twoPlayer) {
            gameRun2();
        }
    }
    else if (screenNum == 1) {
        gameMenuScreen();
    }
    else if (screenNum == 2) {
        singlePlayerScreen();    
    }
    else if (screenNum == 3) {
        twoPlayerScreen();
    }
    else if (screenNum == 4) {
        option();
    }
    
}

function newGame() {

    snake = new Snake();
    snake.color = snakeColor;
    snake.outline = snakeOutline;
    snake2 = null;
    pickLocation();
    frameRate(gameSpeed);
    
    if(twoPlayer) {
        snake2 = new Snake();
        snake2.color = snake2Color;
        snake2.outline = snake2Outline;
    }
}

//Single Player Game
function gameRun() {
    
    snake.update();
    snakeScore();
    snake.death();
    snake.show();
    
    if(snake.eat(food)) {
        pickLocation();
    }

    push();
    ellipseMode(CORNER);
    

    // draw food

    // basic circle with random color
    // stroke(0);
    // strokeWeight(2);
    // fill(fr, fg, fb);
    // ellipse(food.x, food.y, scl);

    image(newFood, food.x, food.y, scl, scl);

    
    pop();
    
    // print('Single Player Game Running');
}
    
    // 2 Player
    function gameRun2() {
        
        snake.update();
        snake2.update();
        snake.death();
        snake2.death();
        snake.show();
        snake2.show() 
        snakeScore2();      

        if(snake.eat(food) || snake2.eat(food)) {
            pickLocation();
        }

        push();
        ellipseMode(CORNER);

        // draw food 
        // stroke(0);
        // strokeWeight(2);
        // fill(fr, fg, fb);
        // ellipse(food.x, food.y, scl);

        // food image
        image(newFood, food.x, food.y, scl, scl);

        pop();  

        // print('2 Player Game Running');
    }

//food color variables
var fr, fb, fg;
var newFood;
function pickLocation() {

    var cols = floor(width/scl);
    var rows = floor(height/scl);

    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
    
    // fr = 155 + random(100);
    // fg = 155 + random(100);
    // fb = 155 + random(100);

    newFood = random(foodImg);
}

// Single Player Score
function snakeScore() {
    
    push();
    
    score = snake.total;
    // noStroke();
    // fill(255,0,100);
    // textAlign(CENTER, CENTER);
    // textSize(30);
    //rectMode(CENTER);
    // text(score, 300, 50, 50, 30);

    document.getElementById('snake-score').innerHTML = snake.total;
  
    
    pop();
}

// 2 Player Score
function snakeScore2() {
    
    push();
    
    score = snake.total;
    score2 = snake2.total;
    
    // noStroke();
    // fill(255, 0, 100);
    // textAlign(CENTER, CENTER);
    // textSize(30);
    // rectMode(CENTER);
    
    // text(score, 200, 50, 50, 30);
    // text(score2, 200, 50, 50, 30);
    

    document.getElementById('snake-score').innerHTML = snake.total;
    document.getElementById('snake2-score').innerHTML = snake2.total;
    pop();
}


class Snake {
    constructor() {

        this.color = 0;
        this.outline = 0;
        this.speed = 1;
        this.x = 300;
        this.y = 300;
        this.xspeed = 0;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];

        this.death = function () {

            // death by running into own tail
            for (var i = 0; i < this.tail.length; i++) {
                var pos = this.tail[i];
                var d = dist(this.x, this.y, pos.x, pos.y);
                if (d < 1) {
                    screenNum = -1;
                    addScoreToTable();
                }
            }

            // death by hitting edges
            if (this.x < 0 || this.x >= scrnW || this.y < 0 || this.y >= scrnH) {
                
                screenNum = -1;
                addScoreToTable();
            }
        };

        this.update = function () {

            if (this.total === this.tail.length) {
                for (var i = 0; i < this.tail.length - 1; i++) {
                    this.tail[i] = this.tail[i + 1];
                }
            }

            this.tail[this.total - 1] = createVector(this.x, this.y);

            this.x = this.x + this.xspeed * scl;
            this.y = this.y + this.yspeed * scl;

        };

        this.dir = function (x, y) {

            this.xspeed = x;
            this.yspeed = y;
        };

        // draws the snake
        this.show = function () {

            push();

            strokeWeight(3);
            stroke(this.outline);
            fill(this.color);

            //rotated sqaure method
            if (this.tail.length != 0) {

                push();
                rectMode(CENTER);

                if (this.tail.length == 1) {

                    if (this.y < this.tail[0].y) {
                        translate(this.tail[0].x + scl / 2, this.tail[0].y);
                    }
                    else if (this.y > this.tail[0].y) {
                        translate(this.tail[0].x + scl / 2, this.tail[0].y + scl);
                    }
                    else if (this.x > this.tail[0].x) {
                        translate(this.tail[0].x + scl, this.tail[0].y + scl / 2);
                    }
                    else if (this.x < this.tail[0].x) {
                        translate(this.tail[0].x, this.tail[0].y + scl / 2);
                    }
                }

                else if (this.tail.length > 1) {

                    if (this.tail[1].y < this.tail[0].y) {
                        translate(this.tail[0].x + scl / 2, this.tail[0].y);
                    }
                    else if (this.tail[1].y > this.tail[0].y) {
                        translate(this.tail[0].x + scl / 2, this.tail[0].y + scl);
                    }
                    else if (this.tail[1].x > this.tail[0].x) {
                        translate(this.tail[0].x + scl, this.tail[0].y + scl / 2);
                    }
                    else if (this.tail[1].x < this.tail[0].x) {
                        translate(this.tail[0].x, this.tail[0].y + scl / 2);
                    }
                }

                rotate(45);
                rect(0, 0, scl * .83, scl * .83, 5);
                pop();
            }

            //draw body
            for (var i = this.tail.length - 1; i > 0; i--) {
                rect(this.tail[i].x, this.tail[i].y, scl, scl, 5);
            }

            // draws the head
            rect(this.x, this.y, scl, scl, 5, 5, 5, 5);

            //draw the eyes   
            // draw eyes when snake going up or down
            if (this.yspeed != 0) {

                //Outside Eye
                stroke(255);
                circle(this.x + (scl / 3), this.y + (scl / 2), 5);
                circle(this.x + (2 * scl / 3), this.y + (scl / 2), 5);

                //Inside Eye
                stroke(0);
                circle(this.x + (scl / 3), this.y + (scl / 2), 1);
                circle(this.x + (2 * scl / 3), this.y + (scl / 2), 1);
            }


            // draw eyes when snake going left to right
            else {

                //Outside eye
                stroke(255);
                circle(this.x + (scl / 2), this.y + (scl / 3), 5);
                circle(this.x + (scl / 2), this.y + (2 * scl / 3), 5);

                //Inside eye
                stroke(0);
                circle(this.x + (scl / 2), this.y + (scl / 3), 1);
                circle(this.x + (scl / 2), this.y + (2 * scl / 3), 1);
            }

            pop();
        };

        this.eat = function (pos) {

            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total++;
                return true;
            } else {
                return false;
            }
        };
    }
}

function addScoreToTable() {
    let name = document.getElementById('nickname').value;

    let holder = document.getElementById('scores');
    let card = document.createElement('div');
    card.className = 'card score-card';
    // card.style.setProperty('background', 'rgba(var(--theme-color), 0.8');

    let cardName = document.createElement('h2');
    let node = document.createTextNode(name);
    cardName.appendChild(node);
    cardName.className = 'card-name';

    let cardScore = document.createElement('h2');
    node = document.createTextNode(snake.total);
    cardScore.appendChild(node);
    cardScore.className = 'card-score';

    card.appendChild(cardName);
    card.appendChild(cardScore);

    holder.appendChild(card);
}
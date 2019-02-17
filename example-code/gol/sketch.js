let current = []
const cellsize = 10;
const windowWidth = 600;
const windowHeight = 400;
const columns = Math.floor(windowWidth / cellsize)
const rows = Math.floor(windowHeight / cellsize)
let startstop, clear;
let running = 1

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(0);
    strokeWeight(1);
    noStroke()
    frameRate(10)

    startstop = createButton('start/stop')
    startstop.mousePressed(startStop)

    for (row = 0; row < rows; row++) {
        let temp = []
        for (col = 0; col < columns; col++) {
            if (random() < 0.1) {
                temp.push(1)
            } else {
                temp.push(0);
            }
        }
        current.push(temp)
    }
}

function draw() {
    display()
    if (running) generate();


}

function display() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (current[row][col] == 0) {
                fill(255);
            } else {
                fill(0);
            }
            rect(col * cellsize, row * cellsize, cellsize, cellsize)
        }
    }
}

function generate() {
    let nextGen = []
    nextGen.push(Array(columns).fill(0));

    for (let row = 1; row < rows - 1; row++) {
        let tempRow = [0]
        for (let col = 1; col < columns - 1; col++) {

            let neighbors = 0;

            for (i = -1; i <= 1; i++) {
                for (j = -1; j <= 1; j++) {
                    neighbors += current[row + i][col + j]
                }
            }

            neighbors -= current[row][col]


            let nextState;

            if (current[row][col] == 1 && neighbors < 2) {
                nextState = 0;
            } else if (current[row][col] == 1 && neighbors > 3) {
                nextState = 0;
            } else if (current[row][col] == 0 && neighbors == 3) {
                nextState = 1;
            } else {
                nextState = current[row][col];
            }
            tempRow.push(nextState);
        }
        tempRow.push(0);
        nextGen.push(tempRow);
    }
    nextGen.push(Array(columns).fill(0))
    current = nextGen

}

function mousePressed() {
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        let xLoc = floor(mouseX / cellsize)
        let yLoc = floor(mouseY / cellsize)
        current[yLoc][xLoc] = (current[yLoc][xLoc]+1) % 2
    }
    
}

function startStop() {
    running = (running + 1) % 2
}
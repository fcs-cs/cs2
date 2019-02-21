let CA = [];
const screenWidth = 800;
const screenHeight = 400;
const numCells = 300;
const cellSize = (screenWidth - 1) / numCells
let ruleNum, startStop, reset,pixelsize
let running = 1;

let ruleset;

function setup() {
    createCanvas(screenWidth, screenHeight);
    noStroke();
    fill(0);

    let gen0 = new Array(numCells).fill(0);
    gen0[floor(screenWidth / cellSize / 2)] = 1
    CA.push(gen0)



    startStop = createButton('start/stop')
    startStop.mousePressed(() => {
        running = (running + 1) % 2
        console.log(running)
    })

    reset = createButton('reset')
    reset.mousePressed(tidy)

    ruleNum = createInput(90)
    getRuleSet()
    ruleNum.changed(getRuleSet)
}

function draw() {
    if (running) {
        display()
        generate();
        if (CA.length * cellSize > windowHeight) CA.shift()
    }
}

function display() {
    background(255);

    for (let i = 0; i < CA.length; i++) {
        for (let j = 0; j < numCells; j++) {
            if (CA[i][j] == 1) {
                rect(j * cellSize, i * cellSize, cellSize, cellSize);
            }
        }
    }
}

function generate() {
    const current = CA[CA.length - 1];
    let nextGen = new Array(numCells).fill(0);

    for (let i = 1; i < numCells - 1; i++) {
        nextGen[i] = applyRules(current[i - 1], current[i], current[i + 1])
    }
    CA.push(nextGen)

}

function applyRules(a, b, c) {

    if (a == 1 && b == 1 && c == 1) return ruleset[0]
    else if (a == 1 && b == 1 && c == 0) return ruleset[1]
    else if (a == 1 && b == 0 && c == 1) return ruleset[2]
    else if (a == 1 && b == 0 && c == 0) return ruleset[3]
    else if (a == 0 && b == 1 && c == 1) return ruleset[4]
    else if (a == 0 && b == 1 && c == 0) return ruleset[5]
    else if (a == 0 && b == 0 && c == 1) return ruleset[6]
    else if (a == 0 && b == 0 && c == 0) return ruleset[7]
    else return null
}

function trim() {
    if (CA.length * cellSize > windowHeight) CA.shift()
}

function tidy(){
    CA = [];
    let gen0 = new Array(numCells).fill(0);
    gen0[floor(screenWidth / cellSize / 2)] = 1
    CA.push(gen0)
}

function getRuleSet(){ 
    tidy();

    const temp = parseInt(ruleNum.value()).toString(2)
    ruleset = [];
    for(let i = 0; i < temp.length; i++){
        ruleset.push(parseInt(temp[i]))
    }
    while(ruleset.length < 8){
        ruleset.unshift(0)
    }
    console.log(ruleset)

}
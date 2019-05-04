//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let walkers = []
let aggregated = []
let boundingRadius;

function setup() {
    ellipseMode(RADIUS)
    createCanvas(1200, 800);

    // initialize seed
    let seed = new Walker(width / 2, height / 2);
    seed.stuck = true;
    aggregated.push(seed);
}

function draw() {


    if (boundingRadius > height / 2) { //exit
        noLoop();
        saveCanvas('DFA', 'png')
    } 
    
    boundingRadius = getBoundingRadius(aggregated);

    //add walkers
    while (walkers.length < max(boundingRadius / 2, 5)) {
        walkers.push(spawnPointAtRadius(boundingRadius + 20));
    }

    //move walkers and check adhesion
    for (let i = 0; i < walkers.length; i++) {
        walkers[i].move();

        for (let j = 0; j < aggregated.length; j++) {
            walkers[i].checkAdhesion(aggregated[j])
        }
    }

    //filter stuck from walkers
    let filtered = walkers.filter(w => w.stuck);
    walkers = walkers.filter(w => !w.stuck && dist(w.x, w.y, width / 2, height / 2) < boundingRadius * 1.1 + 20);




    //Add filtered to aggregated and increase r of each
    //in aggregated by 2/num-of-aggregated-cells
    for (let f of filtered) {
        aggregated.push(f);
        for (a of aggregated) {
            a.r += 2 / aggregated.length
        }
    }

    background(0);
    walkers.forEach(w => w.show());
    aggregated.forEach(a => a.show());

}

function getBoundingRadius(_array) {
    let rad = 1;
    for (let elem of _array) {
        let d = dist(width / 2, height / 2, elem.x, elem.y);
        if (d > rad) {
            rad = d;
        }
    }
    return rad
}

function spawnPointAtRadius(r) {
    const theta = random(TWO_PI)
    const x = r * cos(theta) + width / 2;
    const y = r * sin(theta) + height / 2;

    return new Walker(x, y);
}
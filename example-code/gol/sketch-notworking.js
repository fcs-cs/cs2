//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let current = []
let cellsize, rows, columns;

function setup() {
    createCanvas(600, 400);
    cellsize = 10;
    rows = floor((height - 1) / cellsize)
    columns = floor((width - 1) / cellsize)
    current = Array(columns).fill(0);
    for (let i = 0; i < current.length; i++) {
        current[i] = Array(rows).fill(0).map(() => round(random(0, 0.9)))
    }
}


function draw() {
    display();
    generate();
    //noLoop()
}

function display() {
    background(255);
    stroke(0)
    strokeWeight(1)

    for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
            if (current[col][row] == 0) {
                fill(255);
            } else {
                fill(0);
            }
            rect(col * cellsize, row * cellsize, cellsize, cellsize)
        }
    }
}

function generate() {
    let nextGen = new Array(columns).fill(new Array(rows).fill(0));
    for (let col = 1; col < columns - 1; col++) {
        for (let row = 1; row < rows - 1; row++) {
            // Add up all the states in a 3x3 surrounding grid
            let neighbors = 0;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    neighbors += current[col + i][row + j];
                }
            }

            // A little trick to subtract the current cell's state since
            // we added it in the above loop
            neighbors -= current[col][row];

            // Rules of Life
            if ((current[row][col] == 1) && (neighbors < 2)) nextGen[row][col] = 0; // Loneliness
            else if ((current[row][col] == 1) && (neighbors > 3)) nextGen[row][col] = 0; // Overpopulation
            else if ((current[row][col] === 0) && (neighbors == 3)) nextGen[row][col] = 1; // Reproduction
            else nextGen[row][col] = current[row][col]; // Stasis
        }
    }


		current = nextGen;
}



    // let nextGen = new Array(rows).fill(new Array(columns).fill(0));
    // for (let x = 1; x < rows - 1; x++) {
    //     for (let y = 1; y < columns - 1; y++) {

    //         let neighbors = -current[x][y];

    //         for (let i = -1; i <= 1; i++) {
    //             for (let j = -1; j <= 1; j++) {
    //                 neighbors += current[x + i][y + j]
    //             }
    //         }

    //         if (current[x][y] == 1 && neighbors < 2) nextGen[x][y] = 0
    //         else if (current[x][y] == 1 && neighbors > 3) nextGen[x][y] = 0
    //         else if (current[x][y] == 0 && neighbors == 3) nextGen[x][y] = 1;
    //         else nextGen[x][y] == current[x][y]
    //     }
    // }

    // current = nextGen
//}
// for (let x = 1; x < rows - 1; x++) {
//     for (let y = 1; y < columns - 1; y++) {
//         // Add up all the states in a 3x3 surrounding grid
//         let neighbors = 0;

//         for (let i = -1; i <= 1; i++) {
//             for (let j = -1; j <= 1; j++) {
//                 neighbors += current[x + i][y + j];
//             }
//         }

//         // A little trick to subtract the current cell's state since
//         // we added it in the above loop
//         neighbors -= current[x][y];

//         // Rules of Life
//         if ((current[x][y] == 1) && (neighbors < 2)) nextGen[x][y] = 0; // Loneliness
//         else if ((current[x][y] == 1) && (neighbors > 3)) nextGen[x][y] = 0; // Overpopulation
//         else if ((current[x][y] === 0) && (neighbors == 3)) nextGen[x][y] = 1; // Reproduction
//         else nextGen[x][y] = current[x][y]; // Stasis
//     }
// }

// current = nextGen
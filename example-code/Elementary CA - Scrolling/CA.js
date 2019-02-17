// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com
// Wolfram Cellular Automata

// CA object prototype

class CA {
    constructor(ruleset, size) {
        this.w = size;
        this.cells = new Array(width / this.w).fill(0);
        this.cells[this.cells.length / 2] = 1;
        this.generation = 0;
        this.ruleset = ruleset;
        this.hist = [];
        this.hist.push(this.cells);
    }

    // The process of creating the new generation
    generate() {
        // First we create an empty array filled with 0s for the new values
        let nextgen = Array(this.cells.length).fill(0);

        for (let i = 1; i < this.cells.length - 1; i++) {
            let left = this.cells[i - 1]; // Left neighbor state
            let me = this.cells[i]; // Current state
            let right = this.cells[i + 1]; // Right neighbor state
            nextgen[i] = this.rules(left, me, right); // Compute next generation state based on ruleset
        }
        // The current generation is the new generation
        this.cells = nextgen;
        this.hist.push(this.cells);
        this.generation++;
    }

    // This is the easy part, just draw the cells
    display() {
        for(let i = 0; i < this.hist.length; i++){
            for (let j = 0; j < this.hist[i].hist; j++) {
                this.hist[i][j] == 1 ? fill(0) : fill(255);
                noStroke();
                rect(i * this.w, j * this.w, this.w, this.w);
            }
        }
    }


    // Implementing the Wolfram rules
    // Could be improved and made more concise, but here we can explicitly see what is going on for each case
    rules(a, b, c) {
        if (a == 1 && b == 1 && c == 1) return this.ruleset[0];
        if (a == 1 && b == 1 && c === 0) return this.ruleset[1];
        if (a == 1 && b === 0 && c == 1) return this.ruleset[2];
        if (a == 1 && b === 0 && c === 0) return this.ruleset[3];
        if (a === 0 && b == 1 && c == 1) return this.ruleset[4];
        if (a === 0 && b == 1 && c === 0) return this.ruleset[5];
        if (a === 0 && b === 0 && c == 1) return this.ruleset[6];
        if (a === 0 && b === 0 && c === 0) return this.ruleset[7];
        return 0;
    }
}
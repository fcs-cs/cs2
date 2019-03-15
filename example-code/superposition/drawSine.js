class drawSine {
    constructor(_hz, _amp, _phase) {
        this.freq = _hz;
        this.amp = _amp;
        this.phase = _phase;
        this.yVals = []

        for(let t = 0; t < width; t++){
            let mapt = map(t,0,width,0,TWO_PI);
            const yVal = this.amp * sin(this.freq * mapt + this.phase);
            this.yVals.push(yVal);
        }
    }

    display(x, y) {
        push();
        noFill();
        translate(x, y)
        
        stroke(200);
        strokeWeight(1)
        line(0,0,width,0)
        stroke(0)
        strokeWeight(2)

        for (let i = 0; i < width - (x+1); i++) {
            line(i,this.yVals[i],i+1,this.yVals[i+1])
        }
        pop();
    }
}

class agrWave {
    constructor(_sineArray){
        this.sineArray = _sineArray
        this.sumOfSines = new Array(width).fill(0);

        this.normalizedAmplitude = 0;
        for(let wave of this.sineArray){
            this.normalizedAmplitude += wave.amp
        }
        this.normalizedAmplitude = this.normalizedAmplitude/(this.sineArray.length*2)

        for(let i = 0; i< this.sineArray.length; i++){
            for(let j = 0; j< width; j++){
                this.sumOfSines[j] += this.sineArray[i].yVals[j]
            }
        }

        
    }

    display(x,y){
        push()
        translate(x,y);
        stroke(200);
        line(0,0,width,0)

        stroke(0);
        strokeWeight(2);
        noFill();

        for(let t = 0; t < this.sumOfSines.length - 1; t++){
            line(t,this.sumOfSines[t],t+1,this.sumOfSines[t+1])
        }
        pop();

    }
}
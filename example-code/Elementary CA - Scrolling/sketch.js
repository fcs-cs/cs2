function setup() {
  createCanvas(400, 200);
  background(255);
  ca = new CA(ruleFrom(90),10);
  createP("Ruleset: "+parseInt(ca.ruleset.join(""),2));
}

function draw() {
  ca.display();
  if (ca.generation < height/ca.w) {
    ca.generate();
  }
  //console.log(ca.hist.length)
}

function ruleFrom(num){
    let ruleset = Array(8).fill(0);
    let binNum = num.toString(2);
    for(let i = 0; i < binNum.length; i++){
      ruleset[7-i] = parseInt(binNum[binNum.length-(i+1)]);
    }
    return ruleset;
}
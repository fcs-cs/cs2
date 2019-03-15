//Your Name(s)
//Project Name
//Date

/* A brief description of what the program is */

let s1, s2, s3;
let slider1, slider2, slider3;

function setup() {
    createCanvas(800, 400);
    slider1 = createSlider(0, 20, 10, 0.1)
    slider2 = createSlider(0, 20, 10, 0.1)
    slider3 = createSlider(0, 20, 10, 0.1)

}

function draw() {
    background(255)
    s1 = new drawSine(slider1.value(), 20, 0);
    s2 = new drawSine(slider2.value(), 20, 0);
    s3 = new drawSine(slider3.value(), 20, 0);

    waveArray = [s1, s2, s3]
    for (let wave = 0; wave < waveArray.length; wave++) {
        waveArray[wave].display(0, (3 + wave) * (height / 6))
    }


    const agregateWave = new agrWave(waveArray)

    agregateWave.display(0, height / 5)
}
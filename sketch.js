let s = function(p) {}
new p5(s);

let shapeColor;
let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(233, 208, 181);
    button = createButton('erase');
    button.position(40, 60);
    button.mousePressed(changeBackground);
}

function mouseDragged(){
    noStroke();
    fill (shapeColor);
    ellipse(mouseX, mouseY, 30, 20);
}

function mousePressed() {
    shapeColor = color(random(255), random(255), random(255), 100)
}

function changeBackground() {
    background(233, 208, 181);
}
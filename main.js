function preload(){}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(620,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,450);
circle(700,550,30);
}

function take_snapshot(){
    save("photo.png");
    color("blue")
}
function preload(){}

function setup(){
    canvas = createCanvas(600,450);
    canvas.position(860,290);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,450);

fill("red");
stroke("red");
circle(50,59,90);

fill("blue");
stroke("blue");
rect(35,104,30,250);


fill("red");
stroke("red");
circle(52,399,90);

fill("blue");
stroke("blue");
rect(98,399,410,30);

fill("red");
stroke("red");
circle(550,405,90);

fill("blue");
stroke("blue");
rect(535,110,30,250);

fill("red");
stroke("red");
circle(550,65,90);

fill("blue");
stroke("blue");
rect(94,51,410,30);
}

function take_snapshot(){
    save("photo.png");
    color("blue")
}
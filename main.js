function preload(){
    
}
function setup(){
    canvas=createCanvas(800,500);
    canvas.center();
    video=createCapture(VIDEO);
    //video.size(100,100)
    video.hide();
    video.center();

}

function draw(){
    //top-left
    //circle
    circle(50, 50, 100);
    stroke(255,255,0);
    fill(255,255,0);

    //rectangle
    rect(100, 25, 600, 50);
    stroke(0,255,0);
    fill(0,255,0);
    //complete


//top-right
    //circle
    circle(750, 50, 100);
    stroke(255,255,0);
    fill(255,255,0);

    //rectangle
    rect(100, 425, 600, 50);
    stroke(0,255,0);
    fill(0,255,0);
    //complete


//bottom-left
    //circle
    circle(750, 450, 100);
    stroke(255,255,0);
    fill(255,255,0);

    //rectangle
    rect(25, 100, 50, 300);
    stroke(0,255,0);
    fill(0,255,0);
    //complete


//bottom-right
    //circle
    circle(50, 450, 100);
    stroke(255,255,0);
    fill(255,255,0);

    //rectangle
    rect(725, 100, 50, 300);
    stroke(0,255,0);
    fill(0,255,0);

    image(video, 250, 100, 300, 300);
}

function take_snapshot(){
    save("user.png");
}
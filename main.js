function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(300, 110);

    canvas = createCanvas(550,550);
    canvas.position(1000, 110);

    poseNet = ml5.poseNet(video, gotResults);
    poseNet.on('pose', gotPoses);
}

function gotResults() {
    console.log("Model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#41f092');
    fill("blue");
    textSize(difference)
    text('font sizer', noseX, noseY);

    document.getElementById("size").innerHTML = "The size of the square is " + difference + "px";
}
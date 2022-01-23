noseX = 0;
noseY = 0;

function preload() {
  clown_nose = loadImage(
    "https://i.postimg.cc/Wp5XgKBv/kisspng-handlebar-moustache-beard-portable-network-graphic-5cbf4ddac59f40-3813606715560411788095-rem.png"
  );
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
  fill("red");
  stroke("red");

  image(clown_nose, noseX - 32, noseY + 3, 70, 40);
}

function take_snapshot() {
  save("hello.jpg");
}

function modelLoaded() {
  console.log("poseNET is Initialized");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + results[0].pose.nose.x);
    console.log("noseY = " + results[0].pose.nose.y);
  }
}

function preload() {
}
var video;
var tint_color="";

function setup() {
  var canvas=createCanvas(400,400);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video,0,0,400,400);
}

function apply_filter(){
  tint_color=document.getElementById("color_name").value;
  tint(tint_color)
}

function take_snap(){
  save('myName.jpg')
}



status="";

function preload(){

}
function setup(){
    canvas= createCanvas(390,325);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,390,325);
}
function g(){
    c=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status = Detecting";
    inp=document.getElementById("input").value;
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
}
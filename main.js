function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);



    canvas =createCanvas(500,500);
   canvas.position(550,150);
poseNet=ml5.poseNet(video,modeloaded);
poseNet.on('pose', gotPoses);

}
function  modeloaded(){
    console.log(('PoseNet Is Initialized'));
}

function draw(){
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
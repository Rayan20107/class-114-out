function preload()
{
  clownose=loadImage('https://i.postimg.cc/k4JV27Cv/Clown-Nose-PNG-Image.png');
}

function modelLoaded()
{
    console.log("Posenet model initialized");
}

function gotposes(results)
{
    if (results.length>0) {
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);
    }
}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.size(300, 300);
    webcam.hide();
    posenet=ml5.poseNet(webcam, modelLoaded);
    posenet.on('pose', gotposes);
}

function draw()
{
   image(webcam, 0, 0, 300, 300);
}

function take_snapshot()
{
    save('Whatsapp-MoustacheNose-Filter.png');
}
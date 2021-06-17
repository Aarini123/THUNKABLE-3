Webcam.set({
    width:310,
    height:300,
    image_format:"png",
png_quality:90,

constraints:{
    facingMode:"enviroment"
}
}
 );
   
cammera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+ data_uri+"'>";
    });
}

console.log("ml5version",ml5.version);

classifier=ml5.imageClassifier("MobileNet",ModelLoaded);

function ModelLoaded(){
    console.log("M0delL0aded");
}

function identify(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
  else{
      console.log(results);
      document.getElementById("object_name").innerHTML=results[0].label;
  }  
}
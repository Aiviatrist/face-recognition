Webcam.set({
    width:350,
    height:200,
    img_format:"png",
    png_quality:100
});
var camera=document.getElementById("camera");
Webcam.attach(camera);
function lolcap(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="hi" src="'+data_uri+'" >';
    });
}
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/icOZYGEOs/model.json",modelloaded);
function loliden(){
        img=document.getElementById('hmmm');
        classifier.classify(img,gotresult);
    function gotresult(error,results){
        if(error){
        console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].label;
            document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        }
    }
}
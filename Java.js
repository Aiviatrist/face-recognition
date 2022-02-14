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
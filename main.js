function startclassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("",modelloaded);
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log("gotResults");
}
function modelloaded(){
    console.log("modal is loaded");

}
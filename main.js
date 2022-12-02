function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HwAKurVa0/model.json',modelReady);
}
function gotResult(error, results) {
console.log('Got Result')
}
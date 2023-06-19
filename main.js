https://teachablemachine.withgoogle.com/models/9fpa1YX5v/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9fpa1YX5v/model.json" , modelReady);

}

function modelReady() {
    classifier.classify(gotResults)
}
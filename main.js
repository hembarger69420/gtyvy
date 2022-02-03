function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/U98JwQkU9/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}


dog = 0;
lion = 0;
cow = 0;
cat = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r = Math.floor(Math.random()* 255) +1;
        g = Math.floor(Math.random()* 255) +1;
        b = Math.floor(Math.random()* 255) +1;

        document.getElementById("result_label").innerHTML = "Detected voice is of- "+results[0].label;
        document.getElementById("result_label").style.color = "rgb('+r+','+g+','+b+')";
       
        document.getElementById("result_count").innerHTML = "Detected dog-"+dog+"Detected cat-"+cat+"Detected lion-"+lion+"Detected cow-"+cow;
        document.getElementById("result_count").style.color = "rgb('+r+','+g+','+b+')";

        img = document.getElementById("animal_image");

        if(results[0].label == "Barking") {
            img.src = 'download.jpg';
            dog = dog+1;
        }
        else if(results[0].label == "Mooing") {
            img.src = 'cow.jpg';
            cow = cow+1;
        }
        else if(results[0].label == "Roaring") {
            img.src = 'lion.jpg';
            lion = lion+1;
        }
        else if(results[0].label == "meowing") {
            img.src = 'cat.jpg';
            cat = cat+1;
        }
        else{
            img.src = 'images.jpg';
        }
    }
}


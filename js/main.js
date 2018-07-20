var config = {
  apiKey: "AIzaSyBVcZ4bNjb7tNYJHIBCg5duF5PihzXenTo",
  authDomain: "project-c7de1.firebaseapp.com",
  databaseURL: "https://project-c7de1.firebaseio.com",
  projectId: "project-c7de1",
  storageBucket: "project-c7de1.appspot.com",
  messagingSenderId: "81786072147"
};
firebase.initializeApp(config);

document.getElementById("contact").addEventListener("submit", submitForm);
// Initialize Firebase


var messagesRef = firebase.database().ref('messages');


function submitForm(e){  
    e.preventDefault();
    console.log("okkk")
    var message = getInputVal('message');
    var email = getInputVal('email');
    var name = getInputVal('first');
    var lastname =getInputVal("lastname");
    saveMessage(email,message, name,lastname);
    
  
}
   // Save message to firebase
function saveMessage(  email,message,name,lastname){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      email:email,
      message:message,
      name:name,
      lastname : lastname
    })
  }

function getInputVal (id) {
  return document.getElementById(id).value;
}



console.log("hh");
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 900); // Change image every 2  seconds
}












  
   



  //get the form (bech nekhou el from bel id)
console.log("hh");


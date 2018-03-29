$(document).ready(function(){
console.log("ready!")
let attending = "no";
let nameInput = "empty"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnnFP3zpTB7yl_N-Ked51EYfmc4GXHw6I",
    authDomain: "housewarming-feedd.firebaseapp.com",
    databaseURL: "https://housewarming-feedd.firebaseio.com",
    projectId: "housewarming-feedd",
    storageBucket: "housewarming-feedd.appspot.com",
    messagingSenderId: "574912251507"
  };
  firebase.initializeApp(config);

  let database = firebase.database();

$(".no").on("click", function(){
    // console.log("clicked!")
    nameInput = $("#attendees").val();
    if (nameInput === ""){
        alert("Please input your name")
        return;
    }else{
    // console.log(nameInput)

    database.ref().push({
        name: nameInput,
        isComing: attending
    });

    alert("Submitted! Thanks!")
}

});

$(".yes").on("click", function(){
    // console.log("clicked!")
    attending = "yes";
    nameInput = $("#attendees").val();
    if (nameInput===""){
        alert("Please input your name")
        return;
    }else{
    // console.log(nameInput)

    database.ref().push({
        name: nameInput,
        isComing: attending
    });
    alert("Submitted! Thanks!")
}

});




});

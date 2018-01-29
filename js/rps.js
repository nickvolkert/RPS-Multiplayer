// Initialize Firebase
var config = {
  apiKey: "AIzaSyD2xnSod2p0mu3DYlyEEu5D9W-TRVpNsCE",
  authDomain: "rockpaperscissors-f7689.firebaseapp.com",
  databaseURL: "https://rockpaperscissors-f7689.firebaseio.com",
  projectId: "rockpaperscissors-f7689",
  storageBucket: "rockpaperscissors-f7689.appspot.com",
  messagingSenderId: "224327001002"
};
firebase.initializeApp(config);
  // Create a variable to reference the database
  var database = firebase.database();

  // Initial Values
  var name = '';
  var userGuess = $("#player1Choice button").val();
  var oponentGuess = $("#player2Choice button").val();
  // var guess = guess;

  // Capture Button Click
  $("#submitUserName").on("click", function(event) {
    event.preventDefault();
    name = $("#userForm").val().trim();
    $("#startScreen1").hide();
    $("#player1Turn .userName").text(name);
    database.ref().set({
      name: name
    });
    $("#userForm").val('')
  });

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {


    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
  var wins = 0;
  var losses = 0;
  var ties = 0;
  // var userGuess = $("#gameContainer button").text();
  var buttonvalue = $(this).attr("value");
  var buttonparent = $(this).parent();
  $("#player1Choice button").on("click", function() {
    var buttonvalue = $(this).attr("value");
    $("#player1Choice").hide();
    $(".yourTurn").hide();
    $("#player1Guess h3").text(buttonvalue);

    });
    $("#player2Choice button").on("click", function() {
      var buttonvalue = $(this).attr("value");
      $("#player2Choice").hide();
      $(".yourTurn").hide();
      $("#player2Guess h3").text(buttonvalue);

    });

  // $("#gameContainer button").on("click", function() {
  //   var buttonvalue = $(this).attr("value");
  //   var buttonparent = $(this).parent();
  //   console.log($(this).parent());
  //   if ($(this).parent() === $("#player1Choice")){
  //     $("#player1Choice").hide();
  //     $(".yourTurn").hide();
  //     $("#player1Guess h3").text(buttonvalue);
  //     console.log("player 1 clicked")
  //   }else{
  //     $("#player2Choice").hide();
  //     $(".yourTurn").hide();
  //     $("#player2Guess h3").text(buttonvalue);
  //     console.log("player 2 clicked")
  //   }

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    // if ((userGuess === "rock") || (userGuess === "paper") || (userGuess === "scissors")) {
    //
    //   if ((userGuess === "rock") && (oponentGuess === "scissors")) {
    //     wins++;
    //   } else if ((userGuess === "rock") && (oponentGuess === "paper")) {
    //     losses++;
    //   } else if ((userGuess === "scissors") && (oponentGuess === "rock")) {
    //     losses++;
    //   } else if ((userGuess === "scissors") && (oponentGuess === "paper")) {
    //     wins++;
    //   } else if ((userGuess === "paper") && (oponentGuess === "rock")) {
    //     wins++;
    //   } else if ((userGuess === "paper") && (oponentGuess === "scissors")) {
    //     losses++;
    //   } else if (userGuess === oponentGuess) {
    //     ties++;
    //   }
    // }


//still working on:

  //need to set score tracking

  //need to set show and hides of player cards based on the stage of the game

  //need to set trash talking so it's being sent and set in the database
  // Capture Button Click
  $("#trashButton").on("click", function(event) {
    event.preventDefault();
    trashTalk = $("#trashInput").val().trim();
    $("#trashWindow").append('<p class="trash1">' + trashTalk + '</p>');
    $("#trashInput").val('')
  });

  //need to figure out how to set player two user name entry and player two choices

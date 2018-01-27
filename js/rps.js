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
  var name = name;
  var userGuess = $("#player1Choice button").attr("value");
  var oponentGuess = $("#player2Choice button").val();
  // var guess = guess;

  // Capture Button Click
  $("#submitUserName").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#userForm").val().trim();
    $("#startScreen1").hide();
    database.ref().set({
      name: name
    });

  });

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {
    // Change the HTML to reflect
    $("#player1Turn .userName").text(name);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });
  var wins = 0;
  var losses = 0;
  var ties = 0;
  // var userGuess = $("#gameContainer button").text();

  $("#player1Choice button").on("click", function() {

    $("#player1Guess").text(userGuess);
    


      console.log("game container button click is working");
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
  });

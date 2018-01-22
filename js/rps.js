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
  var name = "";

  // Capture Button Click
  $("#submitUserName").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#userForm").val().trim();

    database.ref().set({
      name: name
    });

  });

  // Firebase watcher + initial loader HINT: .on("value")
  database.ref().on("value", function(snapshot) {
    // Change the HTML to reflect
    $(".userName").text(name);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

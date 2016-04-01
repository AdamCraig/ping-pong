$(document).ready(function() {

  // Business Logic / Function

  var pongify = function (number) {

    var workingNumber = parseInt(number);

    var pongResults = [];

    if ( !workingNumber ) {
      alert("Come on, you have to enter an ACTUAL number.");
    } else if ( workingNumber < 0 ) {
      alert("Seriously? It's gotta be a POSITIVE number.")
    } else {

    for (index = 1; index <= workingNumber; index++) {
      if ( (index % 3 === 0) && (index % 5 === 0) ) {
        pongResults.push("Ping-Pong!");
      } else if ( index % 3 === 0) {
        pongResults.push("Ping");
      } else if ( index % 5 === 0) {
        pongResults.push("Pong");
      } else {
        pongResults.push(index);
      }
    }
      pongResults = pongResults.join(" * ");
      return pongResults;
    }
  }

  // User Interface Logic

  $("form").submit(function(event) {
    event.preventDefault();

    $("#result").empty();

    var numberToPongify = $("#userNumber").val();
    var final = pongify(numberToPongify);

    $("#result").text(final);
  });

});

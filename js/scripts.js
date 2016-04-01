$(document).ready(function() {

  // Business Logic / Function

  var pongify = function (number) {

    var workingNumber = number;

    var pongResults = [];

    for (index = 1; index <= workingNumber; index++) {
      if ( (index % 3 === 0) && (index % 5 === 0) ) {
        pongResults.push("ping-pong!");
      } else if ( index % 3 === 0) {
        pongResults.push("ping");
      } else if ( index % 5 === 0) {
        pongResults.push("pong");
      } else {
        pongResults.push(index);
      }
    }
      pongResults = pongResults.join(" ** ");
      return pongResults;
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

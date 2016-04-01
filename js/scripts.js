$(document).ready(function() {

  // Business Logic / Function

  var pongify = function (number) {

    var workingNumber = number.split("");

    var pongResults = [];

    

    return pongResults;

  }

  // User Interface Logic

  $("form").submit(function(event) {
    event.preventDefault();

    var numberToPongify = $("#userNumber").val();
    var final = pongify(numberToPongify);

    $("#result").text(final);
  });

});

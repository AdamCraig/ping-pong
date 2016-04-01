$(document).ready(function() {

  // Business Logic / Function

  var pongify = function (number) {

    var workingNumber = parseInt(number).split("");

    var pongResults = [];

  }

  // User Interface Logic

  $("form").submit(function(event) {
    event.preventDefault();

    var numberToPongify = $("userNumber").val();
    var final = pongify(numberToPongify);

    $("#result").text(final);
  });

});

// //business logic
// function Ticket(movie, time, age) {
//   this.movieName = movie;
//   this.showTime = time;
//   this.userAge = age;
// }
// Ticket.prototype.ticketPrice = function () {
//   var movieCost = 0;
//   var showCost = 0;
//   var ageCost = 0;
//   if (this.movieName === "new")
//   {
//     movieCost = 5;
//   }
//   else
//   {
//     movieCost = 3;
//   }
//   if (this.showTime === "day")
//   {
//     showCost = 3;
//   }
//   else
//   {
//     showCost = 4
//   }
//   if (this.userAge === "youth")
//   {
//     ageCost = 2;
//   }
//   else if (this.userAge === "adult")
//   {
//     ageCost = 3;
//   }
//   else
//   {
//     ageCost = 1;
//   }
//   return movieCost + showCost + ageCost;
// }
// // user interface logic
// $(document).ready(function() {
//   $("#form-one").submit(function(event) {
//   event.preventDefault();
//
//   var movieInput = $("#movie").val();
//   var timeInput = $("input:radio[name=show-time]:checked").val();
//   var ageInput = $("input:radio[name=age]:checked").val();
//   var newTicket = new Ticket(movieInput, timeInput, ageInput);
//   $(".ticket-price").show();
//   $("#result").text(newTicket.ticketPrice());
//   });
// });
////////////////////////////////////////////////////
//
//UI
$(document).ready(function() {
  $("#form-one").submit(function(event) {
  event.preventDefault();

    $(".pizza-price").show();
  });
});

// //business logic
var pizzaTopings = [];

function Price (tops, size, crust, cheese) {
  this.tops = tops;
  this.pizzaSize = size;
  this.crust = crust;
  this.cheese = cheese;
}

Price.prototype.pizzaPrice = function() {
  var topsCost = 0;
  var sizeCost = 0;
  var crustCost = 0;
  var cheeseCost = 0;

  for (var i = 0; i < pizzaTopings.length; i++) {
    topsCost = pizzaTopings.length * 0.5;

  }
    //alert("top cost = $" + topsCost);

  if (this.pizzaSize === "small") {
    sizeCost = 2;
  } else if (this.pizzaSize === "medium") {
    sizeCost = 3;
  } else if (this.pizzSize === "large") {
    sizeCost = 4;
  } else {
    sizeCost = 5;
  }

  if (this.crust === "thin") {
    crustCost = 2;
  } else {
    crustCost = 1;
  }

  if (this.cheese === "2") {
    cheeseCost = 1;
  } else if (this.cheese === "1") {
    cheeseCost = 0.5;
  } else {
    cheeseCost = 0;
  }

  //alert(topsCost + sizeCost + crustCost);
  return topsCost + sizeCost + crustCost + cheeseCost;
}




////////////////////////////////////////////////////
//UI
$(document).ready(function() {
  $("#form-one").submit(function(event) {
  event.preventDefault();
  var topsInput = 0;
  $("input:checkbox[name=tops]:checked").each(function(){
  var topsInput = $(this).val();
  //alert(topsInput);
  pizzaTopings.push(topsInput);
  //alert("array cont " + pizzaTopings);
  });
  var sizeInput = $("input:radio[name=size]:checked").val();
//  alert(sizeInput);
  var crustInput = $("input:radio[name=crust]:checked").val();
//  alert(crustInput);
  var cheeseInput = $("input:radio[name=cheese]:checked").val();
  //alert("cheese #" + cheeseInput);
  var newPrice = new Price(pizzaTopings, sizeInput, crustInput, cheeseInput);
  $(".pizza-price").show();
  $("#result").text(newPrice.pizzaPrice());
  $('input:checkbox').removeAttr('checked');
  });
});

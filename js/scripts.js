// //business logic
var pizzaTopings = [];

function Price (tops, size, crust) {
  this.tops = tops;
  this.pizzaSize = size;
  this.crust = crust;
}

Price.prototype.pizzaPrice = function() {

  var topsCost = 0;
  var sizeCost = 0;
  var crustCost = 0;


  for (var i = 0; i < pizzaTopings.length; i++) {
    topsCost = pizzaTopings.length * 0.5;
    // return pizzaCost;
  }
    alert("top cost = $" + topsCost);

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
  //alert(topsCost + sizeCost + crustCost);
  return topsCost + sizeCost + crustCost;
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
  var newPrice = new Price(pizzaTopings, sizeInput, crustInput);
  $(".pizza-price").show();
  $("#result").text(newPrice.pizzaPrice());
  });
});

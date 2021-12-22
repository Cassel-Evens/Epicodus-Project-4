// Business Logic
function Pizza(size, toppingOne, toppingTwo, toppingThree) {
  this.cost = 0;
  this.size = (size);
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
}

Pizza.prototype.createCost = function(){
  if (this.size === "10") {
    this.cost += 8;
  } else if (this.size === "12") {
    this.cost += 11;
  } else if (this.size === "16") {
    this.cost += 14;  
  }
  this.cost += (parseInt(this.toppingOne) + parseInt(this.toppingTwo) + parseInt(this.toppingThree));
}
// UI Logic

function displayCost(costToDisplay) {
  $("#cost").text(costToDisplay);
}

function refresh(){
  window.location.reload("Finished");
}

$(document).ready(function() {
  $("form#pizza-toppings").submit(function(event) {
    event.preventDefault();
    let size = $("input:radio[name=crust]:checked").val();
    let toppingOne = $("input:radio[name=topping1]:checked").val();
    let toppingTwo = $("input:radio[name=topping2]:checked").val();
    let toppingThree = $("input:radio[name=topping3]:checked").val();
    let userPizza = new Pizza(size, toppingOne, toppingTwo, toppingThree)
    userPizza.createCost();
    displayCost(userPizza.cost);
    console.log(userPizza);
    $("#finalOrder").show();
    $("#pizzaMenu").toggle();
  });
})
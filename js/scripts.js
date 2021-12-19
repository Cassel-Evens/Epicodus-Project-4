// Business Logic

function Pizza(size, crust, sauce, protein, toppings)  {
  this.size = size;
  this.crust = crust; 
  this.sauce = sauce;
  this.protein = protein;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  if (this.size === "sm") {
    this.price = 10;
  } else if (this.size === "md") {
    this.price = 14;
  } else if (this.size === "lrg") {
    this.price = 18;
  };
  if (this.crust === "Sourdough") {
    this.price += 1;
  } else if (this.crust === "Wheat")  {
    this.price += 2;
  } else if (this.crust === "glutenFree") {
    this.price += 3;
  };
  if (this.protein === "Chicken") {
    this.price += 1;
  } else if (this.protein === "Sausage") {
    this.price += 2;
  } else if (this.protein === "Pepperoni") {
    this.price += 1;
  };
  if (this.sauce === "Marinara") {
    this.price += 1;
  } else if (this.sace === "White") {
    this.price += 1;
  } else if (this.sauce === "Oil") {
    this.price += 1;
  }

  this.price += this.toppings.length;
  console.log(this.toppings.length);
  // console.log(this.price);
  // return this.price;
};


// User Logic
$(document).ready(function(){
  $("form#pizza").submit(function(event)  {
    event.preventDefault();
    $("order").empty();
    $("#pizza").toggle();
    $("#output").show();
    let myPizza = generateOrder();
    $('#order').append(`<p><span>Size:</span> ${myPizza.size}</p>`).append(`<p><span>Crust:</span> ${myPizza.crust}</p>`).append(`<p><span>Sauce:</span> ${myPizza.sauce}</p>`).append(`<p><span>Protein:</span> ${myPizza.protein}</p>`).append(`<p><span>Toppings:</span> ${myPizza.toppings}</p>`).append(`<p><span>Order Total:$</span> ${myPizza.price}</p>`)
    $("#order").text();
    });
  });


function generateOrder()  {
  let size = $("input[name=size]:checked").val();
  let crust = $("input[name=crust]:checked").val();
  let sauce = $("input[name=sauce]:checked").val();
  console.log(size);
  let protein = $("input[name=protein]:checked").val();
  let toppings = [];
  $("input[name=topping]:checked").each(function() {
    toppings.push($(this).val());
  });
  let myPizza = new Pizza(size, crust, sauce, toppings, protein);
  myPizza.getPrice();
  let price = myPizza.getPrice();
  return myPizza;
};

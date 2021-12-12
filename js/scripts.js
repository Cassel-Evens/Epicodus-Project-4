// Buisness Logic

function Pizza(sauce, bread, toppings) {
  this.sauce = sauce;
  this.bread = bread;
  this.protien = protien;
  this.veggies = veggies;
  this.price = price;
}

Pizza.prototype.getPrice = function() {
  if (this.bread === "GF") {
    this.price = 12;
  } else if (this.bread === "Sourdough") {
    this.price = 8;
  } else if (this.bread === "Wheat") {
    this.price = 10;
  };
  if (this.sauce === "white") {
    this.price += 2;
  } else if (this.sauce === "red") {
    this.price += 3
  } else if (this.sauce === "oil") {
    this.price += 1.25;
  };
  if (this.protien === "pep") {
    this.price += .50;
  } else if (this.price === "sausage") {
    this.price += 1;
  } else if (this.price === "chicken") {
    this.price += .75;
  };
  if (this.veggies === "pepper") {
    this.price += .25;
  } else if (this.veggies === "artichoke") {
    this.price += .50;
  } else if (this.veggies === "olive") {
    this.price += .15;
  }
};
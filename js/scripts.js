// Business Logic

function Pizza(sauce, bread, protien, veggies) {
  this.sauce = sauce;
  this.bread = bread;
  this.protien = protien;
  this.veggies = veggies;
  this.price = 0;
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
    this.price += 1;
  };
  if (this.protein === "pep") {
    this.price += 1;
  } else if (this.price === "sausage") {
    this.price += 2;
  } else if (this.price === "chicken") {
    this.price += 2;
  };
  if (this.veggies === "pepper") {
    this.price += 1;
  } else if (this.veggies === "artichoke") {
    this.price += 2;
  } else if (this.veggies === "olive") {
    this.price += 1;
  }
};
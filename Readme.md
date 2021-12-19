Test: "Should add Information into an Object"
Code: function Pizza(sauce, bread, protien, veggies) {
  this.sauce = sauce;
  this.bread = bread;
  this.protien = protien;
  this.veggies = veggies;
  this.price = 0;
}
Expected Output: 
Pizza {
sauce: 'White', 
bread: 'Sourdough', 
protien: 'Chicken', 
veggies: 'Tato', 
price: 0}

Test: "Should display inputted value of crust"
Code: UI Logic : let crust = $("input[name=crust]:checked").val();
Expected Output: Sourdough/Wheat/Gluten-Free;

Test: "Should show price of selected input:
Code: Pizza.prototype.getPrice = function() {
  if (this.size === "Small") {
    this.price = 10;
  } else if (this.size === "Medium") {
    this.price = 14;
  } else if (this.size === "Large") {
    this.price = 18;
  };
Expected Output: selected "Small" display 10.


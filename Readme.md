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

Test: "
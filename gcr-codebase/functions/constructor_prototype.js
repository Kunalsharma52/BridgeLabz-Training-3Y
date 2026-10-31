// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

// Create two car objects
let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Mahindra", "Thar");

// Call prototype method
car1.getDetails();

console.log("----------------");

car2.getDetails();
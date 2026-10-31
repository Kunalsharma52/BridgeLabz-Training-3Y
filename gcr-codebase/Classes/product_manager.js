
// Product class
class Product {

    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply discount
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Display product details
    displayDetails() {
        return "ID: " + this.id +
            "\nName: " + this.name +
            "\nPrice: Rs. " + this.price +
            "\nCategory: " + this.category;
    }
}

// Create products
let products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Notebook", 80, "Stationery"),
    new Product(4, "Keyboard", 1200, "Electronics")
];

// Apply 10% discount
products[1].applyDiscount(10);

// Display all products
console.log("ALL PRODUCTS");

products.forEach(function(product) {
    console.log(product.displayDetails());
    console.log("----------------");
});

// Filter products above 1000
let expensiveProducts = products.filter(function(product) {
    return product.price > 1000;
});

console.log("\nPRODUCTS ABOVE 1000");

expensiveProducts.forEach(function(product) {
    console.log(product.displayDetails());
});

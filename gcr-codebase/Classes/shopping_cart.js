
// Import readline
const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cart class
class Cart {

    constructor() {
        this.items = [];
        this.discount = 0;
    }

    // Add item
    addItem(name, price, quantity) {

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    }

    // Calculate total
    getTotal() {

        let total = 0;

        this.items.forEach(function(item) {

            total = total + (item.price * item.quantity);

        });

        return total;
    }

    // Calculate final total
    getFinalTotal() {

        let total = this.getTotal();

        return total - (total * this.discount / 100);
    }

    // Apply coupon
    applyCoupon(coupon) {

        let couponPattern = /^(SAVE20|DISC10)$/;

        if (couponPattern.test(coupon)) {

            if (coupon === "SAVE20") {
                this.discount = 20;
            } else {
                this.discount = 10;
            }

            return "Coupon applied successfully.";

        } else {

            return "Invalid coupon code.";
        }
    }
}

// Create cart object
let cart = new Cart();

// Ask item details
rl.question("Enter Item Name: ", function(name) {

    rl.question("Enter Item Price: ", function(priceInput) {

        rl.question("Enter Quantity: ", function(quantityInput) {

            let price = Number(priceInput);
            let quantity = Number(quantityInput);

            // Validate item details
            if (name.trim() === "" ||
                !Number.isFinite(price) || price <= 0 ||
                !Number.isInteger(quantity) || quantity < 1) {

                console.log("Please enter valid item details.");
                rl.close();
                return;
            }

            // Add item to cart
            cart.addItem(name, price, quantity);

            // Display cart
            console.log("\nSHOPPING CART");

            cart.items.forEach(function(item) {

                console.log(
                    item.name + " - Rs. " +
                    item.price + " x " +
                    item.quantity
                );

            });

            console.log("\nTotal: Rs. " + cart.getTotal());

            // Ask coupon
            rl.question("\nEnter Coupon (SAVE20 or DISC10): ", function(coupon) {

                console.log(cart.applyCoupon(coupon.trim().toUpperCase()));

                console.log("Discount: " + cart.discount + "%");

                console.log(
                    "Final Total: Rs. " +
                    cart.getFinalTotal()
                );

                rl.close();
            });
        });
    });
});

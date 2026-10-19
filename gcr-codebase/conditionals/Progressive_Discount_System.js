let totalAmount = 7500;
let discountPercentage = 0;

if (totalAmount >= 10000) {
    discountPercentage = 25;
} else if (totalAmount >= 5000) {
    discountPercentage = 15;
} else if (totalAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let discountAmount = totalAmount * discountPercentage / 100;
let finalPrice = Math.round(totalAmount - discountAmount);

console.log("Original Total: ₹" + totalAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);
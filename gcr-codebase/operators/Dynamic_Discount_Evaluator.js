const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalBeforeDiscount = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);
    discountedTotal += finalPrice;

    console.log(
        product.item,
        "Original:", product.price,
        "Discount:", discount + "%",
        "Final:", finalPrice
    );
}

if (totalBeforeDiscount > 50000) {
    discountedTotal -= discountedTotal * 0.05;
}

console.log("Original Cart Total:", totalBeforeDiscount);
console.log("Final Cart Total:", discountedTotal);
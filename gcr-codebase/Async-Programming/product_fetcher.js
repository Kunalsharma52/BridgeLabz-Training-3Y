// Q6 - Fetch and Display Product Data

async function getProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("---------------------------");
        });

    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

getProducts();
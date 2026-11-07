// Q8 - Order Processing with Retry

function submitOrder() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }

        }, 1000);
    });
}

async function processOrder() {

    for (let i = 1; i <= 3; i++) {

        try {
            await submitOrder();

            console.log("Attempt " + i + ": Success");
            return;

        } catch (error) {
            console.log("Attempt " + i + ": Failed");
        }

    }

    throw new Error("Order could not be processed");
}

async function main() {
    try {
        await processOrder();
        console.log("Order processing completed");

    } catch (error) {
        console.log(error.message);
    }
}

main();
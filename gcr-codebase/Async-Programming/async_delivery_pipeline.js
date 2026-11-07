// Q10 - Async Delivery Pipeline

function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Order taking failed");
            } else {
                console.log("Step 1: Order taken");
                resolve();
            }
        }, 1000 + Math.random() * 1000);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Food preparation failed");
            } else {
                console.log("Step 2: Food prepared");
                resolve();
            }
        }, 1000 + Math.random() * 1000);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Packing failed");
            } else {
                console.log("Step 3: Package ready");
                resolve();
            }
        }, 1000 + Math.random() * 1000);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Dispatch failed");
            } else {
                console.log("Step 4: Out for delivery");
                resolve();
            }
        }, 1000 + Math.random() * 1000);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Delivery failed");
            } else {
                console.log("Delivery completed!");
                resolve();
            }
        }, 1000 + Math.random() * 1000);
    });
}

// Async function to execute all steps one by one.
async function runPipeline() {

    try {
        console.log("Start Pipeline");

        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();

    } catch (error) {
        console.log("Pipeline failed!", error);
    }
}

runPipeline();


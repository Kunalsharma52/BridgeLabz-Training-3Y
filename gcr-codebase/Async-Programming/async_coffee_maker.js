// Q1 - Async Coffee Maker

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Water boiling failed!");
            } else {
                console.log("Water boiled.");
                resolve();
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Coffee brewing failed!");
            } else {
                console.log("Coffee brewed.");
                resolve();
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Pouring coffee failed!");
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, 1500);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Error:", error);
    });
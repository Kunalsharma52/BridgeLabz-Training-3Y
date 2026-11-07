// Q3 - Bug Tracker using Promise

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("API request failed!");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }

        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bugs received successfully:");
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
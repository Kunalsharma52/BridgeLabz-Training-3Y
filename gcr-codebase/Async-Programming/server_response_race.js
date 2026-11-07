// Q4 - Server Response using Promise.all and Promise.race

function serverResponse(serverName, time) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (Math.random() < 0.2) {
                reject(serverName + " failed!");
            } else {
                resolve(serverName + " responded successfully.");
            }

        }, time);
    });
}

let serverA = serverResponse("Server A", 2000);
let serverB = serverResponse("Server B", 3000);

// Promise.all waits for both servers.
Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

// Promise.race returns the first settled result.
Promise.race([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Race error:", error);
    });
// Q2 - Microtask vs Macrotask

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Synchronous log");

console.log("End");


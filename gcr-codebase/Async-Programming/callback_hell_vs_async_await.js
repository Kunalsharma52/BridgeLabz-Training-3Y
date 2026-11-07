// Q5 - Callback Hell vs Async/Await

// Part 1: Nested callbacks

function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback Hell:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});


// Part 2: Using Async/Await

function wait(message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

async function buildPipeline() {
    console.log("Async/Await:");

    await wait("Design completed");
    await wait("Build completed");
    await wait("Testing completed");
    await wait("Deployment completed");
    await wait("Celebration time!");
}

setTimeout(() => {
    buildPipeline();
}, 5500);



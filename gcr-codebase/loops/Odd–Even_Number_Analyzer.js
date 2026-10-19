let results = [];

for (let number = 1; number <= 30; number++) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        number: number,
        result: result
    });
}

console.table(results);
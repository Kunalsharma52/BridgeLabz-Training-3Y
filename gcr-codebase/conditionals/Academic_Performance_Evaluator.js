let marks = [90, 85, 78, 88, 92];
let totalMarks = 0;

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

let average = totalMarks / marks.length;
let percentage = (totalMarks / 500) * 100;
let failedSubject = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        failedSubject = true;
    }
}

console.log("Total Marks:", totalMarks);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");

if (failedSubject || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}
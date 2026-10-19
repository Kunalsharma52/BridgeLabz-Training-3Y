let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.split(/\s+/);
let wordCount = words.length;

let lowerFeedback = feedback.toLowerCase();

console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);

if (
    lowerFeedback.includes("bad") ||
    lowerFeedback.includes("poor")
) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}
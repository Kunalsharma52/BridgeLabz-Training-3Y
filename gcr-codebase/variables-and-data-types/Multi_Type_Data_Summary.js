let userName = "Kunal";
let age = 21;
let isStudent = true;
let hobbies = ["Coding", "Reading"];
let address = { city: "Rohtak", country: "India" };
let phoneNumber = null;
let email;

let dataReport = [
    { label: "Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "Address", value: address, type: typeof address },
    { label: "Phone", value: phoneNumber, type: "null" },
    { label: "Email", value: email, type: typeof email }
];

console.table(dataReport);
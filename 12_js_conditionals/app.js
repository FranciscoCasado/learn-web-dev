/*jslint devel: true*/  // this disables console linting
console.log("Welcome to the museum!");

const age = prompt("How old are you?");

if (age < 5) {
    console.log("Free");
} else if (age < 10 || age >= 65) {
    console.log("Child / Senior: $5");
} else {
    console.log("General: $10");
}


const day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("I do not know that day :c");
        break;
}
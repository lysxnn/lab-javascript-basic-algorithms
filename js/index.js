// Iteration 1: Names and Input
    let hacker1 = 'Lysann'
    console.log(`The driver's name is ${hacker1}.`); 
    let hacker2 = 'Cedric'
    console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log("The driver has the longest name, it has ${hacker1.length} characters.");
} else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops 
// 3.1 Print all the characters of the driver's name, separated by a space

let newName = ""
for (let i = 0; i < hacker1.length; i++) {
    newName += hacker1[i].toUpperCase() + " ";
}
    console.log(newName);

// 3.2 Reverse
let revName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
   revName += hacker1[i];
}
    console.log(revName);

// 3.3 Lexicographical Order

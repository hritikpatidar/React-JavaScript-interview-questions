
//reverse a string without using inbuilt function
const name = "Ritik_patidar";
let reverse = "";
for (let i = name.length - 1; i >= 0; i--) {
    reverse += name[i]
}
console.log("reverse-----------", reverse);

//reverese a word 
let str = "i am reactJs developer";
let str1 = str.split(" ");
let final = "";
for (let i = 0; i < str1.length; i++) {
    for (let j = str1[i].length - 1; j >= 0; j--) {
        final += str1[i][j]
    }
    final += " "
}
console.log("final-------------", final);

//check if a number is prime or not
function isPrime(num) {
    if (num <= 1) return false; // Step 1: Agar num 1 ya 0 ya negative hai -> Prime nahi hai
    for (let i = 2; i <= Math.sqrt(num); i++) {  // Step 2: Loop 2 se sqrt(num) tak chalega
        if (num % i === 0) return false; // Agar num i se divide ho gaya -> Prime nahi hai
    }
    return true;
}
console.log("isPrime(1)-------------", isPrime(1));
console.log("isPrime(7)-------------", isPrime(7));
console.log("isPrime(10)-------------", isPrime(10));

let arr = [22, 3, 5, 7, 30, 2, 8, 10, 13, 17];
let primeNumbers = arr.filter(v => isPrime(v));
console.log("primeNumbers-------------", primeNumbers);

for (let n = 0; n <= 10; n++) {
    console.log(n, isPrime(n));
}

// find the largest number in an array
let largestValue = arr[0];;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestValue) {
        largestValue = arr[i]
    }
}
console.log("largestValue-------------", largestValue);


// find the smallest number in an array
let smallestValue = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestValue) {
        smallestValue = arr[i]
    }
}
console.log("smallestValue-------------", smallestValue);

// find the second largest number in an array
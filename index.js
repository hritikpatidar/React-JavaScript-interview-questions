
//reverse a string without using inbuilt function
let name = "Ritik_patidar";
let reverse = "";
for (let i = name.length - 1; i >= 0; i--) {
    reverse += name[i]
}
console.log("reverse-----------", reverse);

//reverese a word latter
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

//reverse a string

let string = "this is javaScript code";
let splitStr = string.split(" ")
let value = ""
for (let i = splitStr.length - 1; i >= 0; i--) {
    value += splitStr[i] + " "
}

console.log("reverse string--------------------", value)

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


//sum of digits of a number with function 
function sum(n) {
    const number = n.toString().split('');
    let res = 0;
    for (let i = 0; i <= number.length; i++) {
        res += parseInt(number[i]) || 0;
    }
    return res
}
// Example
console.log("sum of digits of a number with function-------------", sum(7374623));

//sum of digits of a number without function 
let num = 7374623;
let sumDigit = 0;
while (num > 0) {
    sumDigit += num % 10;
    num = Math.floor(num / 10);
}
// Example
console.log("sum of digits of a number without function -------------", sumDigit);

//sum of digits and reverse of a number
function numberToArray(num) {
    let sum = 0;
    let reverse = 0;
    while (num > 0) {
        sum += num % 10;
        reverse = (reverse * 10) + (num % 10)
        num = Math.floor(num / 10);
    }
    return { sum, reverse };
}

// Example
console.log("sum of digits and reverse of a number---------------------------", numberToArray(7374623));

//Palindrome Check (string/number)
function isPalindrome(str) {
    str = str.toString();
    return str === str.split("").reverse().join("");
}

// Example
console.log("isPalindrome string (madam) ---------------", isPalindrome("madam")); // true
console.log("isPalindrome number (121)---------------", isPalindrome(121));     // true

//Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Example
console.log("Reverse a String (hello)-----------------", reverseString("hello")); // "olleh"

//Fibonacci Series (till n terms)
function fibonacci(n) {
    let a = 0, b = 1, result = [a, b];
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];
        result.push(b);
    }
    return result;
}

// Example
console.log("Fibonacci Series ----------------", fibonacci(7)); // [0,1,1,2,3,5,8]


//Factorial of a Number

function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

// Example
console.log("Factorial of a Number(5)---------------", factorial(5)); // 120


//remove duplicate and add count 

let data = [{ activityName: "Hiking" }, { activityName: "Hiking" }, { activityName: "Running" }, { activityName: "Sleep" }, { activityName: "Cycling" }, { activityName: "Running" }, { activityName: "Running" }, { activityName: "Hiking" }]

var result = {}
for (let i = 0; i < data.length; i++) {
    let name = data[i]?.activityName
    if (result[name]) {
        result[name] += 1
    } else {
        result[name] = 1
    }
}

console.log("result", result)

const arrayFormat = [];

for (let key in result) {
    arrayFormat.push({ "activityName": key, "count": result[key] })
}

console.log("arrayFormat", arrayFormat)
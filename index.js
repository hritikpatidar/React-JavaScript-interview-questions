
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
let arr2 = [55, 22, 43, 16, 27, 88, 1, 22, 34, 96, 57, 12];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > largest) {
        secondLargest = largest;
        largest = arr2[i];
    } else if (arr2[i] > secondLargest && arr2[i] !== largest) {
        secondLargest = arr2[i];
    }
}

console.log("largest:", largest);
console.log("second largest:", secondLargest);

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

console.log("result-------------------------", result)

const arrayFormat = [];

for (let key in result) {
    arrayFormat.push({ "activityName": key, "count": result[key] })
}

console.log("arrayFormat------------------", arrayFormat)

//find duplicate value in array 
let arr1 = [55, 22, 43, 34, 22, 16, 27, 88, 88, 1, 22, 34, 96, 57, 12]

let duplicate = []

for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
        if (arr1[i] === arr1[j] && !duplicate.includes(arr1[i])) duplicate.push(arr1[i])
    }
}

console.log("duplicate value----------------------", duplicate)



//find first non repet Character|
let str2 = "aabbccdfe";
let count = {};

// step 1: frequency
for (let i = 0; i < str2.length; i++) {
    count[str2[i]] = (count[str2[i]] || 0) + 1;
}

// step 2: first non-repeating
for (let i = 0; i < str2.length; i++) {
    if (count[str2[i]] === 1) {
        console.log("First non-repeating:", str2[i]);
        break;
    }
}
console.log("count-------------------", count)

//Flatten an array

let arr3 = [1, [2, [3, 4]], 5, [6, [7, 8, [9, 10]]]];
let result = []

const solveFunction = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            solveFunction(array[i])
        } else {
            result.push(array[i])
        }
    }

}

solveFunction(arr3)
console.log("result-----------------", result)


//check anagram 

let a = "listeni";
let b = "silenti";

const isAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false

    //return str1.split("").sort().join() === str2.split.sort().join()

    let count = {}

    for (let char of str1) {
        count[char] = (count[char] || 0) + 1
    }
    //{"l":1,"i":2,"s":1,"t":1,"e":1,"n":1}

    for (let char of str2) {
        if (!count[char]) return false

        count[char]-- //{"l":1,"i":1,"s":1,"t":1,"e":1,"n":1}
    }
    return true
}

const result = isAnagram(a, b)

console.log("result--------------------------", result)


// find missing number 

let arr4 = [1, 2, 3, 5]

let arrLargeValue = 5
let arrSum = 0
let arrSum2 = 0
for (let i = 1; i <= arrLargeValue; i++) {
    arrSum += i
}

for (let i = 0; i < arr4.length; i++) {
    arrSum2 += arr4[i]
}

const result = arrSum - arrSum2
console.log("find missing number ---------------------------------", result)

//find min or max number in array 

let array = [55, 2, 12, 43, 34, 56, 10, 19, 88, 76, 68, 50]

let min = array[0];
let max = array[0];

for (let num of array) {
    if (num > max) {
        max = num;
    }
    if (num < min) {
        min = num
    }
}

console.log("min", min)
console.log("max", max)

console.log("hello")
console.log("x", x)
var x = 10;

function getName() {
    var b = 5;
    console.log("hii my name is ritik")
}

function getRitilk() {
    console.log("hii ritik ")
}
getName()
console.log(getName)
console.log("x1", x)


// Debounce:
// “Debounce delays function execution until the user stops triggering the event.”
//Debounce ka matlab:
// “Jab tak user ruk na jaaye, function call mat karo.”
function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay)
    }
}
const search = () => {
    console.log("search...")
}
let searchFunction = debounce(search, 500)
searchFunction()
searchFunction()
searchFunction()


// Throttle:
// “Throttle ensures a function runs at most once in a given time interval.”
// Throttle ka matlab:
// “Function ko fixed time me sirf ek baar chalne do.”
function throttle(fn, limit) {
    let flag = true;

    return function () {
        if (flag) {
            fn();
            flag = false;
            setTimeout(() => {
                flag = true
            }, limit)
        }
    };
}

const scrollEvent = () => {
    console.log("scroll...")
}

const scrollFunction = throttle(scrollEvent, 1000)
scrollFunction()
scrollFunction()
scrollFunction()


// // convert into object to array 
// let obj = { a: 1, b: 2, c: 3, d: 4, }
// console.log("obj", obj)
// console.log(Object.entries(obj))

// //ek arrya ne muner string or charactor he unko alag karna he 
// let arr = [100, "q", "ritik", 10, 8, "r"];
// let num = [];
// let str = [];
// let ch = [];

// for (let value of arr) {
//     if (typeof value === "number") {
//         num.push(value)
//     } else if (typeof value === "string" && value.length > 1) {
//         str.push(value)
//     } else {
//         ch.push(value)
//     }
// }

// console.log("num", num)
// console.log("str", str)
// console.log("ch", ch)


//object assignment
// let obj1 = {};
// let obj2 = {
//     name: "ritik patidar"
// };
// let obj3 = {
//     name: "shubham vishwakarma"
// }
// console.log("1",obj1)

// obj1[obj2] = {
//     name: "jay chouhan"
// }
// console.log("2",obj1)


// obj1[obj3] = {
//     name: "shradha sharma"
// }
// console.log("3",obj1)


// console.log(obj1[obj2])

// //Kya array me aise 2 numbers hain jinka sum = target ho?
// let arr = [1, 2, 3, 4, 5];
// let target = 6
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             found = true;
//         }
//     }
// }

// console.log("found", found);


// //Array ke numbers continuous (lagataar) hain ya nahi?
// let arr = [1, 2, 3, 4, 5]
// // let arr = [1,3,4]

// let isConsecutive = true

// for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i + 1] != arr[i] + 1) {
//         isConsecutive = false;
//         break; 
//     }
// }

// console.log("isConsecutive",isConsecutive)
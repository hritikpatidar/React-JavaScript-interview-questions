
// //reverse a string without using inbuilt function
// let name = "Ritik_patidar";
// let reverse = "";
// for (let i = name.length - 1; i >= 0; i--) {
//     reverse += name[i]
// }
// console.log("reverse-----------", reverse);

// console.log("*********************************************************************************************************************")

// //reverese a word latter
// let str = "i am reactJs developer";
// let str1 = str.split(" ");
// let final = "";
// for (let i = 0; i < str1.length; i++) {
//     for (let j = str1[i].length - 1; j >= 0; j--) {
//         final += str1[i][j]
//     }
//     final += " "
// }
// console.log("final-------------", final);

// console.log("*********************************************************************************************************************")

// //reverse a string

// let string = "this is javaScript code";
// let splitStr = string.split(" ")
// let value = ""
// for (let i = splitStr.length - 1; i >= 0; i--) {
//     value += splitStr[i] + " "
// }

// console.log("reverse string--------------------", value)

// console.log("*********************************************************************************************************************")

// //check if a number is prime or not
// function isPrime(num) {
//     if (num <= 1) return false; // Step 1: Agar num 1 ya 0 ya negative hai -> Prime nahi hai
//     for (let i = 2; i <= Math.sqrt(num); i++) {  // Step 2: Loop 2 se sqrt(num) tak chalega
//         if (num % i === 0) return false; // Agar num i se divide ho gaya -> Prime nahi hai
//     }
//     return true;
// }
// console.log("isPrime(1)-------------", isPrime(1));
// console.log("isPrime(7)-------------", isPrime(7));
// console.log("isPrime(10)-------------", isPrime(10));

// let arr = [22, 3, 5, 7, 30, 2, 8, 10, 13, 17];
// let primeNumbers = arr.filter(v => isPrime(v));
// console.log("primeNumbers-------------", primeNumbers);

// for (let n = 0; n <= 10; n++) {
//     console.log(n, isPrime(n));
// }

// console.log("*********************************************************************************************************************")

// // find the largest number in an array
// let largestValue = arr[0];;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestValue) {
//         largestValue = arr[i]
//     }
// }
// console.log("largestValue-------------", largestValue);

// console.log("*********************************************************************************************************************")

// // find the smallest number in an array
// let smallestValue = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallestValue) {
//         smallestValue = arr[i]
//     }
// }
// console.log("smallestValue-------------", smallestValue);

// console.log("*********************************************************************************************************************")

// // find the second largest number in an array
// let arr2 = [55, 22, 43, 16, 27, 88, 1, 22, 34, 96, 57, 12];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] > largest) {
//         secondLargest = largest;
//         largest = arr2[i];
//     } else if (arr2[i] > secondLargest && arr2[i] !== largest) {
//         secondLargest = arr2[i];
//     }
// }

// console.log("largest:------------------------->", largest);
// console.log("second largest:---------------------->", secondLargest);

// console.log("*********************************************************************************************************************")

// //sum of digits of a number with function 
// function sum(n) {
//     const number = n.toString().split('');
//     let res = 0;
//     for (let i = 0; i <= number.length; i++) {
//         res += parseInt(number[i]) || 0;
//     }
//     return res
// }

// console.log("sum of digits of a number with function-------------", sum(7374623));

// console.log("*********************************************************************************************************************")

// //sum of digits of a number without function 
// let num = 7374623;
// let sumDigit = 0;
// while (num > 0) {
//     sumDigit += num % 10;
//     num = Math.floor(num / 10);
// }

// console.log("sum of digits of a number without function -------------", sumDigit);

// console.log("*********************************************************************************************************************")

// //sum of digits and reverse of a number
// function numberToArray(num) {
//     let sum = 0;
//     let reverse = 0;
//     while (num > 0) {
//         sum += num % 10;
//         reverse = (reverse * 10) + (num % 10)
//         num = Math.floor(num / 10);
//     }
//     return { sum, reverse };
// }

// console.log("sum of digits and reverse of a number---------------------------", numberToArray(7374623));

// console.log("*********************************************************************************************************************")

// //Palindrome Check (string/number)
// function isPalindrome(str) {
//     str = str.toString();
//     return str === str.split("").reverse().join("");
// }

// // Example
// console.log("isPalindrome string (madam) ---------------", isPalindrome("madam")); // true
// console.log("isPalindrome number (121)---------------", isPalindrome(121));     // true

// console.log("*********************************************************************************************************************")

// //Reverse a String
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// // Example
// console.log("Reverse a String (hello)-----------------", reverseString("hello")); // "olleh"

// console.log("*********************************************************************************************************************")

// //Fibonacci Series (till n terms)
// function fibonacci(n) {
//     let a = 0, b = 1, result = [a, b];
//     for (let i = 2; i < n; i++) {
//         [a, b] = [b, a + b];
//         result.push(b);
//     }
//     return result;
// }

// console.log("Fibonacci Series ----------------", fibonacci(7)); // [0,1,1,2,3,5,8]

// console.log("*********************************************************************************************************************")

// //Factorial of a Number

// function factorial(n) {
//     let res = 1;
//     for (let i = 2; i <= n; i++) res *= i;
//     return res;
// }

// console.log("Factorial of a Number(5)---------------", factorial(5)); // 120

// console.log("*********************************************************************************************************************")


// //remove duplicate and add count 

// let data = [{ activityName: "Hiking" }, { activityName: "Hiking" }, { activityName: "Running" }, { activityName: "Sleep" }, { activityName: "Cycling" }, { activityName: "Running" }, { activityName: "Running" }, { activityName: "Hiking" }]

// var result = {}
// for (let i = 0; i < data.length; i++) {
//     let name = data[i]?.activityName
//     if (result[name]) {
//         result[name] += 1
//     } else {
//         result[name] = 1
//     }
// }

// console.log("result-------------------------", result)

// console.log("*********************************************************************************************************************")

// const arrayFormat = [];

// for (let key in result) {
//     arrayFormat.push({ "activityName": key, "count": result[key] })
// }

// console.log("arrayFormat------------------", arrayFormat)

// console.log("*********************************************************************************************************************")

// //find duplicate value in array 
// let arr1 = [55, 22, 43, 34, 22, 16, 27, 88, 88, 1, 22, 34, 96, 57, 12]

// let duplicate = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//         if (arr1[i] === arr1[j] && !duplicate.includes(arr1[i])) duplicate.push(arr1[i])
//     }
// }

// console.log("duplicate value----------------------", duplicate)

// console.log("*********************************************************************************************************************")

// //find first non repet Character|
// let str2 = "aabbccdfe";
// let count = {};

// // step 1: frequency
// for (let i = 0; i < str2.length; i++) {
//     count[str2[i]] = (count[str2[i]] || 0) + 1;
// }

// // step 2: first non-repeating
// for (let i = 0; i < str2.length; i++) {
//     if (count[str2[i]] === 1) {
//         console.log("First non-repeating:", str2[i]);
//         break;
//     }
// }
// console.log("count-------------------", count)

// console.log("*********************************************************************************************************************")

// //Flatten an array

// let arr3 = [1, [2, [3, 4]], 5, [6, [7, 8, [9, 10]]]];
// let result = []

// const solveFunction = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             solveFunction(array[i])
//         } else {
//             result.push(array[i])
//         }
//     }

// }

// solveFunction(arr3)
// console.log("result-----------------", result)

// console.log("*********************************************************************************************************************")

// //check anagram 

// let a = "listeni";
// let b = "silenti";

// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) return false

//     //return str1.split("").sort().join() === str2.split.sort().join()

//     let count = {}

//     for (let char of str1) {
//         count[char] = (count[char] || 0) + 1
//     }
//     //{"l":1,"i":2,"s":1,"t":1,"e":1,"n":1}

//     for (let char of str2) {
//         if (!count[char]) return false

//         count[char]-- //{"l":1,"i":1,"s":1,"t":1,"e":1,"n":1}
//     }
//     return true
// }

// const result = isAnagram(a, b)

// console.log("result--------------------------", result)

// console.log("*********************************************************************************************************************")

// // find missing number 

// let arr4 = [1, 2, 3, 5]

// let arrLargeValue = 5
// let arrSum = 0
// let arrSum2 = 0
// for (let i = 1; i <= arrLargeValue; i++) {
//     arrSum += i
// }

// for (let i = 0; i < arr4.length; i++) {
//     arrSum2 += arr4[i]
// }

// const result = arrSum - arrSum2
// console.log("find missing number ---------------------------------", result)

// console.log("*********************************************************************************************************************")

// //find min or max number in array 

// let array = [55, 2, 12, 43, 34, 56, 10, 19, 88, 76, 68, 50]

// let min = array[0];
// let max = array[0];

// for (let num of array) {
//     if (num > max) {
//         max = num;
//     }
//     if (num < min) {
//         min = num
//     }
// }

// console.log("min", min)
// console.log("max", max)

// console.log("*********************************************************************************************************************")

// console.log("hello")
// console.log("x", x)
// var x = 10;

// function getName() {
//     var b = 5;
//     console.log("hii my name is ritik")
// }

// function getRitilk() {
//     console.log("hii ritik ")
// }
// getName()
// console.log(getName)
// console.log("x1", x)

// console.log("*********************************************************************************************************************")


// // Debounce:
// // “Debounce delays function execution until the user stops triggering the event.”
// //Debounce ka matlab:
// // “Jab tak user ruk na jaaye, function call mat karo.”
// function debounce(fn, delay) {
//     let timer;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn();
//         }, delay)
//     }
// }
// const search = () => {
//     console.log("search...")
// }
// let searchFunction = debounce(search, 500)
// searchFunction()
// searchFunction()
// searchFunction()

// console.log("*********************************************************************************************************************")

// // Throttle:
// // “Throttle ensures a function runs at most once in a given time interval.”
// // Throttle ka matlab:
// // “Function ko fixed time me sirf ek baar chalne do.”
// function throttle(fn, limit) {
//     let flag = true;

//     return function () {
//         if (flag) {
//             fn();
//             flag = false;
//             setTimeout(() => {
//                 flag = true
//             }, limit)
//         }
//     };
// }

// const scrollEvent = () => {
//     console.log("scroll...")
// }

// const scrollFunction = throttle(scrollEvent, 1000)
// scrollFunction()
// scrollFunction()
// scrollFunction()

// console.log("*********************************************************************************************************************")

// // convert into object to array
// let obj = { a: 1, b: 2, c: 3, d: 4, }
// console.log("obj", obj)
// console.log(Object.entries(obj))

// console.log("*********************************************************************************************************************")

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

// console.log("*********************************************************************************************************************")

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

// console.log("*********************************************************************************************************************")

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

// console.log("*********************************************************************************************************************")


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

// console.log("*********************************************************************************************************************")

// // interview question sum 2 digit with simple and curing function
// function sum(a, b) {
//     if (a && b) return a + b
//     let total = a;
//     return function next(c) {
//         if (c === undefined) return total
//         total += c
//         return next
//     }
// }


// console.log(sum(8, 9))
// console.log(sum(8)(9)())
// console.log(sum(8)(9)(10)())
// console.log(sum(8)(9)(10)(20)())

// console.log("*********************************************************************************************************************")


// //find largest word of string
// let str = "javascript is very powerful"

// let splitStr = str.split(" ");
// let count = 0;
// let value = ""
// for (let i = 0; i < splitStr.length; i++) {
//     console.log(splitStr[i].length)
//     if (splitStr[i].length > count) {
//         count = splitStr[i].length
//         value = splitStr[i]
//     }
// }

// console.log("value------------------------------------->",value)

// console.log("*********************************************************************************************************************")

// //Two object comparition function
// let a = { a: 1, b: 2 };
// let b = { b: 2, a: 1 };

// function compareObject(a, b) {
//     let keyA = Object.keys(a)
//     let keyB = Object.keys(b)

//     if (keyA.length !== keyB.length) return false
//     for (let key in a) {
//         if (!b.hasOwnProperty(key)) return false
//         if (a[key] != b[key]) return false
//     }
//     return true
// }


// console.log("object comparition------------->",compareObject(a, b))

// console.log("*********************************************************************************************************************")

// //Array Left Rotation

// //1.
// let arr = [1, 2, 3, 4, 5]
// let k = 1
// let temp = arr[0]

// for (let i = 0; i < k; i++) {
//     temp = arr[0]
//     arr.shift(arr[i])
//     arr.push(temp)
// }
// console.log("Array Left Rotation---------------->",arr);

// //2.
// console.log("arr", arr)
// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// for (let t = 0; t < k; t++) {
//     let first = arr[0];

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1];
//     }

//     arr[arr.length - 1] = first;
// }

// console.log("Array Left Rotation---------------->",arr);

// console.log("*********************************************************************************************************************")

// //Count by Category
// let arr = [
//     { name: "A", category: "Fabric" },
//     { name: "B", category: "Material" },
//     { name: "C", category: "Fabric" }
// ]

// let counter = {};

// for (let value of arr) {
//     counter[value.category] = (counter[value.category] || 0) + 1
// }

// console.log("counter-------------------->",counter)

// console.log("*********************************************************************************************************************")


// //Top Rated Only
// let arr = [
//     { name: "A", rating: 4.5 },
//     { name: "B", rating: 3.8 },
//     { name: "C", rating: 4.2 }
// ]


// const result = arr.filter(item => item.rating >= 4)
// console.log("result-------------------->",result)

// console.log("*********************************************************************************************************************")

// //Latest N Items
// let arr = [
//     { name: "A", createdAt: "2024-01-01" },
//     { name: "A1", createdAt: "2024-02-01" },
//     { name: "A2", createdAt: "2024-04-01" },
//     { name: "B", createdAt: "2024-02-01" },
//     { name: "C", createdAt: "2024-03-01" }
// ]

// let result = arr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).splice(arr.length - 2, arr.length)
// console.log("result--------------------------->", result)

// console.log("*********************************************************************************************************************")

// // arange Unique Categories
// let arr = [
//     { category: "Fabric" },
//     { category: "Material" },
//     { category: "Fabric" }
// ]

// let counter = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!counter.includes(arr[i].category)) counter.push(arr[i].category)
// }
// console.log("counter---------------------->",counter)

// console.log("*********************************************************************************************************************")

// //Average Rating
// let arr = [
//     { rating: 4 },
//     { rating: 5 },
//     { rating: 3 }
// ]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].rating
// }

// console.log("average rating", sum / arr.length)

// console.log("*********************************************************************************************************************")

// //Category-wise Average Rating
// let arr = [
//     { category: "Fabric", rating: 4 },
//     { category: "Material", rating: 5 },
//     { category: "Fabric", rating: 3 }
// ]

// let counter = {};

// for (let i = 0; i < arr.length; i++) {
//     counter[arr[i].category] = { value: (counter[arr[i].category]?.value || 0) + arr[i].rating, count: (counter[arr[i].category]?.count || 0) + 1 }
// }

// for (let value in counter) {
//     console.log(counter[value])
//     counter[value] = counter[value].value / counter[value].count
// }

// console.log("counter------------------>", counter)

// console.log("*********************************************************************************************************************")


// //Find Products with Price Range
// let arr = [
//     { name: "A", price: 100 },
//     { name: "B", price: 250 },
//     { name: "C", price: 180 }
// ]

// const max = 300;
// const min = 150;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].price >= min && arr[i].price <= max) {
//         console.log(arr[i])
//     }
// }

// console.log("*********************************************************************************************************************")

// //Group by Category
// let arr = [
//     { name: "A", category: "Fabric" },
//     { name: "B", category: "Material" },
//     { name: "C", category: "Fabric" }
// ]

// let counter = {}

// for (let i = 0; i < arr.length; i++) {
//     if (!counter.hasOwnProperty(arr[i].category)) counter[arr[i].category] = []
//     counter[arr[i].category].push(arr[i].name)
// }

// console.log("counter----------------------------->", counter)

// console.log("*********************************************************************************************************************")


// //Latest Item per Category
// let arr = [
//     { name: "A", category: "Fabric", createdAt: "2024-01-01" },
//     { name: "B", category: "Fabric", createdAt: "2024-02-01" },
//     { name: "C", category: "Material", createdAt: "2024-01-15" }
// ]

// let counter = {}

// for (let i = 0; i < arr.length; i++) {
//     let cat = arr[i].category;

//     if (!counter[cat]) {
//         counter[cat] = arr[i];
//     } else {
//         if (new Date(arr[i].createdAt) > new Date(counter[cat].createdAt)) {
//             counter[cat] = arr[i];
//         }
//     }
// }

// console.log("counter-------------------->",counter)

// console.log("*********************************************************************************************************************")


// //Safe Access & Default
// let obj = { rating: null }

// let rating;

// if (obj.rating != null) {
//   rating = obj.rating;
// } else {
//   rating = 0;
// }

// console.log("rating------------------------------>",rating);

// console.log("*********************************************************************************************************************")

// //find missing number
// let arr = [11, 12, 13, 15, 16, 18, 19, 20]

// let missing = []

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] !== arr[i] + 1) {
//         missing.push(arr[i] + 1)
//     }
// }

// console.log("missing------------------------>", missing)

// console.log("*********************************************************************************************************************")

// // Category-wise Total Count + Avg Rating
// let arr = [
//     { category: "Fabric", rating: 4 },
//     { category: "Material", rating: 5 },
//     { category: "Fabric", rating: 3 },
//     { category: "Material", rating: 4 }
// ]

// let counter = {};

// for (let i = 0; i < arr.length; i++) {
//     let count = (counter[arr[i].category]?.count || 0) + 1
//     let avg = (counter[arr[i].category]?.avgRating || 0) + arr[i].rating
//     counter[arr[i].category] = { count: count, avgRating: avg }
// }

// for (let cat in counter) {
//   counter[cat].avgRating = counter[cat].avgRating / counter[cat].count;
// }


// console.log("counter------------------------------>",counter)

// console.log("*********************************************************************************************************************")


// // Find Cheapest Product Per Category
// let arr = [
//     { name: "A", category: "Fabric", price: 300 },
//     { name: "B", category: "Fabric", price: 250 },
//     { name: "C", category: "Material", price: 400 },
//     { name: "D", category: "Material", price: 350 }
// ]

// let counter = {};

// for (let i = 0; i < arr.length; i++) {
//     let cat = arr[i].category;

//     if (!counter[cat] || arr[i].price < counter[cat].price) {
//         counter[cat] = arr[i];
//     }
// }
// console.log("counter ---------------------------------->", counter)

// console.log("*********************************************************************************************************************")

// //Filter + Transform
// let arr = [
//     { name: "A", rating: 4.5, price: 200 },
//     { name: "B", rating: 3.8, price: 150 },
//     { name: "C", rating: 4.2, price: 300 }
// ]

// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].rating >= 4) {
//         result.push({
//             name: arr[i].name,
//             price: arr[i].price
//         });
//     }
// }

// console.log("result------------------------>",result);

// console.log("*********************************************************************************************************************")

// //Latest N Items (Dynamic)

// let arr = [
//     { name: "A", createdAt: "2024-01-01" },
//     { name: "B", createdAt: "2024-02-01" },
//     { name: "C", createdAt: "2024-03-01" },
//     { name: "D", createdAt: "2024-04-01" }
// ]

// let n = 3
// let result = [...arr]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, n)
//     .map(item => item.name);

// console.log("result--------------------------->",result);

// console.log("*********************************************************************************************************************")

// //Safe Nested Access (Very Real Life)
// let obj = {
//     seller: {
//         profile: {
//             name: "Ritik"
//         }
//     }
// }

// let name = "Guest";

// if (
//     obj &&
//     obj.seller &&
//     obj.seller.profile &&
//     obj.seller.profile.name
// ) {
//     name = obj.seller.profile.name;
// }

// console.log("name------------------------>", name);

// console.log("*********************************************************************************************************************")

// // FizzBuzz
// for (let i = 1; i < 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz")
//     else if (i % 5 === 0) console.log("Buzz")
//     else if (i % 3 === 0) console.log("Fizz")
//     else console.log(i)
// }
// console.log("fizzBuzz ------------------------>")

// console.log("*********************************************************************************************************************")


// // Count Vowels & Consonants
// let str = 'javascript'

// let vowels = 0;
// let consonants = 0

// for (let i = 0; i < str.length; i++) {
//     if ("aeiou".includes(str[i])) {
//         vowels += 1
//     } else {
//         consonants += 1
//     }
// }

// console.log("vowels------------------------>",vowels)
// console.log("consonants------------------------>",consonants)

// console.log("*********************************************************************************************************************")


// // Reverse Number without string methods
// let num = 1234;
// let rev = 0;

// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }

// console.log("rev------------------------>",rev); // 4321

// console.log("*********************************************************************************************************************")

// // check largest and smallest number (One Loop)
// let arr = [10, 5, 8, 20, 2]

// let largest = arr[0];
// let smallest = arr[0]
// for (let num of arr) {
//     if (num > largest) largest = num;
//     else if(num < smallest) smallest = num
// }
// console.log("largest------------------------>",largest)
// console.log("smallest------------------------>",smallest)

// console.log("*********************************************************************************************************************")

// //check Armstrong Number
// let number = "153"
// let value = 0
// for (let num of number) {
//     value += num * num * num
// }
// if (value.toString() === number) console.log("true")
// else console.log("false")

// console.log("armstrong number ------------------------>")

// console.log("*********************************************************************************************************************")


// // Count Word Occurrence
// let str = "js is easy and js is powerful";
// let splitStr = str.split(" ");
// let result = {}
// for (let i = 0; i < splitStr.length; i++) {
//     result[splitStr[i]] = (result[splitStr[i]] || 0) + 1
// }

// console.log("result------------------------>",result)

// console.log("*********************************************************************************************************************")

// //check first duplicat value
// let arr = [1,2,3,4,2,5];
// let seen = {};

// for (let i = 0; i < arr.length; i++) {
//   if (seen[arr[i]]) {
//     console.log(arr[i]);
//     break;
//   }
//   seen[arr[i]] = true;
// }
// console.log("first duplicat value ------------------------>")

// console.log("*********************************************************************************************************************")

// //check even odd without %
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arr.length; i++) {
//   if (Math.floor(arr[i] / 2) === arr[i] / 2) {
//     console.log(arr[i], "is Even");
//   } else {
//     console.log(arr[i], "is Odd");
//   }
// }

// console.log("even odd without % ------------------------>")

// console.log("*********************************************************************************************************************")
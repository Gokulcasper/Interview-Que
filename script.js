// 1. Create an Array object - (In Atleast 3 methods)

// //method 1:
// let array1 = [1, 2, 3, 4, 5];
// //method 2:
// let array2 = [];
// //method 3:
// let array3 = new Array(3);
// //method 4:
// let array4 = Array.of(12, 23, 34);
// console.log(array4);

//----------------------------------------------------

// 2. Take the below array and copy it using the slice method and the for loop method. var array = [1, 2, 3, 4, 5];

// // Method 1: slice
// var array = [1, 2, 3, 4, 5];
// let arraySlice = array.slice();
// console.log(arraySlice);
// //Method 2: for loop
// var array = [1, 2, 3, 4, 5];
// let temp = [];
// for (let i = 0; i < array.length; ++i) {
//   temp[i] = array[i];
// }
// console.log(temp);

//----------------------------------------------------

// 3. Empty this array:   var array = [1, 2, 3, 4, 5];

// var array = [1, 2, 3, 4, 5];
// // Method 1:
// array=[];
// //Method 2;
// array.length=0;
// //Method 3:
// while(array.length)
// {
//     array.pop();
// }
// //Method 4:
// array.splice(0, array.length);
// console.log(array);

//--------------------------------------------------

// 4. What type is an Array set to?

// let array = [1, 2, 3, 4, 5];
// console.log(typeof array);

//--------------------------------------------------

// 5. How can you check if something is an Array?

// var array = [1, 2, 3, 4, 5];
// let obj = { id: 1 };
// let other = undefined;
// let string = ["Gokul"];
// //Method 1:
// let result = Array.isArray(array);
// console.log(result);
// //Method 2:
// function checkIfArray(val) {
//   if (typeof val == "string") {
//     console.log("it is String");
//   } else if (typeof val == "undefined") {
//     console.log("it is undefined");
//   } else if (typeof val == "number") {
//     console.log("it is number");
//   } else {
//     console.log("it is array");
//   }
// }
// checkIfArray(array);

//----------------------------------------------------

// 6. Add an item to the end of an array.

// var array = [1, 2, 3, 4, 5];
// //Method 1:
// array.push("apple");
// //Method 2:
// array[array.length] = "Gokul";

// console.log(array);

//----------------------------------------------------

// 7. Find the index position of d in this array

// var arr = ["a", "b", "c", "d"];
// let result = arr.indexOf("d");
// console.log(result);

//-----------------------------------------------------

// 8. What will be returned if you look for the index of something that does not exist?

// var arr = ["a", "b", "c", "d"];
// let result = arr.indexOf("z");
// console.log(result);
// // Output is -1

//-----------------------------------------------------

// 9. Write a function to check if milk exists in your array.  var items = ["milk", "bread", "sugar"];

// var items = ["milk", "bread", "sugar"];
// function checkindex(val) {
//   if (items.indexOf(val) == -1) {
//     console.log("Item Doesn't Exist");
//   } else {
//     console.log("Item Exist");
//   }
// }
// checkindex("milk");

//----------------------------------------------------------

// 10. Now you've found milk exists add some code to find the index of milk and remove that item.

// var items = ["milk", "bread", "sugar"];
// function checkindex(val) {
//   if (items.indexOf(val) == -1) {
//     console.log("Item Doesn't Exist");
//   } else {
//     items.splice(val.indexOf, 1);
//     console.log("Item Exist");
//     console.log(items);
//   }
// }
// checkindex("milk");

//---------------------------------------------------------

// 11. List the ways to loop over an array.

// For
// For-in , For-of
// for-each
// while

//-----------------------------------------------------

// 12. Write some code to put these numbers in order (Ascending & Descending)
// var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

// // Ascending Order
// var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];
// let result = numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(result);

// // Descending Order
// var numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];
// let result = numbers.sort((a, b) => {
//   return b - a;
// });
// console.log(result);

//-------------------------------------------------------

// 13. Write some code to place this list in alphabetical order.
// var p = ["a", "z", "e", "y"];

// var p = ["a", "z", "e", "y"];
// let result = p.sort();
// console.log(result);

//--------------------------------------------------------

// 14. What is the length of these arrays

// var arr1 = [, , ,];

// var arr2 = new Array(3);

// var arr3 = [1, 2, 3, 4, 5];

// var array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(array);

//-------------------------------------------------------

// 15. What are the results of these splice and slice methods .

// var a = ["zero", "one", "two", "three"];
// var names = ["jason", "john", "peter", "karen"];

// var sliced = a.slice(1, 3);
// var spliced = names.splice(1, 3);
// console.log(sliced);
// console.log(spliced);
// console.log(a);
// console.log(names);

//-------------------------------------------------------

// 16. What are the console logs of these shift and unshift methods -

// var a = [];

// // We take an empty array and

// a.unshift(1); //[1]
// a.unshift(22); //[22,1]
// var b = console.log(a); //[22,1]
// a.shift(); //[1]
// var c = console.log(a); //[1]
// a.unshift(3, [4, 5]); //[3,[4,5],1]
// var d = console.log(a); //[3,[4,5],1]
// a.shift(); //[[4,5],1]
// var e = console.log(a); //[[4,5],1]
// a.shift(); //[1]
// var f = console.log(a); //[1]
// a.shift(); //[]
// var g = console.log(a); //[]

//-------------------------------------------------------

// 17. Using reduce add all these numbers .
// var numbers = [1, 2, 3, 4, 5, 6];

// var numbers = [1, 2, 3, 4, 5, 6];
// let result = numbers.reduce((acc, curVal) => {
//   return acc + curVal;
// });
// console.log(result);

//-------------------------------------------------------

// 18. Flatten this array to one single array using reduce.

// var array = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// let result = array.reduce((acc, curVal) => {
//   return acc.concat(curVal);
// }, []);
// console.log(result);

//--------------------------------------------------------

// 19. Filter this array to return just the dogs.

// var animals = [
//   { name: "Jason", species: "rabbit" },
//   { name: "Jessica", species: "dog" },
//   { name: "Jacky", species: "owl" },
//   { name: "Luke", species: "fish" },
//   { name: "Junior", species: "rat" },
//   { name: "Thomas", species: "cat" },
// ];

// let result = animals.filter((val) => {
//   return val.species == "dog";
// });
// console.log(result);

//----------------------------------------------------

// 20. Using array in Question 19 use map function to return all the species.

var animals = [
  { name: "Jason", species: "rabbit" },
  { name: "Jessica", species: "dog" },
  { name: "Jacky", species: "owl" },
  { name: "Luke", species: "fish" },
  { name: "Junior", species: "rat" },
  { name: "Thomas", species: "cat" },
];

let result = animals.map((val) => {
  return val.species;
});
console.log(result);

// An array is a type of data structure where you can store an ordered list of elements.
// A shallow copy of an object is a copy whose properties share the same references 
// (point to the same underlying values) as those of the source object from 
// which the copy was made.


// ********************************* BASICS ********************************************
// const fruits = [];
// fruits.push("banana", "apple", "peach");  // -> add the new element
// fruits.pop()  //-> remove the last element
// fruits.shift();  // -> remove the first element
// fruits.unshift(5);  // -> add the element to the zero index

// console.log(fruits);
// console.log(fruits.length); 

// *******************************Array functions **********************************

const myarr = [1,2,3,4,5,6,7,8,9];
//includes  ->  returns the booleans value
// console.log(myarr.includes(6));
// indexOf -> returns the index of the element present in array
// console.log(myarr.indexOf(7)); // 6

//****************Slice Function */
// The slice() method of Array instances returns a shallow copy of a portion of an array 
// into a new array object selected from start to end (end not included) 
// where start and end represent the index of items in that array. 
// The original array will not be modified.

// const newmyarr = myarr.slice(2,6); 
// console.log("A old Array",myarr);
// console.log("A new array",newmyarr);
// console.log("A old Array",myarr);

//************************************splice******************************** */
// The splice() method of Array instances changes the contents of an array by 
// // removing or replacing existing elements and/or adding new elements
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // Replaces 1 element at index 4
// console.log(months);

// ************************************Important Function **********************

//spread Operator
const nums1= [1,2,3];
const nums2 = [4,5,6];
const newarr = [...nums1, ...nums2];
console.log(newarr)

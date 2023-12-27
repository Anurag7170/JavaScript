//*****************************************filter***********************************
//The filter() method takes each element in an array and it applies a conditional statement
//  against it. If this conditional returns true, the element gets pushed to the output
//  array. If the condition returns false, the element does not get pushed to the
// output array.

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterarr = nums.filter((num) => nums > 4); //implicity return to avaoid return statement
// console.log(filterarr);
const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  //filter the data whose grades are grater than 90
  const filterstudents = students.filter((student) => (
    student.grade >= 90
  ))
//   console.log(filterstudents)

// *****************************************map function**********************************
//The map() method is used for creating a new array from an existing one, applying a
//  function to each one of the elements of the first array.

const maparr = nums.map((num) => num * 2);

//print the array with the name of the students
const mapstudents = students.map(student => student.name);
// console.log(mapstudents);
// console.log(maparr);

// reduce 
// The reduce() method reduces an array of values down to just one value. 
// To get the output value, it runs a reducer function on each element of the array.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
// console.log(sum); // 10

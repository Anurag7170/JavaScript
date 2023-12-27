//function declaration
// function sayHello(name) {
//     console.log("hello",name);
// }
// sayHello("Anurag"); //function calling

/*  ************************ part 2  ***************  */

// when ever you have to store a function calling inside the varaiable you have to0 return

// function x(numb){
//     return numb;
// }
// const result = x(5);
// console.log(x(6))
// console.log(result);

/*  ********************part 3 (rest operator)******************** */

// function calucateAmount(...num1){
//     return num1;
// }

// //you can add as many params and it will make a array and return the array
// console.log(calucateAmount(200,300))  //this will print [200, 300]

/*  **************** part4 (Arrow function) *********************/

// Arrow function declartion
//  const x = () => {
//     console.log("first");
//  }
// x();

// Arrow function cannot access this keyword (current context)

// const user = {
//     username: "Anurag",
//     welcomeMEssage: function (){
//         console.log("Inside function",this.username)
//     },
//     welcome2: () =>{
//         console.log("Inside arrow function", this.username);
//     }

// }
// user.welcomeMEssage()  //output -> Inside function Anurag

// user.welcome2()   //Inside arrow function undefined

// Arrow Functions Have an Implicit Return Statement
// When you have a single-line arrow function, the return statement will be added
// implicitly by JavaScript. This means you shouldn't add the return keyword explicitly.

function sum (num1, num2){
    const res = num1+num2;
    return res;
}
//Implicit Function
const sumA = (nums1, num2) => nums1+num2;
// In these dont add a curly bracket and a return statement
//or you can write like this
const suma = (n1,n2) => (n1+n2);


// console.log(suma(3,4))


// Arrow functions cannot be used as constructors
// Arrow function cannot be declared it will always be declared 
//hoisting will be same as the vairable


/*   *******************************part 5 (IIFE)**************************       */

// bad declaration 
(function(value){
    var greet = 'Hello';
    console.log(greet+ ' ' + value);
  })('IIFEs');
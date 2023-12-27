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






/*  **************** part (Arrow function) *********************/

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
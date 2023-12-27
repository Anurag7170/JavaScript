const jsUser = {
    email:"anurag@200gmail.com",
    "full name":"Anurag pandey"

}
// 2 ways to access the objects
// console.log(jsUser.email);
// console.log(jsUser["full name"]);

//updating the object
jsUser.email ="ap@gmail.com";
// console.log(jsUser.email);

// Object.freeze(jsUser); //-> these is used to freeze the changes in the objects
// console.log(Object.keys(jsUser)) // ->this will take the keys values and make a array out of that
// console.log(Object.values(jsUser)); //-> this will do sqame as above with the values

// spread opeator
const obj1 = { 1:"A", 2:"B"};
const obj2 = {3:"C", 4:"D"}

const obj3 = {...obj1,...obj2 }; // spread opeator 
console.log(obj3)
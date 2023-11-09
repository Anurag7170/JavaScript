/*what problem does promise solve?
answer is callback hell


what is Promise?
The Promise object represents the eventual completion (or failure) 
of an asynchronous operation and its resulting value.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.


*/

//***********************************creation of Promise****************************/
// const promiseOne = new Promise((resolve, reject) => {
//   //do any async task
//   //for ex-> db call

//   setTimeout(() => {
//     // console.log("Anurag1");
//     resolve();
//   }, 2000);
// });
// consuming the promise
// promiseOne.then(() => console.log("Promise Consumed"));

// {***********************another synatx****************}
// new Promise((resolve, reject) => {
//   let x = true;
//   if (x) {
//     resolve({ a: "a" });
//   } else {
//     reject({ a: "a" });
//   }
// });
//***************************Different way of consuming********************* */
//   .then((a) => {
//     console.log("Promise 2 solved", a);
//     return a.a;
//   })
//   .then((a) => {
//     console.log("hii",a);
//   })
//   .catch((a) => {
//     console.log("Promise 2 not solved", a);
//   })
//   .finally(() => {
//     console.log("Finally will always work wheather it is resolve sur reject");
//   });

// const PromiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 3");
//     resolve("Prmise 3 resolev");
//   }, 2000);
// });

// const consumPromisethree = async () => {
//   try {
//     const response = await PromiseThree;
//     console.log(response);
//   } catch (error) {
//     console.log(error)
//   }
// };
// consumPromisethree();

//{*************Use fetch with then and catch *********************************}
// const response = fetch("https://randomuser.me/api/")
// .then((response)=>{return response.json()})
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})














// const getuser = async()=>{
//     const response = await fetch("https://randomuser.me/api/");
//     const data = await response.json();
//     console.log(data);
// }
// getuser();
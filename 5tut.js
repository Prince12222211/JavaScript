//Function inJs
//Block of code taht performs a specific task can be invoked whenver needed
// function myFunction(){ //Parameter
//     console.log("Naruto");
//     console.log("Its itachi uchia");
// }
// myFunction();

// function myFunction(msg){
//     //parameterr->input
//     console.log(msg);
// }
// myFunction("Prince verma"); //arguement
// function add(a, b) {
// console.log("Before Return");
//     sum = a + b;
//     return sum;
//     console.log("After sum"); //its cannot print because after the return value
// }
// let val = add(3, 4);
// console.log(val);

//Arrow Function
// const arrowSum = (a, b) => { //arrowsum function
//     console.log(a + b);

// };
// const arrowMul = (a, b) => {
//     console.log(a * b);
// };

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {

//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("abc");

// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){
//     console.log(val);
// })
// arr.forEach((val,idx,arr)=>{ //arrow function
//     console.log(val*val,idx,arr);
// });

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });

//MapMethode
// let nums=[67,52,39];
// let newArr=nums.map((val)=>{
//     return val*2;

// });
// console.log(newArr);

//Filter Method
// let arr=[23,34,32,34,53,65];
// let newArr=arr.filter((val)=>{
// return val%2===0;
// });
// console.log("The number is the even number",newArr);

//Reduce Method
// let arr=[2,3,4,6,3];
// let sum=arr.reduce((res,curr)=>{     //res=Previos value and curr=current value
//     return res+curr;
// });

//To find the largest number from the array
// let arr=[23,432,342,234,234,342];
// const output=arr.reduce((prev,curr)=>{
// return prev>curr?prev:curr;
// });

// let arr=[87,93,64,99,86];
// let toppers=arr.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);
let n = prompt("Enter  the number of the array");
let arr = [];
for (let i = 1; i <=n; i++) {
  arr[i - 1] = i ;
}
console.log(arr);
let sum=arr.reduce((res,curr)=>{
return res+curr;
});
let fact=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log("The sum of the all elements of the array is",sum);
console.log("The factorial of the all elements of the array is",fact);

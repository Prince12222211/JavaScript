//Arithmatic Operator
// let a = 5;
// let b = 2;
// console.log("a+b= ", a + b);
// console.log("a*b= ", a * b);
// console.log("a-b= ", a - b);
// console.log("a/b= ", a / b);
// console.log("a%b= ", a % b);
// console.log("a**b= ", a ** b);

//Unary Operator are increment(++) and decrement(--)
//Unary Operator
// let a=5;
// let b=2;
// console.log(" ++a ",++a); //print 6
// console.log(" a++ = ",a++); //print the value of the 5
// console.log(a); //print 6
// console.log(a+=4); //7+4=11
// console.log(a*=4); //7*4=44
// console.log(a/=4); //44/4=11
// console.log(a%=4); //11%7=3
// console.log(a!=b); //11%7=3



//Comperison Operator
// let a=5;
// let b="5"; //string->number
// console.log("a==b",a==b); //true
// console.log("a===b",a===b); //False

//Logical Operator are:
//Logical AND (&&)
//Logical OR (||)
//Logical NOT (!)

// let a=6;
// let b=5;
// let cond1=a>b;//True
// let cond2=a===6;//True
// console.log("Cond1&&cond2=",cond1&&cond2); //if both are true then the output will be true nahi toh fir ek b false hua toh firr false
// console.log("cond1||cond2",cond1||cond2); //if both are false then false ni toh har case me true
// console.log("!(a<b)=",!(a<b)); //Logical NOT Operator

//Conditional Statement
//To impelement Some condition in the code
//If Statement

// let age=35;
// if(age>18){
//     console.log("You can vote");
// }
// if(age<18){
//     console.log("YOu can not vote");
// }

// let mode = "Dark";
// let colour;
// if (mode === "Dark") {
//     colour = "black";
// }
// if (mode === "light") {
//     colour = "white";
// }
// console.log(colour);\


//if-else statement
// let a=25;
// if(a%2===0){
//     console.log(a,"Its A even Number");

// }
// else{
//     console.log(a,"Odd Number");
// }

//else-if statement
// let mode="dark";
// let color;
// if(mode="dark"){
//     color="black";
// }
// else if(mode=="blue"){
//     color="blue";
// }
// else if(mode=="Pink"){
//     color="pink"
// }
// else{
//     color="White"

// }
// console.log(color);

//Ternary Operator
//=>condition?true output:false output
//?=Nahi toh😂😂
// let age=5;
// let result=age>=18?"adult":"Not Adult";
// console.log(result);




//alert("PRince verma") //One Time POPUP
// let name=prompt("Hello"); //This will take input from the popup
// console.log(name);
// let a=prompt("Enter a number");
// if(a%5==0){
//     console.log("The number is multiple of 5");
// }
// else{
//     console.log("Not multiple of 5");
// }

let a=prompt("Enter  a score of the student");
console.log("According to your grade was: ",a);

if(a>=90&&a<=100){
    console.log("A");
}else if((a>=70)&&(a<=89)){
    console.log("B");
}
else if((a>=60)&&(a<=69)){
    console.log("C");
}
else if((a>=50)&&(a<=59)){
    console.log("D");
}
else{
    console.log("F");
}

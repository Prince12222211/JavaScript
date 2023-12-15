//DOM=>Document object model
// console.dir(document.body.childNodes);
// console.dir(document.body.childNodes[3].innerText="MADARA Uchiha");
// let heading=document.getElementById("prince");
// console.log(heading);
// let heading=document.getElementsByClassName("prince");
// console.log(heading);
// let para=document.querySelectorAll("p");
// console.log(para);
// let para1=document.querySelector("p");
// console.log(para1);
// console.log(document.body.firstChild);
// let div=document.querySelector("div");
// console.log(div);

//#Part=2(Lecture:7)
// let div=document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.log(id);
// let name=div.getAttribute("name");
// console.log(name);

// let newBtn=document.createElement("buttoon");
// newBtn.innerText="Click Me";
// console.log(newBtn); 
// let div=document.querySelector("div");
// div.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am the ghost of the uchiha Madara uchiha!</i>";
document.querySelector("body").prepend(newHeading);
// newHeading.remove();




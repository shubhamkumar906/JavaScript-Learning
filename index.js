// 1. Ways to print in JavaScript
// console.log("hello world")
// alert("me")
// document.write('this is document write')

// 2. JavaScript Console API
console.log("hello world")
console.warn("this is warning")
console.error("this is an error")

// 3. JavaScript Variables
var number1 = 1;
var number2 = 2;
console.log(number1+number2)

// 4. Single Line Comment
/*
Multi
Line
comment
*/

// 5. DataTypes in JavaScript
// String
var str1 = "This is a string";
var str2 = 'This is also a string';
// Number
var num = 2;
var num1 = 2.345;
// Object -> key value pairs
var marks = {
    shubham: 99,
    rohit:90,
    kartik:80.55
}

console.log(num1);                 // can also be done in browser console
console.log(marks);

// Booleans
var a = true;
var b = false;
console.log(a, b);

// var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

// At a very high level there are 2 types of data types in JavaScript
// 1. Primitive Data Types : undefined, null, number, string, boolean, symbol(generates unique key each time) 
// 2. Reference Data Types : Arrays and Objects

// var arr = [1,2,3,4,5];
var arr = [1,2.5,"shubham",true,null];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// Operators in JavaScript
var a=34;
var b=56;
console.log("The value of a+b is",a+b);
console.log("The value of a-b is",a-b);
console.log("The value of a*b is",a*b);
console.log("The value of a/b is",a/b);

// Assignment Operators
var c = b;
c += b;
console.log(c);

// Comparison Operator
console.log(a==b);

// Logical Operators
console.log(true && true);
console.log(true || false);
console.log(!true);

// Bitwise Operator
console.log(a | b);

// Functions
function avg(a,b){
    return (a+b)/2;
}

ans1 = avg(4,6);
ans2 = avg(14,16);
console.log(ans1,ans2);

// conditionals in JavaScript
var age = 34;
// age = 23
if(age>25){
    console.log("you can marry");
}
else if(age>22){
    console.log("you are eligible to work")
}
else{
    console.log("you are a kid");
}

// Loops
var arr = [1,2,3,4,5];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function(element){
    console.log(element);
})

let j=0; // Block level scope if variable is declared using let -> better memory management since it destroyed outside the block
// always use let, var is old javascript standard
const a1 = 0;     // use const when we dont to modify the variable
// a1++;         // This is wrong(will throw error), variable declared with const cannot be modified.

while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length)

// break and continue

arr.pop();          // removes from last  
console.log(arr);
arr.push("push");   // adds at last
console.log(arr);
arr.shift();                 // removes first elem
arr.unshift("first");        // adds at first
let ne = arr.unshift("first");
console.log(ne);  // prints length of new array

// Array Methods
arr.toString();             // converts array to string
var myarr = [1,4,6,43,23,32324];
arr.sort();                              // by default first converts in string and then sorts
console.log(arr);
// expore other javascript array methods

// String Methods
let mystr = "this is a javascript tut javascript";
console.log(mystr.length)

console.log(mystr.indexOf("javascript"));
console.log(mystr.lastIndexOf("javascript"));

console.log(mystr.slice(0,5));
d = mystr.replace("javascript","python");
console.log(d,mystr);

// Javascript dates
let mydate = new Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());

// DOM Manipulation                       //DOM - html content in a tree structured manner
console.log(document);
console.log(document.location);
let elem = document.getElementById('click');
console.log(elem);
elem.click();

// document.getElementById('click').style.border = "blue";
// document.getElementById('click').style.border = "2px solild blue";

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";

// Adding class(CSS) via DOM manipulation
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");

// console.log(elemClass[0].innerHTML);
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('div');
console.log(tn);

// To add a child inside any element -> create and add
createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2,createdElement);

//removeChild(element);                       // removes an element
// All methods -> refer MDN

// console.log(document)
// console.log(document.location)
// console.log(document.title)
// console.log(document.URL)
// console.log(document.scripts)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.images)
// console.log(document.domain)

// Selecting Using Query
sel = document.querySelector('.container');
console.log(sel);

sel1 = document.querySelectorAll('.container');
console.log(sel1);

// Events
function clicked(){
    console.log("The button was clicked");
}

// mouseover, mouseout, click, onload  -> Event Examples

// window.onload = function(){
//     console.log("The document was loaded");
// }

// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Click on Container");
// })

// // idname.addEventListener('click',function(){
// //     console.log("Clicked")
// // })

// firstContainer.addEventListener('mouseover',function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout',function(){
//     console.log("Mouse out of Container");
// })

// let prevHtml  = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHtml;
//     console.log("Mouse up when clicked on Container");
// })

// firstContainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("Mouse down when clicked on Container");
// })

// Arrow Functions                     // used to insert functions in between somewhere
// function sum(a,b){
//     return a+b;
// }

sum = (a,b)=>{
    return a+b;
}
console.log(sum(5,7));

// setTimeout and setInterval (to execute tasks repeatedly)
func1 = ()=>{
    console.log('this will run after 2 seconds of loading of the web page');
    document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired</b>"
}
// clr = setTimeout(func1, 2000);

clr = setInterval(func1,2000);
// clr will give a id which can be used to terminate setInterval
clearInterval(clr);

// use clearInterval and clearTimeout to cancel setInterval(clr)/ setTimeout(clr)

// JavaScript Local Storage ->To help save the data into the users' computer
console.log(localStorage);
localStorage.setItem('name','Shubham');
// localStorage.clear();

console.log(localStorage.getItem('name'));
localStorage.removeItem('name');
// Always store less data on local storage and never store sensitive info on local Storage


// JSON -> javaScript Object Notation
// open standard file format used to exchange data
// can be converted to string then transported and then converted back to JSON

obj = {
    name:'Shubham',
    city:'Pune',
    anotherObj:{
        this:'that'
    }
}
jso = JSON.stringify(obj);                        // converts objs (JSON) to strings
console.log(jso);
console.log(typeof(jso));

//JSON standard requires double quotes -> use \ to include "

parsed = JSON.parse('{"name":"Shubham","city":"Pune"}')                             // converts strings to JSON
// or use back ticks ``
console.log(parsed);

// JavaScript Versions - ECMAScript


































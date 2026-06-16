
//JSON

var Userdata = [
    {
        name: "haranadh",
        age: 21,
    },
    {
        name: "gangaraju",
        age: 32
    }
]
for (var i = 0; i < Userdata.length; i++) {
    console.log(Userdata[i].name);
    console.log(Userdata[i].age);
}
function add(a, b) {
    console.log(a + b);
}
const myFun = function (a, b) {

}
//variables
var a = 10;
var b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(++a);
console.log(--b);
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

var a="Hari";
var b=Number(a);
var st=b
console.log(st);

// var a="nadh";
// switch(a){
//     case 'hari':
//         console.log("Monday");
//         break;
//     case 'nadh': 
//         console.log("Tuesday");
//         break;
//     default:
//         console.log("go away");
// }
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// //this a normal function 
// const myfunction=function(a,b){
//     return a+b;
// }
// console.log(myfunction(10,20));
// //this is anonymous function
// var a = (a,b) => {
//     return a+b;
// }
// console.log(a(10,20));
// //this a arrow function 
// var b=(a,b) => a+b;
// console.log(b(30,40));

// document.getElementsByTagName("h1");
const change=() => {
    var colour=Math.floor(Math.random()*16776215).toString(16);
    let display=document.getElementById('okay')
    if(display.innerHTML==="Hello world")
        display.innerHTML="bye"
    else{
        display.innerHTML="Hello world"
    }
    display.style.backgroundColor="#"+colour;
    display.style.color="black"

}

const fun=function(){
    var a=Math.floor(Math.random()*16776215).toString(16);
    let display=document.getElementById("display");
    display.style.backgroundColor="#"+a;
}
fun()
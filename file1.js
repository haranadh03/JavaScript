console.log("hello world");
var a = 23;
var b = 342.45;
var s = "orey anjineyulu";
var d = "true";
console.log(d);
console.log(s);
console.log(a * b);

var i = 10;
var j = "10";
if (i == j) {
    console.log("hehehe");
} else {
    console.log("haha");
}
if (i === j) {
    console.log("avuna");
} else {
    console.log("enti");
}
if (i !== j) {
    console.log("allaga");
} else {
    console.log("hahaha");
}

for (var i = 1; i < 9; i++) {
    console.log(i);
}
var a = 200;
if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
    console.log("leapYear");
} else {
    console.log("not a leap year");
}

var p=35;
var count=0;
for(var i = 1; i <= p; i++){
    if (p%i==0){
        count+=1;
    }
}
if(count==2){
    console.log("prime");
}else{
    console.log("");
}
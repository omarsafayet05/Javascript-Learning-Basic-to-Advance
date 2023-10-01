//---------------------------(Output)----------------------------------------
//alert("I love Bangladesh");
document.write("I love Bangladesh");
document.write("<h1>I love Bangladesh</h1>");
console.log("I love Bangladesh");
//---------------------------(Data type,Comments,keywords)--------------------

// keywords( break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with)

document.write("Anisul Islam </br>");
document.write(typeof 0);
document.write(typeof true);

//document.write("Anisul Islam </br>");

/*
document.write("Anisul Islam </br>");
document.write("Anisul Islam </br>");
document.write("Anisul Islam </br>");
document.write("Anisul Islam </br>");
*/

//---------------------------(variable)----------------------------------------

var name_ = "Anisul";

document.write(name_);

name_ = "kolpona"; //name changed

document.write(name_);

var name1, age, country;

name1 = "Rabbi";
age = 25;
country = "Iraq";

document.write(name1 + " " + age + " " + country);

//You can use only letter(A-Z,a-z),digit(0-9),_,$ in variable. no space , no use keyword, no start with digit,case sensitive.

//Yahoo baba [Advance JS].
//---------------------------(Rest Operator)----------------------------------------

function add(num1, num2) {
  document.write(num1 + num2);
}

add(20, 30);
//add(20,30,40) this multile arguments don't work cause function can take two parameters only.

//Multiple arguments with functions (for in loop); for in loop works as making arguments in a object.
function sum() {
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  document.write(sum + "<br>");
}

sum(50, 60, 70);
sum(30, 50);
//sum("Omar Safayet",30,40,50) this sum don't work because of string.here js es6 solution is rest operator will be needed to use.rest operator uses when remaining values need to be worked seperately.
//string value is passing as variable and rest values converted in array and calculated.

function sumB(name, course, ...args) {
  console.log(name, course, ...args);
  document.write(`The Marks of ${name} in ${course}:`);
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum + "</br>");
  console.log(sum);
}

sumB("Omar Safayet", "P.Hero", 20, 40, 56, 88);

//---------------------------(Spread Operator)----------------------------------------
var a = [1, 3, 5, 5, 0];
var b = [4, 5, 6, 8, 20];
var spread = [...a];
document.write("spread:", spread + "</br>");
var spreadone = [...a, ...b]; //working as concat
document.write("spread as concat:", spreadone + "</br>");
var spreadtwo = [...a];
var spreadthree = a;
var pushNum = a.push(100);
document.write("exact copy:", spreadtwo + "</br>"); //original array will be changed but copy array will be remained unchanged.
document.write("original array:", a + "</br>");
document.write("spreadthree:", spreadthree + "</br>"); //it also change like original array
var Objectone = {
  x: 200,
  y: 560,
};
var Objecttwo = {
  a: 400,
  b: 900,
};

//var objectspread = [];
console.log("objspread:", { ...Objectone, ...Objecttwo });

//---------------------------(Object Literals)----------------------------------------

let name = "omar";

let obj = {
  name: name,
};

console.log(obj);

//This is old way in es6 to variable declare in object.
//This is new way
let level = "four";
let student = 89;

let object = {
  level,
  student,
};

console.log(object);

//use variable as property name.

var n = "name";

var objects = {
  [n]: "Omar Safayet",
  course: "P.Hero",
};

console.log(objects);
console.log(objects.name);

//concat use in property name.

var n = "student";

var objects = {
  [n + " " + "name"]: "Omar Safayet",
  course: "P.Hero",
};

console.log(objects);

//this is old way of function declare  property names.

var n = "student";

var objects = {
  //[n + " " + "name"]: "Omar Safayet",
  [n + "name"]: "Omar Safayet",
  course: "P.Hero",

  detail: function () {
    return `${this.studentname} is student of ${this.course}`;
  },
};

console.log(objects);
console.log(objects.detail());

//this is new way of function declare  property names.

var n = "student";

var objects = {
  //[n + " " + "name"]: "Omar Safayet",
  [n + "name"]: "Omar Safayet",
  course: "P.Hero",

  detail() {
    return `${this.studentname} is student of ${this.course}`;
  },
  "detail show"() {
    return `${this.studentname} is student of ${this.course}`;
  }, //with space for multiple function name
};

console.log(objects);
console.log(objects.detail());
console.log(objects["detail"]()); //this is new way of es6.
console.log(objects["detail show"]()); //this is new way of es6 with space.

//---------------------------(concat)----------------------------------------

var numbers1 = [1, 4, 6, 7, 9, 3, 4, 0, 1];
var numbers2 = [50, 40, 69, 7, 91, 32, 44, 0, 111];
var numbers3 = [133, 413, 633, 70, 93, 32, 41, 900, 189];

var concat1 = numbers1.concat(numbers2);
var concat2 = numbers1.concat(numbers2, numbers3);
document.write("single concat:", concat1 + "</br>");
document.write("multiple concat:", concat2 + "</br>");

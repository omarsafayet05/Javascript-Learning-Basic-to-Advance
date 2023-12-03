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

//---------------------------(callbacks)----------------------------------------
//A callback function can be defined as a function passed into another function as a parameter.
function greet(name, callback) {
  document.write("Hi" + " " + name + "." + "</br>");
  callback();
}

function callMe() {
  var x = 50;
  document.write((x % 6) + "</br>");
}

greet("Omar", callMe);

//---------------------------(Hoisting)----------------------------------------
// Hoisting in js is a behavior in which a function or variable can be used before declaration.In terms of var and const keyword var is hoisted, and let and const doesn't allow hoisting.

test = 6;

document.write(test + "</br>");

var test;
//---------------------------(closure)----------------------------------------
// closure means inner function has accessibility to the variable of it's outer function even after the outer function has returned.
const closure = () => {
  let first = "I am closure";
  const second = () => {
    document.write(first + "</br>");
  };
  return second();
};

closure();

//---------------------------(includes)----------------------------------------

const searches = ["red", "green", "yellow", "blue"];

const exists = searches.includes("green");
let colors = (document.getElementById("bgcolor").style.backgroundColor = "red");
document.getElementById("bgcolor").innerHTML = searches.find((search) => {
  return search == "red" && colors;
});

const color = searches[1];

document.write(exists);
//---------------------(job interviews)----------------------------------------
//---------------------(Web API)-----------------------------------------------

const display = document.getElementById("display");
const displayTwo = document.getElementById("display_two");

function getData() {
  fetch("http://localhost:5500/anisulJs/data.txt")
    .then((res) => res.text())
    .then((data) => {
      console.log("hello 2");
      display.innerText = data;
    });
  console.log("hello");
}

// ফেচ দিয়ে প্রথমে ডাটা রিকুয়েস্ট করা হয় এরপর প্রমিস রিটার্ণ করলে সেটি রেস্পন্সে অবজেক্ট আকারে আসে যেখানে বডিতে রিডেবল ডাটা স্ট্রিম থাকে। এখানেও ডাটা পাওয়া যা য় না, এখানে ডাটাকে টেক্সট,জেশনে কনভার্ট করে আবার প্রমিস রিটার্ণ করে। এবার ডাটাকে শো করার পালা। কন্সোল লগের মাধ্যমে বোঝানো হয়েছে এসিনক্রোনাস কিভাবে কাজ করে। প্রথমে ফেচের মাধ্যমে ডাটাকে রিকু পাঠাবে,সে ততক্ষণে বসে না থেকে হেলো কন্সোল করবে এরপর ফেচ থেকে রিকু হেন্ডেল করে আসা প্রমিস থেকে ২য় হেলো কন্সোল করবে। ২টি কাজ একই সাথে হবে যে রেস্পন্স আগে আসবে তাকে আগে শো করাবে।

//---------------------(Web API-async)-----------------------------------------------

async function getDataTwo() {
  const res = await fetch("http://localhost:5500/anisulJs/data copy.txt");
  const data = await res.text();
  console.log(data);

  displayTwo.innerText = data;
}
//async await function দিয়ে ফেচ করা হয় সরাসরি ফেচের চেয়ে একটু সুবিধাজনক।then use করা লাগে না।
//---------------------(NaN Explained)-----------------------------------------------

const result = "sumit" / 5;
document.write(result + "<br/>");
//NaN

//Javascript হচ্চে উচ্চ পোগ্রামিং ভাষা। এটি আদার পোগ্রামিং ভাষার মতন ক্রাশ করবে না। এটি একটি রেজাল্ট দিবে আপনাকে। যে রেজাল্ট ইউজার এক্সপেক্ট করছে নাম্বার হবে কিন্তু স্ট্রিংকে নম্বর দিয়ে ভাগ করা যাচ্ছে না তাই নান আউটপুট দিয়ে থাকে।

const resultTwo = NaN;
document.write(resultTwo === resultTwo + "<br/>"); //false

const resultThree = "Ghor" / 6; //NaN
const resultFour = "Bari" / 7; //NaN

document.write(resultThree === resultFour + "<br/>"); //false

const resultFive = [NaN];
const search = resultFive.includes(NaN);
document.write(search); //true

//জাভাস্ক্রিপ্টে ইকুয়্যালটি এলগরিদম শুধু দুটি নয় "==","===" আরো এলগরিদম আছে। যেমন Object.is(),samaValueZero algorithom দিয়ে মূলত NaN equilty check করে।
//x,y============> "=="  , "===", "Object.is","sameValueZero"
//Null,Undefined =>true,false,false,false
//Undefined,Undefined=>true,true,true,true
//"1,2" ,[1,2]=>true,false,false,false
//NaN,NaN=>false,false,true,true

//includes method follow samevalueZero algorithom which check the given word from array.

//---------------------(Event Bubbling and capturing)-----------------------------

const button = document.getElementById("button");
const parent = document.getElementById("parent");
const form = document.getElementById("form");

button.addEventListener("click", listener, {
  capture: true,
});
parent.addEventListener("click", listener, true); // প্যারামিটার দুইভাবেই দেয়া যায়। অব্জেক্ট আকারে দিলে যদি আদার অপশন দেয়া লাগে তাহলে দিতে হবে।
form.addEventListener("click", listener, true);

function listener(event) {
  //console.log(event.target);
  //console.log(event.currentTarget);//event.currentTarget=this they are same
  console.log(this.tagName);
}

// ইভেন্ট প্রপাগেশন হচ্ছে বাটনে ক্লিক করা হলে কি কি ওয়েতে ট্রিগ্রার শুরু হয় এবং শেষ হয়। বাবলিং হয় নিচ থেকে উপরে অর্থাৎ চাইল্ড টু প্যারেন্ট ওয়েতে। আর ক্যাপচারিং যদি ট্রু করা হয় সব তাহলে উপর থেকে নিচে।
// ইন্টারভিউ জবে প্রশ্ন করা হয় র‍্যান্ডমলি কিভাবে ইভেন্ট প্রপাগেশন করা হয়? যেমন ফর্ম থেকে শুরু হবে , প্যারেন্ট ডিভে শেষ হবে তাহলে শুধু ফর্মে প্যারামিটার ক্যাপচার ট্রু করে দিলেই হবে। ডিফল্টভাবে এনি ইভেন্ট ক্যাপচার ফলস থাকে।
// প্যারামিটার দুইভাবেই দেয়া যায়। অব্জেক্ট আকারে দিলে যদি আদার অপশন দেয়া লাগে তাহলে দিতে হবে।
//currentTarget আর target এর মধ্যে difference হলো টার্গেট শুধুমাত্র যে বাটনের সাহায্যে ট্রিগ্রার হচ্ছে সকল এলিমেন্টের জন্যে তা প্রকাশ করে, কিন্তু currentTarget যেই এলিমেন্টগুলি ট্রিগার হচ্ছে তা আলাদাভাবে প্রকাশ করে।
//---------------------(Event deligation)--------------------------------------

const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  //e.target.style.backgroundColor = "yellow"; এইটির সমস্যা হলো প্যারেন্ট ইউএলের উপর সকল লিসেনার ন্যস্ত করা হলো,তাই li এর বাহিরে ক্লিক করলে প্যারেন্ট সহ চাইল্ডস কালারাইজ হবে।

  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.style.backgroundColor = "limegreen";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "ডটনেট";
  list.appendChild(newElement);
}

//  একাধিক এলিমেন্টের জন্য
// <span class="highlight">একটাই ইভেন্ট লিসেনার রাখা</span> এবং
// <span class="highlight">নতুন এলিমেন্ট</span> যোগ করলেও যেন লিসেনার কাজ
// করে।
//without applying event delegation, addNewElement  or for each element had needed to use several listner function which will be broaded working.To concise this work ,event delegation is helpful.

//---------------------(Debounce)----------------------------------------------

const btn = document.getElementById("btn");

function debounce(fn, delay) {
  let timeOutId;
  return function () {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

btn.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked");
  }, 2000)
);

// এখানে ক্লোজার,কলব্যাক ফাংশন ইউজ হয়েছে

//---------------------(Object.groupBy)----------------------------------------------

const languages = [
  { title: "javascript", type: "scripting" },
  { title: "java", type: "normal" },
  { title: "python", type: "scripting" },
];

const scripting_languages = Object.groupBy(languages, ({ type }) => type);
console.log(scripting_languages);

//---------------------(Memoization=>JS Optimization)--------------------------------

function add(x) {
  const sum = x + 10;
  return sum;
}

//higher order function
const memo = (func) => {
  let cache = {};
  return function (x) {
    console.log(cache);
    if (cache[x]) {
      console.log("cached result", cache);
      return cache[x];
    } else {
      console.log("result is calculated");
      const result = func(x);
      cache[x] = result;
      return result;
    }
  };
};
const calculate = memo(add);
console.log(calculate(10));
console.log(calculate(20));

//HOF=> higher order function হচ্ছে সে ফাংশন রিসিভ করে প্যারামিটার হিসেবে/ফাংশন রিটার্ন করে/ উভয়ই কাজ একইসাথে করে থাকে, memoization এর ক্ষেত্রে এইটি ইউজ হয়ে থাকে। ক্যালকুলেট ফাংশন মূলত মেমো ফাংশনে ফাংশন রিটার্ণে ১০ প্যারামিটার পাস করেছে। যদি ক্যাশে না থাকে তাহলে মেইন ফাংশন এডে তা যোগ করে মেমোতে দেখাবে প্রথমে এরপর ক্যাশে আপডেট করবে এরপর আবার নতুন সংখ্যা যোগ করতে দিলে ক্যাশের রেজাল্ট রিটার্ণ করবে।
//---------------------(Remove an HTML element)--------------------------------
//document.getElementById("singleOne").onclick = remove();
singleOne.onclick = remove;

function remove() {
  this.remove();
}

const texts = document.querySelectorAll(".whole");
for (let text of texts) {
  text.onclick = deleteSelected;
}
function deleteSelected() {
  this.remove();
}

const divs = document.querySelectorAll(".all");

for (let div of divs) {
  div.onclick = deleteSelected;
}

function deleteSelected() {
  this.remove();
}

//---------------------(Memoization=>JS Optimization)--------------------------------

const memoAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("resulting from cache");
      console.log(cache);
      return cache[value];
    } else {
      console.log("calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
const addition = memoAddition();
console.log(addition(10));
console.log(addition(20));
console.log(addition(30));

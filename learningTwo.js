//----------------------- (expertimental test) ----------------------------

let question;
let text = "";
let condition = "";
let answers;
let array = [];
let love;

const questions = [
  "What's your name?",
  "What's your father name?",
  "What's your mother name?",
  "What's your favourite color?",
  "Where you live in?",
];

document.getElementById("btnOne").onclick = function () {
  for (i = 0; i <= questions.length; i++) {
    //text += questions[i] + "<br/>";
    text = questions[Math.floor(Math.random() * i)];
  }
  //question = Math.floor(Math.random() * questions[i]);
  console.log(text);

  document.getElementById("Text").innerHTML = text;
};

// document.getElementById("btnTwo").onclick = function () {
//   while (condition == "" || condition == null) {
//     condition = document.getElementById("answer").value;
//   }
//   love = array.push[condition];
//   for (let i = 0; i <= love; i++) {
//     answers += love[i] + "<br/>";
//   }

//   document.getElementById("option").innerHTML = answers;
// };

// let arrayOne = [0, 1, 2, 3, 4, 5];

// document.getElementById("btnThree").onclick = function () {
//   answers = arrayOne + arrayOne.push[6];
//   document.getElementById("optionOne").innerHTML = answers;
// };

//----------------------- (expertimental test-2) ----------------------------

document.getElementById("btnFour").onclick = function () {
  return startProgram();
};

function startProgram() {
  let userNameSix = "Bro";
  let ageThree = 21;

  happyBirthday(userNameSix, ageThree);
}

function happyBirthday(a, b) {
  document.getElementById("myBD").innerHTML +=
    "Happy birthday to you!" + "<br />";
  document.getElementById("myBD").innerHTML +=
    "Happy birthday dear!" + "<br />";
  document.getElementById("myBD").innerHTML +=
    "You are" + b + "years old!" + "<br />";
  document.getElementById("myBD").innerHTML +=
    "Happy birthday dear!" + a + "<br />";
}

//----------------------- (expertimental test-3) ----------------------------
let textOne = "";

document.getElementById("meBtn").onclick = function () {
  textOne += document.getElementById("meValue").value + "<br/>";
  console.log(textOne);
  document.getElementById("getValue").innerHTML = textOne;
};

//----------------------- (expertimental test-4) ----------------------------

let textTwo = "";
let textThree = "";
let questionOnes = [
  "How old are you?",
  "What's your name?",
  "What's your favourite color?",
  "What's your spouse name?",
  "How many children you have?",
];

document.getElementById("meeButton").onclick = function () {
  for (let i = 0; i <= 4; i++) {
    if (i == 0) {
      textTwo = questionOnes[i];
      continue;
    }
    if (i == 1) {
      textThree = questionOnes[i];
    }

    console.log(textTwo);
    console.log(textThree);
    document.getElementById("getvalue").innerHTML = textTwo;
    document.getElementById("getvalueOne").innerHTML = textThree;
  }
};

// ----------------- (experimental test-4) -------------------
let userNameSeven = "Bro";
let items = 3;
let total = 75;

console.log("Hello", userNameSeven);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

console.log(`Hello ${userNameSeven}`);
console.log(`You Have ${items} items in your cart`);
console.log(`Your total is ${total}`);

// ----------------- (experimental test-5) -------------------

let myNum = 123456.789;
let myPercent = 0.5;
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("de-DE"); //standard  German

//myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" }); //US English
//myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" }); //Hindi
//myNum = myNum.toLocaleString("de-De", { style: "currency", currency: "EUR" }); //Standard  German
//myNum = myPercent.toLocaleString(undefined, {style: "percent",});

myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

console.log(myNum);

// ----------------- (experimental test-6) ------------------

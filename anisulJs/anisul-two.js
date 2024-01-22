const circle = document.getElementById("circle");

const observer = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        console.log(`${item.target} is visible`);
      } else {
        console.log(`${item.target} is not visible`);
      }
    });
  },
  {
    threshold: 0.5, //0.5/1
  }
);

observer.observe(circle);
//intersect objerver এর কাজ হচ্ছে পার্টিকুলার কোনো অব্জেক্ট শো করলে তখন সেটি ডিটেক্ট করা। এখানে অবজারভার কনস্ট্রাক্ট ফাংশনে,কলব্যাক ফাংশনের সাহায্যে,কতটুকু শো করলে ডিটেক্ট করবে আদার অপশন যোগ করে মূলত অবজারভার কাজ করে। এখানে ০.৫ মানে ৫০% শো করলে  ডিটেক্ট করবে আর ১ হলে সম্পুর্ণ বোঝাবে। new দিয়ে নতুন এরে বা অনেক ফাংশন ক্রিয়েট করা যায় জাভাস্ক্রিপ্টে।

//____________________________(Falsy value remove)_________________________________

const miscellinious = ["apple", null, 0, "banana", undefined, "egg"];

const resultOne = miscellinious.filter(Boolean);

console.log(resultOne);

//Boolean is a javascript function and Boolean(expression) return true and remove falsy values.

//____________________________(Convert to Boolean)_________________________________

document.write(!!"Rafiq");
document.write(!!1);
document.write(!!0);
document.write(!!null);
document.write(!!undefined + "<br>");
//____________________________(Resize an array)_________________________________

const arrOne = ["Horse", "Bird", "green", "Orange", "Pink"];

arrOne.length = 3;
document.write(arrOne + "<br>"); //"Horse", "Bird", "green"

//____________________________(Flattern an array)_________________________________

const oneLevel = ["Jaguar", ["Gamble", "Mingle"], "Naughty"];

const flattern = oneLevel.flat();

document.write(flattern + "<br>");

const multiLevel = ["Jaguar", [["Gamble", "Mingle"], "Naughty"], "Bunty"];

const flatternmulti = multiLevel.flat(Infinity);

document.write(flatternmulti + "<br>");

//____________________________(short conditionals)_________________________________
let captain = "";
if ((captain = "Mashrafi")) {
  document.write("Love" + "<br>");
}

captain = "Mashrafi" && console.log("Love Love Love");

if (captain != "Mashrafi") {
  document.write("Hate" + "<br>");
}

captain = "Mashrafi" || console.log("Hate Hate Hate" + "<br>");

//____________________________(Replace all occurance)_________________________________

const sentence =
  "React is a popular framework.You can make beautifully frontend UI by using this framework.";

document.write(sentence.replace(/framework/g, "library") + "<br>");

// //=>regular expression. g=>global means all framework words replaced by library,if not use "g",only beginning framework words will be changed.

//____________________________(Log values smartly)_________________________________
const library_1 = "React";
const library_2 = "Vue";

console.log(`library1-${library_1}`);
console.log(`library2-${library_2}`);

//This is short form

console.log({ library_1 });
console.log({ library_2 });

//____________________________(Performance time of task)_____________________________

const start = performance.now();
for (let i = 0; i <= 50; i++) {
  console.log(i);
}
const finish = performance.now();

document.write(`Loop take ${finish - start} miliseconds`);
//____________________________(conversion to number)_____________________________
const number = document.querySelector("#number").valueAsNumber;
console.log(number);
console.log(typeof number);
// the input value always string whatever you type on. parseInt as well as valueAsNumber both are converting any value to number type.
//____________________________(duplicate value remove)_____________________________

const array = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 7, 8, 9, 9, 10];

const uniqueArr = [...new Set(array)];
console.log(uniqueArr);
// duplicate value removed by new Set method and spreading unique value in a new array.

//_________________________(compare two arrays by value)_____________________________

const compareArr = (a, b) => {
  return a.length == b.length && a.every((v, i) => v == b[i]);
};

console.log(compareArr([3, 4], [5, 6]));
console.log(compareArr([1, 2], [1, 2]));

//___________________________(array shuffeling)______________________________________

const array_two = [3, 4, 5, 6, 2, 1, 7];

const array_shuffel = array_two.sort(() => Math.random() - 0.5); // sometime positive random number show,sometime negetive random number show. Math.random by default show between 0-1 positive number, that's why -0.5 which denotes any positive float number(0-1) minus 0.5 and negetive random number sort out the array of every two values.
console.log(array_shuffel);

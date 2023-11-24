const squares = document.querySelectorAll("div");

console.log(squares.length);

const observerOne = new IntersectionObserver((squares) => {
  squares.forEach((square) => {
    if (square.isIntersecting) {
      square.target.classList.add("visible");
    } else {
      square.target.classList.remove("visible");
    }
  });
});

squares.forEach((square) => observerOne.observe(square));

//যখনই ইন্টারসেকট হবে ডিভ,তখনই ভিজিবল ক্লাস এড করে এনিমেশনের সাহায্যে সেটি শো করবে। আমরা ইন্সপেক্ট করে এলিমেন্ট থেকে তা দেখতে পায়।

const boxes = document.getElementById("boxes");

function addBox() {
  const element = document.createElement("div");
  element.innerHTML = "Hello there";
  element.classList.add("box-one");
  let append = boxes.appendChild(element);
  localStorage.setItem("box", append);
}
boxes.localStorage.getItem("box");

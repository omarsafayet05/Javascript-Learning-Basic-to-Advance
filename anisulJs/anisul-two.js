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

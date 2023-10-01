function CalculateFraction() {
  var inputNumber = Number(document.getElementById("inputNumber").value);

  if (validateFractionCalculator(inputNumber)) {
    alert("Start Calculate");
  }
}
function validateFractionCalculator(inputNumber) {
  if (inputNumber <= 0) {
    alert("Please enter the valid Number");
    return false;
  }
  return true;
}

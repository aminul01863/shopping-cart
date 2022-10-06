// case pales

function updateCaseNumber(isIncrease) {
  const caseInput = document.getElementById("case-input");
  const caseInputString = caseInput.value;
  const caseValue = parseInt(caseInputString);
  let totalValue;
  if (isIncrease === true) {
    totalValue = caseValue + 1;
  } else {
    totalValue = caseValue - 1;
  }
  caseInput.value = totalValue;
  return totalValue;
}

function updateCaseValue(value) {
  const price = value * 59;
  const caseValue = document.getElementById("case-price");
  caseValue.innerText = price;
}

function totalElement(element) {
  const phonePrice = document.getElementById(element);
  const phoneString = phonePrice.innerText;
  const phoneTotalPrice = parseInt(phoneString);
  return phoneTotalPrice;
}
function subTotal() {
  const phoneTotal = totalElement("phone-price");
  const caseTotal = totalElement("case-price");
  const subTotal = caseTotal + phoneTotal;
  console.log(subTotal);
  const subTotalValue = document.getElementById("sub-total");
  subTotalValue.innerText = subTotal;
  const tax = subTotal * 0.1;
}

document.getElementById("case-plus").addEventListener("click", function () {
  const value = updateCaseNumber(true);
  updateCaseValue(value);
  subTotal();
});
document.getElementById("case-minus").addEventListener("click", function () {
  const value = updateCaseNumber(false);
  updateCaseValue(value);
  subTotal();
});

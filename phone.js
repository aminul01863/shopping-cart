function phoneNumber(isIncrease) {
  const phoneInput = document.getElementById("phone-input");
  const phoneInputString = phoneInput.value;
  const phoneInputValue = parseInt(phoneInputString);

  let totalPhone;
  if (isIncrease === true) {
    totalPhone = phoneInputValue + 1;
  } else {
    totalPhone = phoneInputValue - 1;
  }
  phoneInput.value = totalPhone;
  return totalPhone;
}

function phonePrice(price) {
  const phonePrice = document.getElementById("phone-price");
  const totalPrice = price * 1219;
  phonePrice.innerHTML = totalPrice;
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
  const subTotalValue = document.getElementById("sub-total");
  subTotalValue.innerText = subTotal;
  const total = document.getElementById("total");
  total.innerText = subTotal;
}

document.getElementById("phone-plus").addEventListener("click", function () {
  const value = phoneNumber(true);
  phonePrice(value);
  subTotal();
});
document.getElementById("phone-minus").addEventListener("click", function () {
  const value = phoneNumber(false);
  phonePrice(value);
  subTotal();
});

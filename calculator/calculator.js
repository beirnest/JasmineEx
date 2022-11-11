window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const inputs = getCurrentUIValues();
  inputs.amount = 25000;
  inputs.years = 3;
  inputs.rate = 12;
  document.getElementById("loan-amount").value = inputs.amount;
  document.getElementById("loan-years").value = inputs.years;
  document.getElementById("loan-rate").value = inputs.rate;
  calculateMonthlyPayment(inputs);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const inputs = getCurrentUIValues();
  document.getElementById("loan-amount").value = inputs.amount;
  document.getElementById("loan-years").value = inputs.years;
  document.getElementById("loan-rate").value = inputs.rate;
  let monthlyPayment = calculateMonthlyPayment(inputs);
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  return (values.amount * ((values.rate / 100) / 12))/(1-(Math.pow((1 + (values.rate/100)/12), -values.years * 12)));
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  paymentText = document.getElementById("monthly-payment");
  paymentText.innerText = monthly.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
  const commonAccountCurrentAmount = document.getElementById(
    "commonAccountCurrentAmount"
  );
  const commonAccountTotalGoal = document.getElementById(
    "commonAccountTotalGoal"
  );
  const inputPerson1 = document.getElementById("inputPerson1");
  const inputPerson2 = document.getElementById("inputPerson2");
  const result1 = document.getElementById("result1");
  const result2 = document.getElementById("result2");
  const form = document.getElementById("form");

  function isValid(val) {
    return val > 0;
  }

  function sanitizeInput(val) {
    return val.replace(/\s+/g, "").replace(/\D+/g, "");
  }

  function calculate(e) {
    e.preventDefault();
    const amountToDeposit =
      parseInt(commonAccountTotalGoal.value) -
      parseInt(commonAccountCurrentAmount.value);

    const val1 = parseInt(sanitizeInput(inputPerson1.value));
    const val2 = parseInt(sanitizeInput(inputPerson2.value));

    if (!isValid(amountToDeposit) || !isValid(val1) || !isValid(val2)) {
      return;
    }

    const total = val1 + val2;
    const noToPay1 = (val1 / total) * amountToDeposit;
    const noToPay2 = (val2 / total) * amountToDeposit;
    const percentage1 = (val1 / total) * 100;
    const percentage2 = (val2 / total) * 100;
    const string1 =
      Math.round(noToPay1) + "kr (" + Math.round(percentage1) + "%)";
    const string2 =
      Math.round(noToPay2) + "kr (" + Math.round(percentage2) + "%)";

    result1.innerHTML = string1;
    result2.innerHTML = string2;
    result1.classList.add("visible");
    result2.classList.add("visible");
  }

  function attachSanitizeHandlers(inputEl) {
    inputEl.addEventListener("paste", (event) => {
      event.preventDefault();
      const pastedText = (event.clipboardData || window.clipboardData).getData(
        "text"
      );
      inputEl.value = sanitizeInput(pastedText);
    });
  }

  attachSanitizeHandlers(document.querySelector("#inputPerson1"));
  attachSanitizeHandlers(document.querySelector("#inputPerson2"));

  form.addEventListener("submit", calculate);
});

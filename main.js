document.addEventListener("DOMContentLoaded", function() {

  const goal = document.getElementById('goal');
  const person1 = document.getElementById('person1');
  const person2 = document.getElementById('person2');
  const result1 = document.getElementById('result1');
  const result2 = document.getElementById('result2');
  const form = document.getElementById('form');

  function isValid(val) {
    return val > 0;
  }

  function calculate(e) {
    e.preventDefault();
    const goalVal = parseInt(goal.value);
    const val1 = parseInt(person1.value);
    const val2 = parseInt(person2.value);

    if (!isValid(goalVal) ||
        !isValid(val1) ||
        !isValid(val2)
      ) {
      return;
    }

    const total = val1 + val2;
    const noToPay1 = (val1/total) * goalVal;
    const noToPay2 = (val2/total) * goalVal;
    const percentage1 = (val1/total) * 100;
    const percentage2 = (val2/total) * 100;
    const string1 = Math.round(noToPay1) + 'kr (' + Math.round(percentage1) + '%)';
    const string2 = Math.round(noToPay2) + 'kr (' + Math.round(percentage2) + '%)';

    result1.innerHTML = string1;
    result2.innerHTML = string2;
  }

  form.addEventListener('submit', calculate);


});
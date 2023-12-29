const count = document.getElementById('count');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

let accumulator = 0;

function add() {
  accumulator += 1;
  count.textContent = accumulator;
  if(accumulator > 0) {
    count.style.color = '#65B741';
  }else if(accumulator == 0) {
    count.style.color = '#000000';
  }
}

function subtract() {
  accumulator -= 1;
  count.textContent = accumulator;
  if(accumulator < 0){
    count.style.color = '#B80000';
  }else if(accumulator == 0) {
    count.style.color = '#000000';
  }
}

function resetCount() {
  accumulator = 0;
  count.textContent = accumulator;
  count.style.color = '#000000';
}

increase.addEventListener('click', add);
decrease.addEventListener('click', subtract);
reset.addEventListener('click', resetCount);
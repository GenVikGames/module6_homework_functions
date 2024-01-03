//Задание 4

const x = prompt('Введите первое число:');
const y = prompt('Введите второе число:');

function twoNumber(x, y) {
    let intervalId = setInterval(function() {
      console.log(x++);
      if (x > y) clearInterval(intervalId);
    }, 1000);
  }
  
  twoNumber(x, y);
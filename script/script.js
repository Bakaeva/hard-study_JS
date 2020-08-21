'use strict';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// task 1:
let arr = [];
let elem;
for (let i = 0; i < 7; i++) {
  do {
    elem = prompt('Многозначное число arr[' + i + '] = ');
  } while (!isNumber(elem));
  arr[i] = elem;
}
console.log('Введён массив: ' + arr.toString());

for (let i = 0; i < arr.length; i++) {
  let firstChar = arr[i].substr(0, 1);
  if (firstChar === '2' || firstChar === '4')
    console.log(arr[i]);
}

// task 2:
function isPrimeNumber(n) {
  if (!isNumber(n)) {
    alert('Тип полученного аргумента не является числом!');
    return false; // не число
  }
  n = parseFloat(n);
  if (n < 2 || n % 1 !== 0)
    return false; // число < 2 или дробное
  for (let i = 2; i < n; i++) {
    if (n % i === 0)
      return false; // есть ещё делители, кроме 1 и самого числа
  }
  return true;
}

for (let i = 1; i < 101; i++) {
  if (isPrimeNumber(i)) {
    console.log(i, 'Делители: 1 и ' + i);
  }
}
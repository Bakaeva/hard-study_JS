'use strict';

let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

const today = new Date();
let indexOfToday = today.getDay();
let dayOfToday = indexOfToday === 0 ? week[6] : week[indexOfToday - 1];

for (let item of week) {
  if (item === 'суббота' || item === 'воскресенье')
    console.log('%c' + item, 'font-style: italic;');
  else if (item === dayOfToday)
    console.log('%c' + item, 'font-weight: bold;');
  else
    console.log(item);
}
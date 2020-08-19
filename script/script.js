let lang = 'en'; // предполагаем, что возможно только одно из 2-х значений: 'ru' или 'en'
let weekDaysRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let weekDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// task 1a:
console.log('  with IF:');
if (lang === 'ru')
  console.log(weekDaysRu.toString());
else // if (lang === 'en')
  console.log(weekDaysEn.toString());

// task 1b:
console.log('  with SWITCH:');
switch (lang) {
  case 'ru':
    console.log(weekDaysRu.toString());
    break;
  case 'en':
    console.log(weekDaysEn.toString());
    break;
    //default:
}

// task 1c:
console.log('  with OBJECT:');
let weekDays = {
  'ru': weekDaysRu,
  'en': weekDaysEn
};
let weekDaysString = '';
for (let i = 0; i < 7; i++)
  weekDaysString += weekDays[lang][i] + ',';
console.log(weekDaysString.substr(0, weekDaysString.length - 1));

// task 2:
let namePerson = prompt('Введите имя');
if (namePerson === null)
  namePerson = '';
let namePersonUpCase = namePerson.toUpperCase();
console.log(namePersonUpCase === 'АРТЕМ' ? 'директор' :
  namePersonUpCase === 'МАКСИМ' ? 'преподаватель' :
  'студент');
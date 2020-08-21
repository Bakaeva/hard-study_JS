'use strict';

function testFunc(str) {
  if (typeof str !== "string") {
    alert('Тип полученного аргумента не является строкой!');
    return null;
  }
  let strTrim = String(str).trim();
  return strTrim.length > 30 ? strTrim.substr(0, 30) + '...' : strTrim;
}

console.log(testFunc('012345678901234567890123456789'));
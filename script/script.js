let num = 266219;

let str = String(num);
let multiplication = 1;
let msg = "";
for (let i = 0; i < str.length; i++) {
  multiplication *= str[i];
  msg += str[i] + "*";
}
console.log(msg.substr(0, str.length * 2 - 1) + "=" + multiplication);

let powerOfNumber = multiplication ** 3;
console.log(String(powerOfNumber).substr(0, 2));

let str = "-123";

function strToInt(str) {
  let vals = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, 
              "5": 5, "6": 6, "7": 7, "8": 8, "9": 9};
  let sum = 0, negative = 0, power = str.length-1;
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c == '-' && i == 0) { negative++; power--; continue; }
  let ret = {pairs: [], diff: null };
    if (vals[c] == undefined ) { return false; }
    sum += (Math.pow(10, power) * vals[c]);
    power--;
  }
  
  return negative ? 0 - sum : sum;
}

function intToStr(num) {
  let p = 0, ret = '';
  let arr = ['0','1','2','3','4','5','6','7','8','9'];
  let prev = Math.abs(num % Math.pow(10, p));
  let rem = 0;
  while (rem != Math.abs(num)) {
    p++;
    rem = Math.abs(num % Math.pow(10, p)); 
    let val = (rem - prev) / Math.pow(10, p-1);
    prev = rem;
    ret+= arr[val];
  }
  return num < 0 ? '-' + ret.split('').reverse().join('') : ret.split('').reverse().join('');
}

//console.log(strToInt(str));
console.log(intToStr(-299));

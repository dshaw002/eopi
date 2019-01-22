function bconvert(str, b1, b2) {
  if (str.length < 1) { return str; }
  let ke = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
            '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
            'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15};
  let num = 0;
  let pow = 0;
  // convert b1 to b10
  for (let i = str.length-1; i >= 0; i--,pow++) {
    num += (ke[str[i]] * Math.pow(b1, pow));
  }
  
  let ret = [];
  let ar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  // convert b10 to b2
  while (num != 0) {
    ret.push(ar[num % b2]);
    num = Math.floor(num / b2);
  }
  // return
  return ret.reverse().join('');
}

console.log(bconvert('615',7,13));

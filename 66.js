function buysell(arr) {
  if (arr.length < 2) { return null; }
  let max = arr[arr.length-1];
  let ret = {
    pair: [arr[arr.length-2], max], 
    diff: max - arr[arr.length-2]
  };
  for (let i = arr.length-3; i >= 0; i--) {
    if (arr[i] > max) { max = arr[i]; continue; }
    if (max - arr[i] > ret.diff) {
      ret.diff = max - arr[i];
      ret.pair = [arr[i], max];
    }
  }
  return ret;
}

console.log(buysell([310,315,275,295,260,270,290,230,255,250]));

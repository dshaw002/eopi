let arr = [0,1,2,0,2,1,1];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

function dutch(arr, ind) {
  let val = arr[ind];
  let i = 0, lo = 0, hi = arr.length - 1;
  while (i < hi) {
    if (arr[i] < val) { swap(arr, i, lo); i++; lo++; }
    else if (arr[i] > val) { swap(arr, i, hi); hi--; }
    else { i++; }
  }
  return arr;
}

console.log(dutch(arr,1));

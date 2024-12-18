// function que reciba un array de numeros y devuleva la suma de los numeros del array.
// [1, 2, 3, 4, 5] -> 1 + 2 + 3 + 4 + 5 = 15

function sum(arr) {
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
}

console.log(sum([1, 2, 3, 4, 5]));

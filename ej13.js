// funcion que reciba un array de números y devuelva un array de los mismos nñumeros pero ordenados de forma descendente
// sin usar los métodos de ordenación antivos de javascript (Array::sort)

function desc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = i + 1; x < arr.length; x++) {
      if (arr[i] < arr[x]) {
        [arr[i], arr[x]] = [arr[x], arr[i]]; //---> (--)
      }
    }
  }
  return arr;
}

console.log(desc([2, 5, 1, 4, 9, 10]));

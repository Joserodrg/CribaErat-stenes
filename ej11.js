/* funcion que reciba un array, un nuevo elemento y un índice y devuelva un nuevo array con 
el array recibido mas el elemento recibido en la posición indicada
 */

//?--> slice()


function index(arr, element, ind) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === ind) {
      newArray.push(element); 
    }
    
      newArray.push(arr[i]); 
  }
  
  return newArray;
}

console.log(index([5, 2, 67, 8, 9, 56, 87], 1, 4));

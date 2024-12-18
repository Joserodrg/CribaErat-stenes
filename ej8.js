// function que reciba un array de numeros y un numero y devuelva un nuevo array con los valores del array recibido multiplicados 
// por el número recibido
// [4, 6, 8], 5 -> [20, 30, 40]

function multArr (arr, n){
    const multipArray = [];
    for (let i = 0; i < arr.length; i++){
        multipArray.push(arr[i] * n);
    }
    return multipArray;
}

console.log(multArr([4, 6, 8], 5));
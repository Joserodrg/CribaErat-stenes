// function que reciba un array de numeros y devuleva el numero mas alto.
// [4,8,3,6,8] -> 8



function maxNum(arr) {
    let num = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num ){
        num = arr[i]
      }
    }
    return num;
  }
  
  console.log(maxNum([-4,-8,-3,-6,-8,-2]))
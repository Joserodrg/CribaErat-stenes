function criba(n) {
  let primos = [];

  for (let i = 2; i <= n; i++) {
    primos[i] = true;
  }

  for (let i = 2; i * i <= n; i++) {
    if (primos[i]) {
      for (let x = i * i; x <= n; x += i) {
        primos[x] = false;
      }
    }
  }

  let res = [];
  for (let i = 2; i <= n; i++) {
    if (primos[i]) res.push(i);
  }

  return res;
}

//-----------------------------------------------------//

function descFactoresPrimos(a, b) {
  let numMax;
  if (a > b) {
    numMax = a;
  } else {
    numMax = b;
  }

  // console.log(numMax); //---> ok

  const primos = criba(numMax);
  // console.log(primos); //---> ok

  const primosNum1 = [];
  const primosNum2 = [];

  for (let i = 0; i < primos.length; i++) {
    if (a % primos[i] === 0) {
      primosNum1.push(primos[i]);
    }
  }

  for (let i = 0; i < primos.length; i++) {
    if (b % primos[i] === 0) {
      primosNum2.push(primos[i]);
    }
  }

  console.log(primosNum1);
  console.log(primosNum2);

  // console.log(primosNum1, primosNum2);

  return primosNum1, primosNum2;
}

descFactoresPrimos(256, 546);

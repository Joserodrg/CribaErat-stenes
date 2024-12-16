// Criba de Eratóstenes

function criba(n) {
    
  let primos = [];
  for (let i = 2; i <= n; i++) {
    primos[i] = true;
  }


    for (let i = 2; i <= n; i++) {
      if (primos[i]) {
        for (let x = 2; x * x <= n; x++) {
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
  

console.log(criba(8));

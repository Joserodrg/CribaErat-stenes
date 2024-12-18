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
  
  function descFactoresPrimos(a, b) {
    const max = Math.max(a, b); // El número más grande entre 'a' y 'b'
    const primos = criba(max); // Obtenemos todos los primos hasta 'max'
  
    const factoresPrimosA = [];
    const factoresPrimosB = [];
  
    let numA = a;
    let numB = b;
  
    // Descomponemos 'a' usando los números primos
    for (let primo of primos) {
      while (numA % primo === 0) {
        factoresPrimosA.push(primo);
        numA /= primo;
      }
    }
  
    // Descomponemos 'b' usando los números primos
    for (let primo of primos) {
      while (numB % primo === 0) {
        factoresPrimosB.push(primo);
        numB /= primo;
      }
    }
  
    console.log(`Factores primos de ${a}:`, factoresPrimosA);
    console.log(`Factores primos de ${b}:`, factoresPrimosB);
  
    return { a: factoresPrimosA, b: factoresPrimosB };
  }
  
  descFactoresPrimos(8, 4);
  
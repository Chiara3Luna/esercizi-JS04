function calcolaMediaValori(array) {
    
    const media = array.reduce((acc, num) => acc + num, 0) / array.length;
    const valoriMinori = array.filter(num => num < media);
    const valoriMaggiori = array.filter(num => num > media);
    const numValoriMinori = valoriMinori.length;
    const numValoriMaggiori = valoriMaggiori.length;
    
    console.log("Media =", media);
    console.log("Valori minori della media =", valoriMinori);
    console.log("Numero di valori minori della media =", numValoriMinori);
    console.log("Numero di valori maggiori della media =", numValoriMaggiori);
    
    return valoriMinori;
}

const a = [3, 5, 10, 2, 8];
const valoriMinori = calcolaMediaValori(a);

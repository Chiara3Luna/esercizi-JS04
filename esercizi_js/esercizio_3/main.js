function ordineAlfabeticoCapovolto(array) {
    return array.sort().reverse();
}

const arr = ['Matteo', 'Anakin', 'Luke', 'ObiWan'];
const output = ordineAlfabeticoCapovolto(arr);
console.log(output);

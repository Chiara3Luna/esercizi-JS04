function numeriMultipliDiDieci(array) {
    return array.filter(num => num % 10 === 0);
}

const arr = [1, 10, 56, 130, 45];
const output = numeriMultipliDiDieci(arr);

console.log(output);






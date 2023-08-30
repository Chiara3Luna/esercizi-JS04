function calcolaOperazione(arrayA, arrayB, operazione) {
    const arrayC = [];
    
    for (let i = 0; i < arrayA.length; i++) {
        let risultato;
        
        switch (operazione) {
            case "addizione":
            risultato = arrayA[i] + arrayB[i];
            break;
            case "sottrazione":
            risultato = arrayA[i] - arrayB[i];
            break;
            case "moltiplicazione":
            risultato = arrayA[i] * arrayB[i];
            break;
            case "divisione":
            risultato = arrayA[i] / arrayB[i];
            break;
            default:
            console.log("Operazione non valida");
            return [];
        }
        
        arrayC.push(risultato);
    }
    
    return arrayC;
}

const arrayA = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
const arrayB = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];
const operazione = "addizione";
const risultato = calcolaOperazione(arrayA, arrayB, operazione);
console.log(risultato);


// iprastine funkcijos forma/sintakse
function sudetis(a, b) {
    return a + b;
}
console.log(sudetis(8, 5));

// logikos priskirimas kintamajam
const skirtumas = function (a, b) { // kintamajam priskyriau 
    return a - b;                   // funkcija be pavadinimo               
}
console.log(skirtumas(8, 5));


// arrow function (rodykline funkcija)
const sandauga = (a, b) => { //istrintu function ir prirasau =>
    return a * b;
}
console.log(sandauga(8, 5));


// arrow function, kai proceduru (logikos) yra tik viena t.y. viena eilute kodo 
const dalmuo = (a, b) => a / b;  // istrinu { } ir istrinu return

console.log(dalmuo(8, 5));

// arrow function, kai turimas tik vienas parametras
const kvadratu = a => a * a;   // parametras rasomas be skliaustu ()

console.log(kvadratu(8));
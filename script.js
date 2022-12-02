const cenaTowaru = parseFloat(prompt(`Podaj cene na ideus`));
let vat = parseFloat(prompt(`Podaj ilość procentu VAT`));
let wynik = (cenaTowaru * vat) / 100;
let sumaPoDodaniuVat = (wynik + cenaTowaru);
let sumaPoDodaniuVat2 = parseFloat(prompt(`Podaj ilość procentu marży`));
let sumaKonicowa = (sumaPoDodaniuVat2 * sumaPoDodaniuVat) / 100; 
let cenaAllegro = sumaKonicowa + sumaPoDodaniuVat;
alert(cenaAllegro.toFixed(2));
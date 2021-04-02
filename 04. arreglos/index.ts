// Arreglos
const items = [2,3,5,6,7];

const nombres:string[] = ['Marcos', 'Lena', 'Sergio', 'John'];

const edades:Array<number> = [10,14,22,34];

edades.push(3,5,6,1,23);

const res = nombres.filter(nombre => nombre.startsWith('Ser'));

let tupla:[string, number] = ['Marcos', 28];
let tupla2:(string | number)[] = ['Marcos', 28, 28,12];

//tupla = ['John', false];
tupla = ['John', 35];

let arrTuplas: [string, number][] = [
    ['Marcos', 28],
    ['John', 34],
];

arrTuplas.push(['Lena', 29]);



import  { fuggvenyem } from "./main.js"

/* hozz létre teszteseket */ 
let szam = 1234;
let vart = 4321;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
    );


szam = 0;
vart = 0;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);

szam = 00;
vart = 00;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);

szam =23.4;
vart = 4.32;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);


szam = -1234;
vart = -4321;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);


szam = „12345”;
vart = "hibaüzenet";
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);


szam = Number.MAX_SAFE_INTEGER;
vart = 199047529917009;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);

szam = Number.MIN_SAFE_INTEGER;
vart = -199047529917009;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);

szam = null;
vart = 0;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
);

szam = 100;
vart = 1;
console.log(
    `szám: ${szam}, várt: ${vart}, eredmény: ${vart==fuggvenyem(szam)} `
)



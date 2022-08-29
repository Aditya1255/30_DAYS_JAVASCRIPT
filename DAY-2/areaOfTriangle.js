let side1 = 6;
let side2 = 9;
let side3 = 5;

let per = (side1 + side2 + side3)/2;
let temp = per*(per-side1)*(per-side2)*(per-side3);
let area = Math.sqrt(temp);
console.log(area);
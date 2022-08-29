let billValue1 = 275;
let billValue2 = 40;
let billValue3 = 430;

let tip = 0;

(billValue1 > 50 && billValue1<300)? tip = tip + (15*billValue1)/100 : tip = tip + (20*billValue1)/100;
(billValue2 > 50 && billValue2<300)? tip = tip + (15*billValue2)/100 : tip = tip + (20*billValue2)/100;
(billValue3 > 50 && billValue3<300)? tip = tip + (15*billValue3)/100 : tip = tip + (20*billValue3)/100;

console.log(`The total tip is ${tip}`);
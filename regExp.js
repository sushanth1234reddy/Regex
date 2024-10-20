

let pattern=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8}/;
let input="Susha9888";
let pass2="Sushs83766663f675"

let output=pattern.test(input);
console.log(output);
let out2=pattern.test(pass2);
console.log(out2);

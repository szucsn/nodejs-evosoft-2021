// ES1-> variables. Var is function scoped
var company = 'Evosoft';

// ES6 variables
let user = 'Józsi';
const age = 33;

// Types of variables
// primitives: boolean, number, string, null, undefined, Symbol
// collections: object, array, Map, WeakMap

// Scopes
console.log(company);

function test() {
    var fnVariable = 'Laci';
    console.log(company);
}

test();
// console.log(fnVariable);
user = 'Gergely';
// Block scoped variables
{
    let user = 'Norbert';
    console.log(user);
}
console.log(user);
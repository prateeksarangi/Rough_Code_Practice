// Spread Operator
const array = [ 1, 2, 3 ];
const newArray = [ ...array, 4 ];

console.log(array);
console.log(newArray);

const person = {
  name: 'Max',
  age: 28
}

const newPerson = {
  ...person,
  height: 172.4,
  weight: 82
}

console.log(newPerson);


// Rest Operator
const filter = (...args) => {
  return args.filter(el => el === 1);
}

console.log(filter(1, 2, 4));

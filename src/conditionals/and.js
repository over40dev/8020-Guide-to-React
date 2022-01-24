let person

person = {
  name: {first: 'Jane', last: 'Doe'}
};

console.log(person && person.name && person.name.first); // 'Jane'

person = null;

console.log(person && person.name && person.name.first); // null

let shouldDisplay;

// displays String value
shouldDisplay = true;
console.log(shouldDisplay && 'Display'); // 'Display'

// displays Boolean value since first is False second part is never evaluated
shouldDisplay = false;
console.log(shouldDisplay && 'Display'); // false


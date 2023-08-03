// Array declarations

var numberArray = [10, 10, 10, 10, 7, 9];
console.log(numberArray);

// Array Length
console.log(numberArray.length);

var stringArray = ['Messi', 'Pele', 'Maradona', 'Zidane', 'Cristiano', 'Ronaldo'];
console.log(stringArray);

// Array Length
console.log(stringArray.length);

// Array Index or Get Element Value
console.log('The Greatest Player of All Time to Ever Grace the Game of Football ');
console.log(stringArray[0]);
console.log(numberArray[0]);

// Set Element Value
stringArray[5] = 'Nazario';
console.log(stringArray);

// Show Element Index
var positionOfCristiano = stringArray.indexOf('Cristiano');
console.log(positionOfCristiano);

var positionOfGOAT = stringArray.indexOf('Messi');
console.log(positionOfGOAT);

// Push() used to add new elements at the end of Array
stringArray.push('Cruyff');
stringArray.push('Mbappe');
console.log(stringArray);


// Pop() used to delete the last element of Array
stringArray.pop();
console.log(stringArray);

// Store in a variable using Pop()
stringArray.push('Dembele');
console.log(stringArray);
var dustbin = stringArray.pop();
console.log('The garbage player of all time');
console.log(dustbin);

// Adding in front of the Array
// Using unshift() method

stringArray.unshift("Lionel","Andres");
console.log(stringArray);

// Removing the first item from the Array
// Using shift() method
stringArray.unshift("John");
console.log(stringArray);

stringArray.shift();
console.log(stringArray);
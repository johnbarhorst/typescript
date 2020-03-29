const isOpen: boolean = false;

const firstName: string = 'John';

const age: number = 38;
// add [] to the end of a type for arrays of one type
const numArray: number[] = [1, 2, 3, 4, 5];
// order matters here
const tuple: [string, number] = ['string', 10];

// set an enum
enum Job { WebDeveloper, DeliveryDriver }
const job: Job = Job.WebDeveloper;

// ANYTHING GOES!
const smorgasbord: any = 'anything';

// object

const profile: object = {
  name: 'John Barhorst',
  phone: 6515552525,
}


// Variable variables and implicit types

let lastName = 'Barhorst';
lastName = 'Anastasi';

// TS knows the original was a string, so if you later try to assign it as a number
// there will be an error.

// lastName = 34; <-- causes an error, because original declaration was as a string.

// Types can be inherited, no need to declare it here.
let doppleganger = lastName;
// doppleganger = 34;  <-- would cause an error, since lastName is an implicit string.

// IF YOU MUST ALLOW A VARIABLE TO CHANGE TYPE! (Pro tip, probably don't)
// Use type of any
let changeable: any = 'Steven McBadCode';
changeable = 69;

// Even better, set Union types
let unionChangeable: string | number | boolean = 'Jimmy VonBetterOption';
unionChangeable = 42;
unionChangeable = true;


//Functions 

// Set argument type in paramaters, 
// and set the return type after paramaters.
// ? indicates optional paramater.

const typedFunction = (string?: string): number => {
  console.log(string);
  return string.length
}

// Typescript recognizes the type of a default paramater, no need to declare it.
const typedDefaultValue = function (string = 'Greetings!') {
  console.log(string);
}

// Union types as paramaters/arguments
// can take multiple types of input
const ageReport = (age: string | number): string => {
  return `Subject is ${age} years old`;
}

// Null
// Strings. Strings can be null or undefined.

let stringNullUndefined: string = 'STRING!';
stringNullUndefined = null; // No problem
stringNullUndefined = undefined; // Go right ahead, I guess.


// Interfaces... named paramaters
// interface is a typescript specific thing

interface Dog {
  name: string,
  age?: number
}

const shoutOutDog = ({ name, age }: Dog): string => {
  console.log(`Hey ${name}! You're ${age}!`);
  return name;
}

// Now arguments can be passed in any order!
shoutOutDog({
  name: 'Veyda',
  age: 12
});

// Can be used as the return types as well.
const returnDogStuff = ({ name, age }: Dog): Dog => {
  return { name, age };
}

// ENUMS

// Numeric Enum
// Using Numeric Enum returns a number.
enum EnergyType {
  None,  // 0
  Arc,   // 1
  Solar, // 2
  Void   // 3
}

console.log(EnergyType.Solar); // Logs 2

// contentType is just the paramater name, does not have to be specifically used like this.
const useEnergyType = (contentType: EnergyType): number => {
  console.log(contentType);
  return contentType;
}

useEnergyType(EnergyType.Solar); // Logs 2
useEnergyType(2); // Also logs 2, not Solar

// String Enum

// Standard is all caps. Can then use methods to get into the case you want/
enum StringEnergyTypes {
  None = 'NONE',
  Arc = 'ARC',
  Solar = 'SOLAR',
  Void = 'VOID'
}

const useStringEnergy = (energy: StringEnergyTypes): string => {
  console.log(energy);
  return energy;
}

useStringEnergy(StringEnergyTypes.None);
// useStringEnergy('NONE'); This doesn't work like it does with number enums
//  useStringEnergy(1); Nor does this.
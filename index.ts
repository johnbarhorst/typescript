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
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

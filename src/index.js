"use strict";
exports.__esModule = true;
var isOpen = false;
var firstName = 'John';
var age = 38;
// add [] to the end of a type for arrays of one type
var numArray = [1, 2, 3, 4, 5];
// order matters here
var tuple = ['string', 10];
// set an enum
var Job;
(function (Job) {
    Job[Job["WebDeveloper"] = 0] = "WebDeveloper";
    Job[Job["DeliveryDriver"] = 1] = "DeliveryDriver";
})(Job || (Job = {}));
var job = Job.WebDeveloper;
// ANYTHING GOES!
var smorgasbord = 'anything';
// object
var profile = {
    name: 'John Barhorst',
    phone: 6515552525
};
// Variable variables and implicit types
var lastName = 'Barhorst';
lastName = 'Anastasi';
// TS knows the original was a string, so if you later try to assign it as a number
// there will be an error.
// lastName = 34; <-- causes an error, because original declaration was as a string.
// Types can be inherited, no need to declare it here.
var doppleganger = lastName;
// doppleganger = 34;  <-- would cause an error, since lastName is an implicit string.
// IF YOU MUST ALLOW A VARIABLE TO CHANGE TYPE! (Pro tip, probably don't)
// Use type of any
var changeable = 'Steven McBadCode';
changeable = 69;
// Even better, set Union types
var unionChangeable = 'Jimmy VonBetterOption';
unionChangeable = 42;
unionChangeable = true;
//Functions 
// Set argument type in paramaters, 
// and set the return type after paramaters.
// ? indicates optional paramater.
var typedFunction = function (string) {
    console.log(string);
    return string.length;
};
// Typescript recognizes the type of a default paramater, no need to declare it.
var typedDefaultValue = function (string) {
    if (string === void 0) { string = 'Greetings!'; }
    console.log(string);
};
// Union types as paramaters/arguments
// can take multiple types of input
var ageReport = function (age) {
    return "Subject is " + age + " years old";
};
// Null
// Strings. Strings can be null or undefined.
var stringNullUndefined = 'STRING!';
stringNullUndefined = null; // No problem
stringNullUndefined = undefined; // Go right ahead, I guess.
var shoutOutDog = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hey " + name + "! You're " + age + "!");
    return name;
};
// Now arguments can be passed in any order!
shoutOutDog({
    name: 'Veyda',
    age: 12
});
// Can be used as the return types as well.
var returnDogStuff = function (_a) {
    var name = _a.name, age = _a.age;
    return { name: name, age: age };
};
console.log(returnDogStuff({ age: 10, name: 'Maximus' }));
// Interfaces can be imported and exported like components for reusability
var shoutOutHuman = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hey " + name + "! You're " + age + "!");
    return name;
};
console.log(shoutOutHuman({ name: 'John', age: 38 }));
// ENUMS
// Numeric Enum
// Using Numeric Enum returns a number.
var EnergyType;
(function (EnergyType) {
    EnergyType[EnergyType["None"] = 0] = "None";
    EnergyType[EnergyType["Arc"] = 1] = "Arc";
    EnergyType[EnergyType["Solar"] = 2] = "Solar";
    EnergyType[EnergyType["Void"] = 3] = "Void"; // 3
})(EnergyType || (EnergyType = {}));
console.log(EnergyType.Solar); // Logs 2
// contentType is just the paramater name, does not have to be specifically used like this.
var useEnergyType = function (contentType) {
    console.log(contentType);
    return contentType;
};
useEnergyType(EnergyType.Solar); // Logs 2
useEnergyType(2); // Also logs 2, not Solar
// String Enum
// Standard is all caps. Can then use methods to get into the case you want/
var StringEnergyTypes;
(function (StringEnergyTypes) {
    StringEnergyTypes["None"] = "NONE";
    StringEnergyTypes["Arc"] = "ARC";
    StringEnergyTypes["Solar"] = "SOLAR";
    StringEnergyTypes["Void"] = "VOID";
})(StringEnergyTypes || (StringEnergyTypes = {}));
var useStringEnergy = function (energy) {
    console.log(energy);
    return energy;
};
useStringEnergy(StringEnergyTypes.None);
// useStringEnergy('NONE'); This doesn't work like it does with number enums
//  useStringEnergy(1); Nor does this.
// CLASSES
var Team = /** @class */ (function () {
    function Team(teamName) {
        // Can't be read from outside
        this.privates = 'These are unmentionable!';
        // standard stuff
        this.score = 0;
        // Read only from outside
        this.description = 'This is THE team to be!';
        this.teamName = teamName;
    }
    Team.prototype.increaseScore = function () {
        return this.score += 1;
    };
    Team.prototype.displayScore = function () {
        console.log(this.score);
        return this.score;
    };
    return Team;
}());
var Maximuses = new Team('Maximuses');
console.log(Maximuses.description); // Can still be read outside;
// Maximuses.description = 'Greatest Moose Ever';  This can't be changed since it's read only
// console.log(Maximuses.privates); // No can do!
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();

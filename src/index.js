"use strict";
exports.__esModule = true;
var isOpen = false;
var firstName = 'John';
var age = 38;
var numArray = [1, 2, 3, 4, 5];
var tuple = ['string', 10];
var Job;
(function (Job) {
    Job[Job["WebDeveloper"] = 0] = "WebDeveloper";
    Job[Job["DeliveryDriver"] = 1] = "DeliveryDriver";
})(Job || (Job = {}));
var job = Job.WebDeveloper;
var smorgasbord = 'anything';
var profile = {
    name: 'John Barhorst',
    phone: 6515552525
};
var lastName = 'Barhorst';
lastName = 'Anastasi';
var doppleganger = lastName;
var changeable = 'Steven McBadCode';
changeable = 69;
var unionChangeable = 'Jimmy VonBetterOption';
unionChangeable = 42;
unionChangeable = true;
var typedFunction = function (string) {
    console.log(string);
    return string.length;
};
var typedDefaultValue = function (string) {
    if (string === void 0) { string = 'Greetings!'; }
    console.log(string);
};
var ageReport = function (age) {
    return "Subject is " + age + " years old";
};
var stringNullUndefined = 'STRING!';
stringNullUndefined = null;
stringNullUndefined = undefined;
var shoutOutDog = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hey " + name + "! You're " + age + "!");
    return name;
};
shoutOutDog({
    name: 'Veyda',
    age: 12
});
var returnDogStuff = function (_a) {
    var name = _a.name, age = _a.age;
    return { name: name, age: age };
};
console.log(returnDogStuff({ age: 10, name: 'Maximus' }));
var shoutOutHuman = function (_a) {
    var name = _a.name, age = _a.age;
    console.log("Hey " + name + "! You're " + age + "!");
    return name;
};
console.log(shoutOutHuman({ name: 'John', age: 38 }));
var EnergyType;
(function (EnergyType) {
    EnergyType[EnergyType["None"] = 0] = "None";
    EnergyType[EnergyType["Arc"] = 1] = "Arc";
    EnergyType[EnergyType["Solar"] = 2] = "Solar";
    EnergyType[EnergyType["Void"] = 3] = "Void";
})(EnergyType || (EnergyType = {}));
console.log(EnergyType.Solar);
var useEnergyType = function (contentType) {
    console.log(contentType);
    return contentType;
};
useEnergyType(EnergyType.Solar);
useEnergyType(2);
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
var Team = (function () {
    function Team(teamName) {
        this.privates = 'These are unmentionable!';
        this.score = 0;
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
console.log(Maximuses.description);
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();
var outputInput = function (arg) {
    return arg;
};
var Dancer = (function () {
    function Dancer() {
    }
    return Dancer;
}());
var Lisa = new Dancer();
var info = {
    name: 'Lisa',
    age: 23
};
Lisa = info;

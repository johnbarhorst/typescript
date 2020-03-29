// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
var typedFunction = function typedFunction(string) {
    console.log(string);
    return string.length;
};
// Typescript recognizes the type of a default paramater, no need to declare it.
var typedDefaultValue = function typedDefaultValue(string) {
    if (string === void 0) {
        string = 'Greetings!';
    }
    console.log(string);
};
// Union types as paramaters/arguments
// can take multiple types of input
var ageReport = function ageReport(age) {
    return "Subject is " + age + " years old";
};
// Null
// Strings. Strings can be null or undefined.
var stringNullUndefined = 'STRING!';
stringNullUndefined = null; // No problem
stringNullUndefined = undefined; // Go right ahead, I guess.
var shoutOutDog = function shoutOutDog(_a) {
    var name = _a.name,
        age = _a.age;
    console.log("Hey " + name + "! You're " + age + "!");
    return name;
};
// Now arguments can be passed in any order!
shoutOutDog({
    name: 'Veyda',
    age: 12
});
// Can be used as the return types as well.
var returnDogStuff = function returnDogStuff(_a) {
    var name = _a.name,
        age = _a.age;
    return { name: name, age: age };
};
console.log(returnDogStuff({ age: 10, name: 'Maximus' }));
// Interfaces can be imported and exported like components for reusability
var shoutOutHuman = function shoutOutHuman(_a) {
    var name = _a.name,
        age = _a.age;
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
var useEnergyType = function useEnergyType(contentType) {
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
var useStringEnergy = function useStringEnergy(energy) {
    console.log(energy);
    return energy;
};
useStringEnergy(StringEnergyTypes.None);
// useStringEnergy('NONE'); This doesn't work like it does with number enums
//  useStringEnergy(1); Nor does this.
// CLASSES
var Team = /** @class */function () {
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
}();
var Maximuses = new Team('Maximuses');
console.log(Maximuses.description); // Can still be read outside;
// Maximuses.description = 'Greatest Moose Ever';  This can't be changed since it's read only
// console.log(Maximuses.privates); // No can do!
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();
Maximuses.increaseScore();
Maximuses.displayScore();
},{}],3:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58366' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[3,4], null)
//# sourceMappingURL=/typescript.84eaec6e.map
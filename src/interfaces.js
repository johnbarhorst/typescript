"use strict";
exports.__esModule = true;
// Can't export as default in line.
var ExportType;
(function (ExportType) {
    ExportType["Zero"] = "ZERO";
    // 1 = 'ONE' Doesn't seem like you can name it a number
    ExportType["One"] = "ONE";
})(ExportType || (ExportType = {}));
// Would have to be done this way.
exports["default"] = ExportType;

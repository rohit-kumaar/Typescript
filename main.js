"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "Rohit";
var n = null;
var u = undefined;
var isNuw = null;
var myNumber = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
// Tuple
var person1 = [
    "Rohit",
    10,
]; /* you can't swap the initialized array value */
// =====================================
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// =====================================
var randomValue = 10;
randomValue = true;
randomValue = "Rohit";
// ===================================
var myVariable = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
// ============================================
function add(num1, num2) {
    // if (num2) {
    //   return num1 + num2;
    // } else {
    //   return num1;
    // }
    return num2 ? num1 + num2 : num1;
}
console.log(add(5, 5));
console.log(add(5));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: "Wayne"
};
fullName(p);
// ====================================
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning, Ms. ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Rohit Kumar");
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Tony Stark");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

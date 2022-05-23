export {};
let message = "Hello World";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Rohit";

let n: null = null;
let u: undefined = undefined;

let isNuw: boolean = null;
let myNumber: string = undefined;

let list1: number[] = [1, 2, 3, 4, 5];
let list2: Array<number> = [1, 2, 3, 4, 5];

// Tuple
let person1: [string, number] = [
  "Rohit",
  10,
]; /* you can't swap the initialized array value */

// =====================================
enum Color {
  Red = 5,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);
// =====================================
let randomValue: any = 10;
randomValue = true;
randomValue = "Rohit";

// ===================================
let myVariable: unknown = 10;
function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hasName(myVariable)) {
  console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

// ============================================
function add(num1: number, num2?: number): number {
  // if (num2) {
  //   return num1 + num2;
  // } else {
  //   return num1;
  // }
  return num2 ? num1 + num2 : num1;
}
console.log(add(5, 5));
console.log(add(5));

// ======================================

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "Wayne",
};

fullName(p);

// ====================================

class Employee {
  public employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good Morning, Ms. ${this.employeeName}`);
  }
}

let emp1 = new Employee("Rohit Kumar");
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}

let m1 = new Manager("Tony Stark");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

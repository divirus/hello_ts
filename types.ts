let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

/*
let strArray: string[];
let numArray: number[];
let boolArray: boolean[];
*/

let strArray: Array<string>;
let numArray: Array<number>;
let boolArray: Array<boolean>;

let strNumTuple: [string, number];

let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

myString = 'Hello'+' '+'World'.slice(0, 3);
myNum = 22;
myBool = true;
myVar = 5;

strArray = ['Hello', 'World'];
numArray = [1, 2, 3, 4, 5];
boolArray = [true, false, false, true];

strNumTuple = ['one', 1];

// console.log(myString, myNum, myBool, myVar);
// console.log(strArray);
// console.log(numArray);
// console.log(boolArray);
// console.log(strNumTuple);
// console.log(myVoid);
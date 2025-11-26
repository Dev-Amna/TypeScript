"use strict";
// // // string used for text
// // let name: string = "Amna";
// // console.log("Hello  ", name);
Object.defineProperty(exports, "__esModule", { value: true });
function greet(value, value2) {
    if (typeof value === "string" && typeof value2 === "undefined") {
        console.log(`Hello ${value}`);
    }
    else if (typeof value === "number" && typeof value2 === "undefined") {
        console.log(`You are ${value} year old.`);
    }
    else if (typeof value === "string" && typeof value2 === "number") {
        console.log(`Hello ${value}, you are ${value2} years old.`);
    }
    else {
        throw new Error("Invail Input! Please try again");
    }
}
greet("Amna");
greet(16);
greet("AMna", 16);
//  
//# sourceMappingURL=app.js.map
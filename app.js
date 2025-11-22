"use strict";
// // // string used for text
// // let name: string = "Amna";
// // console.log("Hello  ", name);
Object.defineProperty(exports, "__esModule", { value: true });
function greet(value) {
    if (typeof value === "string") {
        console.log(`Hello ${value}`);
    }
    if (typeof value === "number") {
        console.log(`You are ${value} year old.`);
    }
}
greet("Amna");
greet(16);
//# sourceMappingURL=app.js.map
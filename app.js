// // // string used for text
// // let name: string = "Amna";
// // console.log("Hello  ", name);
// // // number
// // let age: number = 16;
// // console.log("my age is ", age);
// // // boolean type
// // let isDevelpor: boolean = true;
// // let isLayer: boolean = false;
// // // create a array of numbers use []
// // let numArr: number[] = [1, 2, 3, 4, 5];
// // // create a string array
// // let textArr: string[] = ["a", "b", "c", "d"];
// // // Tuple
// // let person: [string, number] = ["Amna", 16];
// // let studentInfo: object = {
// //     name : "Amna",
// //     age: 16
// // }
// // // enmu type
// // enum ReqStatus {
// //     Success = "Success",
// //     Loading = "Loading",
// //     Error   = "Error"
// // }
// // let print  = ReqStatus.Success;
// // console.log(print);
// // function sayHello ():void  {
// //   console.log("Hello Amna");
// // }
// // let count : number= 0;
// // function updateCounter():number {
// //   count =  count + 1;
// //   return count;
// // }
// // updateCounter()
// // console.log(count);
// // function greet(name : string) : void{
// //   console.log("Hello,", name);
// // }
// // greet("Sara");
// // let userAge : number|null;
// // userAge = 32;
// // userAge = null;
// // function throwError(msg : string) : never {
// //   console.log("Error in your code", msg);
// // }
// // throwError();
// // function calculateArea(width: number, height:number) : string{
// //   console.log("Area is : ", width * height);
// // }
// // let isLoggedIn: boolean;
// // function checkLogin(): void {
// //   if (isLoggedIn === true) {
// //     console.log("Logged In");
// //   } else {
// //     console.log("Logged Out");
// //   }
// // }
// // isLoggedIn= true;
// // checkLogin();
// // enum Direction {
// //   Left = "Left",
// //   Right = "Right",
// //   Top = "Top",
// //   Bottom = "Bottom",
// // }
// // function direction(dir: Direction): void {
// //   console.log("Moving", dir);
// // }
// // direction(Direction.Left);
// // let userInfo: [string, number, boolean];
// // userInfo = ["Amna", 16, true];
// // console.log(userInfo);
// interface car  {
//     name : string,
//     speed : number,
//     drive() : void,
// }
// const carCopy : car = {
//     name  : "Toyota",
//     speed : 180,
//     drive() {
//         console.log("Driving Toyota...");
//     }
// }
// console.log(carCopy);
// interface User {
//     name : string
//     age  : number
//     greet() : void
// }
// let student : User = {
//    name : "Amna",
//    age : 16,
//    greet(){
//     console.log("Hello ", this.name )
//    }
// }
// public and private in type scrpte
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    BottleMaker.prototype.getBottle = function () {
        return this.name;
    };
    BottleMaker.prototype.setbottle = function (changeName) {
        this.name = changeName;
    };
    return BottleMaker;
}());
var b1 = new BottleMaker("Meltan", "newBrand", 1200);
console.log(b1);

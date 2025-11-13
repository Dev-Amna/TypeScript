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

// class BottleMaker {
//     constructor(public name : string, public brand : string,public price : number){

//     }

//     getBottle(){
//         return this.name;
//     }
//     setbottle(changeName :string){
//         this.name = changeName;
//     }
// }

// let b1 = new BottleMaker("Meltan", "newBrand",1200);
// console.log(b1);

// Readonly properties
class User {
  constructor(
    public name: string,
    public age: number,
    public gender?: string
  ) {}
}

// let u1 = new User("Amna", 16);
// let u2 = new User("Sara", 14, "Female");

// console.log(u1);
// console.log(u2);
// Getter and Setter
class Person {
  constructor(public _name: string, public _age: number) {

  }
  get name(){
    return this._name;
  }

  set name(updateName: string){
    this._name = updateName;
  }
}


let p1 = new Person("Amna", 16);



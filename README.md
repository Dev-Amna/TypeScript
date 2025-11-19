# TypeScript Revision Notes

This is my TypeScript revision notes. Short explanations for all main topics.
---

## 1. Introduction to Basic Types
TypeScript adds types to JavaScript. Types help catch errors and make code easier to read and maintain.
---

## 2. Primitive Types
Simple types like `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`.

---

## 3. Arrays
A list of items of the same type. Can be written as `type[]` or `Array<type>`.

---

## 4. Tuples
Fixed-length arrays where each element has a specific type.
---

## 5. Enums
Named constants. Useful to define a set of fixed options.

---

## 6. Any, Unknown, Void & More
- `any`: can be any type, disables type checking.
- `unknown`: any type but safer, must check before use.
- `void`: no return value in functions.
- `never`: function never returns, usually throws error.

---
## 7. Type Inference & Type Annotations
- TypeScript can guess the type automatically (inference).
- You can also explicitly declare type (annotation).

---

## 8. Type Annotations
Assign a type to variables, function parameters, and return values for clarity and safety.

---

## 9. Interfaces & Type Aliases
- `interface`: defines structure of objects.
- `type alias`: defines a type, can combine or be a union of types.

---

## 10. Extending Interfaces
Interfaces can inherit from other interfaces to add or reuse properties.

---

## 11. Fundamentals of Type Aliases
Type aliases can define object shapes, union types, or simple types for reuse.

---

## 12. Intersection Types
Combine multiple types into one. An object must satisfy all combined types.

---

## 13. Introduction to Classes & Objects
Classes are templates for creating objects with properties and methods.

---

## 14. Fundamentals of Classes & Objects
Classes can have properties, methods, and can be instantiated to create objects.

---

## 15. Classes & Objects: Constructor
Special method to initialize new objects with default or given values.

---

## 16. Classes & Objects: `this` Keyword
`this` refers to the current object instance inside class methods.

---

## 17. Public & Private Access Modifier
- `public`: accessible anywhere.
- `private`: accessible only inside class.

---

## 18. Protected Access Modifier
Accessible inside class and its subclasses, but not outside.

---

## 19. Optional Properties
Properties that may or may not exist in an object or class.

---

## 20. Parameter Properties
Declare and initialize class properties directly in the constructor parameters.

---

## 21. Getters & Setters
Methods to read (`get`) or update (`set`) private properties safely.

---

## 22. Static Members
Properties or methods that belong to the class itself, not its objects.

---

## 23. Abstract Classes
Classes that cannot be instantiated directly. They provide a base for other classes.

---

## 24. Introduction to Functions
Functions are blocks of code that perform tasks. Can take parameters and return values.

---

## 25. Functions: Rest Parameter
A way to accept multiple arguments as an array in a function.
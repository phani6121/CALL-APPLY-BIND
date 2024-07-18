//-------------------------------------------------------------------------------


// const person1 = {
//     firstName: "Phanindra",
//     lastName: "Nidamanuri",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// person1.fullName()

// const person2 = {
//     firstName: "Manikanta",
//     lastName: "Nidamanuri",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// person2.fullName();


//-----------------------------------------------------------------------------


// const person1 = {
//     firstName: "Phanindra",
//     lastName: "Nidamanuri",
//     fullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }
// person1.fullName()

// const person2 = {
//     firstName: "Manikanta",
//     lastName: "Nidamanuri",

// }
// //Calls a method of an object, substituting another object for the current object.
// person1.fullName.call(person2);


//------------------------------------------------------------------


// function fullName() {
//     console.log(this.firstName + " " + this.lastName);
// }
// const person1 = {
//     firstName: "Phanindra",
//     lastName: "Nidamanuri",

// }
// //Calls a method of an object, substituting another object for the current object.

// fullName.call(person1)

// const person2 = {
//     firstName: "Manikanta",
//     lastName: "Nidamanuri",

// }
// //Calls a method of an object, substituting another object for the current object.
// fullName.call(person2);

//------------------------------------------------------------------

function fullName(city, state) {
    console.log(this.firstName + " " + this.lastName + " city is " + city + " state is " + state);
}
// this is a keyword , this === object

const person1 = {
    firstName: "Phanindra",
    lastName: "Nidamanuri",
}

// syntax: function.call(this.arguments)
// At here this ===fullName

const arguments = ["Hyderabad", "Telangana"]
//Using "call","apply" methods we can write a method and reuse for different objects
//call method takes arguments list 
//apply takes single array of arguments 
fullName.call(person1, ...arguments)
fullName.apply(person1, arguments)
//using "bind" method an object can borrow a method from another object
//attach a method with owner object .then create new function 
const myName = fullName.bind(person1)

myName(...arguments)
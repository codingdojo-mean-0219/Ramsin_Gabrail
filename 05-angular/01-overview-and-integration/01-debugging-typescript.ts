var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
// ANSWER: Place quotation marks around the number to make it a string
myString = "9";

function sayHello(name: any){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 // Change the variable type to 'any' to accept any type of parameter.  
 console.log(sayHello(9));

 function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = ''
        if (middleName != undefined) {
        fullName =`${firstName} ${middleName} ${lastName}`;
    }
        else {
        fullName = `${ firstName } ${lastName} `
    }
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
// Add if else statement
console.log(fullName("Jimbo", "Jones"));

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 // The object jay did not have the correct attribute listed, had "belt", needed "belts"
 console.log(graduate(jay));

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
        console.log(`${firstName} ${lastName}`);
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 // Add "new" to instantiate Ninja class and add two parameters
 const shane = new Ninja("Shane", "Doan");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 // Remove "lastName" since Ninja class only accepts two parameters
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
// Remove brackets
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
// Incorrect arrow notation
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference]
};
console.log(math(3, 7));


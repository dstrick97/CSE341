const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name}) => { // destructures the object to take a single object
    console.log(name);
}
printName(person);

const {name, age} = person; // destructures object
console.log(name, age);

//console.log(person);
//person.greet();
const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies; // destructures array, taking the elements of the array by position. objects are through name
console.log(hobby1, hobby2);
// for (let hobby of hobbies){  //loop through arrays
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => { //one way to map an array
//     return 'Hobby: ' + hobby
// }));
//console.log(hobbies.map(hobby=> 'Hobby: ' + hobby)); //also maps, but cleaner code

//console.log(hobbies);

hobbies.push('programming'); //our "const" array can be changed becaue the address of the array is the same, even though the array the address is pointing to has changed
//console.log(hobbies);

const copiedArray = hobbies.slice(); // copies array, with args we could specify what is copied

const coppiedArray2 = [...hobbies]; // ... is the spread opperator and it pulls out elements and places in an array instead of creating a nested array

const toArrray = (arg1, arg2, arg3) => { //rigid and can only take 3 args
    return [arg1, arg2, arg3];
};

const toArrray2 = (...args) => { //... is the rest operator. much more flexible, n args can be passed and bundled into an array
    return args;
};

console.log(toArrray2(1, 2, 3, 4));
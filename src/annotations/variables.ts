//TYPE ANNOTATIONS

//In type annotation, the developer tells the code what the datatype should be 
//and it has to be assigned the datatype it was given

let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes

class Car {

}

let newCar: Car = new Car();

//Object Literal
let point: { x: number; y: number; }= {
    x: 10,
    y: 20
};

//Function
//after logNumber, we put what we expect the function to take in, then put out
//so it will take in a number(being the variable i), then output nothing(so that will be void)

//---------------+annotation-------+---+implementation
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

//Type Inferance
//This is when we don't describe the datatype and instead we let typscript figure it out
//It requires less code and will be used in most cases
let oranges = 5;


//When to use annotations

//-When a funciton returns the 'any' type and we need to clarify the value
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);


//-When we declare a variable on one line then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
    if(words[i] === 'green'){
        foundWord = true;
    }
}

//-When we want a variable to  have a type that can't be inferred

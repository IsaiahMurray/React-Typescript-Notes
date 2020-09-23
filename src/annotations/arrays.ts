const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

// :string[][] <= this would be the annotation for this type of array
//an array holding an array of strings
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100); <= this will throw an error since the array only expects strings

//Help with 'map'
carMakers.map((car: string): string => {
    return car;
});

//Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
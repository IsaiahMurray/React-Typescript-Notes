const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
}

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function(a: number, b: number): number {
    return a * b;
}

//since this function is only meant console log something, it won't returning anything
//which will make the return type of void
//void types can also return null and undefined
const logger = (message: string): void => {
    console.log(message);
}

//In this case, we won't be reaching the end of the function 
//since the point of it is return an error
//It is a very rare case
//We only really use type never when we make a function that we expect to not return anything
const throwError = (message: string):never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);
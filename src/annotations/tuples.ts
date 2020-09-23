const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//using type alias to make the structure of our tuple
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
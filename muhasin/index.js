// 1.2D Array
//Given the 2D Array below, loop through the arrays to print the values.
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

for (let arr of board) {
    for (let values of arr) {
        console.log("values ==>", values);

    }
}

// 2. Doggo


const doggo = {
    name: "dog ",
    breed: "anonymous",
    favoriteFoods: ["Yogurt", "Salmon", "Pumpkin", "Eggs"],

}

console.log("secondElement ==>", doggo.favoriteFoods[1]); // Salmon

const foodList = [];

function getFood(object) {
    for (let i of object.favoriteFoods) {
        foodList.push(i)
    }
}
getFood(doggo);
console.log("foodList ==>", foodList);

// 3
const recipes = {
    ingredients: {
        butter: "100 gram",
        flour: "1 kg",
        sugar: "1.5 kg",
        salt: "500 gram"

    },
    printValues() {
        return Object.values(this.ingredients)
    }
}
console.log("recipes ==>", recipes.printValues());


recipes.ingredients.ginger = " 100 gram"
recipes.ingredients.sugar = "brown sugar"

// console.log(recipes.ingredients);

function printIngredients(obj) {
    for (let key in recipes.ingredients) {
        console.log("ingredients ==>", key);

    }
}
printIngredients();

console.log("ingredientsValue ==>", recipes.ingredients);
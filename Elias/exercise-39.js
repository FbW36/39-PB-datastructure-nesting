// 1. 2D Array

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];
const newArray = []
const loopTwoDarray = (array) => {
array.map((item) => {
        return item.map((j, index) => {
            newArray.push(j)
        })
    })
}

loopTwoDarray(board)

console.log(newArray.join(' '))

// 2. Doggo

const doggo = {
    name: "Bodo",
    breed: "German Sheaperd",
    favoritFood: [
        "sheep", "chocolate", "chicken"
    ],
}

const secondElement = doggo.favoritFood[1];
console.log(secondElement);
console.log(doggo.favoritFood.map((val) => val).join(' '));

// 3. 
const recipes = {
    ingredients: {
        butter: "200gram",
        sugar: "500gram",
        flour: "1kg",
        eggs: "3 large" 
    }
}

recipes.ingredients.ginger = "50gram";
recipes.ingredients["brownsugar"] = recipes.ingredients["sugar"]
delete recipes.ingredients.sugar

console.log(recipes);
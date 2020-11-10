// NESTS

// 1. 2D Array
//Given the 2D Array below, loop through the arrays to print the values.
/*let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];*/

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

let allValues = [];

function getValues(arr) {
  for (let item of arr) {
    //console.log("item==>", item);
    for (let values of item) {
      //console.log("values=>", values);
      allValues.push(values);
    }
  }
}

getValues(board);
console.log(allValues); // [ 1, 2,3, 'quick','brown', 'fox','jumped', 'over','lazy', 'dog',true, false]

/** 2. Doggo
2.1 Create a doggo object. Add name and breed as properties of the object.
2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.


 */

const doggo = {
  name: "waldo",
  breed: "german sheppard",
  favoriteFoods: ["cheese", "meat", "carrot"],
};

//
//2.3 Access the second element of the doggo's favorite foods.

console.log("access secondFood=>", doggo.favoriteFoods[1]);

//2.4 Add a method that loops through and print all the doggo's favorite food.

let favFoods = [];

function getFood(obj) {
  for (let key in obj) {
    if (key === "favoriteFoods") {
      favFoods.push(obj[key]);
    }
  }
}

getFood(doggo);

console.log("favoriteFood==>", favFoods.join()); // favoriteFood==> cheese,meat,carrot

/** 3.
3.1 Create an object called recipes.
3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.*/

const recipes = {
  ingredients: {
    butter: "butter",
    sugar: "sugar",
    flour: "flour",
  },
};

// 3.3 Without changing the previous code, add another ingredient - let's add ginger.

recipes.ingredients.ginger = "a bit";
console.log(recipes.ingredients);
/* {
  butter: 'spoon',
  sugar: 'Teaspoon',
  flour: 'double spoon',
  ginger: 'a bit'
}*/

//3.4 Change the ingredient sugar to brown sugar.

recipes.ingredients.sugar = "brown sugar";

console.log(recipes.ingredients);

// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.*/

recipes.ingredients.allIngredients = Object.values(recipes.ingredients);

console.log(recipes);

// function getAllIngredientValues(obj) {
//   for (let key in obj) {
//   allIngredientValues.push(obj[key]);
//   }
// }

// getAllIngredientValues(recipes.ingredients);
// console.log("allvalues", allIngredientValues);

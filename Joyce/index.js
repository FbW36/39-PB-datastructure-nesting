// 1. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (let item of board) {
  for (let values of item) {
    console.log(values);
  }
}

// 2. Doggo
// 2.1 Create a doggo object. Add name and breed as properties of the object.
const doggo = {
  name: "Les",
  breed: "Labrador Retriever",
};

// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
const doggoObject = {
  name: "Les",
  breed: "Labrador Retriever",
  favoriteFood: ["Peanut butter", "Cooked Chicken", "Cheese", "Yogurt"],
};

// 2.3 Access the second element of the doggo's favorite foods.
let food = doggoObject.favoriteFood[1];
console.log(food);

// 2.4 Add a method that loops through and print all the doggo's favorite food.
const getFoods = (object) => {
  for (let item in doggoObject) {
    if (item === "favoriteFood") {
      console.log(doggoObject[item]);
    }
  }
};

getFoods(doggoObject);

// 3.
// 3.1 Create an object called recipes.
// 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.

const recipes = {
  ingredients: {
    butter: "250gm",
    sugar: "150gm",
    flour: "two cups",
  },
  getIngredients() {
    for (let item in this.ingredients) {
      console.log(this.ingredients[item]);
    }
  },
};
// 3.3 Without changing the previous code, add another ingredient - let's add ginger.
recipes.ingredients.ginger = "one teaspoon";

// 3.4 Change the ingredient sugar to brown sugar.

delete recipes.ingredients.sugar;
recipes.ingredients.brownSugar = "150gm";

// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
console.log(recipes);
recipes.getIngredients();

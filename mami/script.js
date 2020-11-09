// # 39-PB-datastructure-nesting

// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// ```
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

// 1

for (let row of board) {
  for (let value of row) {
    console.log(row, value);
  }
}

// 2
for (let i = 0; i < board.length; i++) {
  for (prop in board[i]) {
    console.log("2===>", prop, board[i][prop]);
  }
}

// 3
board.forEach((array) => {
  array.forEach((value) => {
    console.log("3 ===>", value);
  });
});

// 4
board.map((array) => {
  return array.map((item) => console.log("4 ===>", item));
});

let numGrid = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];

console.log(numGrid[2][1]);

for (let i = 0; i < numGrid.length; i++) {
  for (let j = 0; j < numGrid[i].length; j++) {
    console.log(numGrid[i][j]);
  }
}

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.

const doggo = {
  name: "tom",
  breed: "shiba",
  food: ["meet", "bone", "rice"],
};
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.food[1]);

// * 2.4 Add a method that loops through and print all the doggo's favorite food.
const favoriteFood = (doggo) => {
  for (let i = 0; i < doggo.food.length; i++) {
    console.log("1==>", doggo.food[i]);
  }
};
favoriteFood(doggo);

const favoriteFood2 = (doggo) => {
  for (let value of doggo.food) {
    console.log("2==>", value);
  }
};
favoriteFood2(doggo);

// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
const recipes = {
  ingredients: {
    butter: "butter",
    suger: "suger",
    flour: "flour",
  },
  printIngredients() {
    for (let value in recipes.ingredients) {
      console.log("3 ==>", value);
      console.log("4 ==>", recipes.ingredients[value]);
    }
  },
};
recipes.printIngredients();
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
recipes.ingredients.ginger = "ginger";
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
recipes.ingredients.suger = "brown suger";
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

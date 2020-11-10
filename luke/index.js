// ! 1. 2D Array
// * Given the 2D Array below, ** loop ** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

const printedData = [];
const getData = board.map((i) => {
  return i.map((j) => {
    printedData.push(j);
  });
});

console.log(printedData.join(", "));

// ! 2. Doggo
// * 2.1 Create a doggo object.Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
  name: "Rex",
  breed: "golden-retriever",
  favouriteFoods: [{ one: "dog-food-best" }, { two: "dog-food-delux" }],
  printFavFood: function () {
    const printFood = [];
    for (let item in this.favouriteFoods) {
      for (let key in this.favouriteFoods[item]) {
        printFood.push(this.favouriteFoods[item][key]);
      }
    }
    return printFood.join(", ");
  },
};

let accessSecondElement = doggo.favouriteFoods[1].two;
console.log(accessSecondElement);

console.log(`print fav food ==> `, doggo.printFavFood());

// ! 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc.Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient`sugar` to`brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

const recipes = {
  ingredients: {
    butter: "butter",
    sugar: "sugar",
    flour: "flour",
  },
  printIngredients: function () {
    for (let key in this.ingredients) {
      console.log(this.ingredients[key]);
    }
  },
};

recipes.ingredients.ginger = "ginger";

recipes.ingredients.sugar = "brown-sugar";

recipes.printIngredients();

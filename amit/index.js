// 1 Given the 2D Array below, loop through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

const result = board.map((arrays) => {
  return arrays.map((items) => console.log(items));
});

// 2
doggo = {
  name: "Tommy",
  breed: "German",
  favoritefoods: ["rice", "vegitavles", "chocolate"],
  accessSecItem: function () {
    return this.favoritefoods[1];
  },

  accessAllElement: function () {
    return this.favoritefoods.map((item) => console.log(item));
  },
};

console.log(doggo.accessSecItem()); //2.3= vegitavles
console.log(doggo.accessAllElement()); // 2.4

// 3
const recipes = {
  ingredients: {
    butter: "best",
    sugar: "good",
    flour: "not bad",
  },

  printIngredient() {
    for (let key in this.ingredients) {
      console.log(this.ingredients[key]);
    }
  },
};

recipes.ingredients.ginger = "very healthy"; // 3.3
recipes.ingredients.sugar = "brown sugar"; // 3.4

console.log(recipes);
console.log(recipes.printIngredient());

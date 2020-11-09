//1
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];
// board.map((array) => {
//   return array.map((item) => console.log(item));
// });

//2
//2.1
const doggo = {
  name: "dog",
  breed: "some",
  //2.3
  favoriteFoods: ["tomatoes", "cucumber", "flies"],

  //2.4
  printFood: function () {
    this.favoriteFoods.map((food) => console.log(food));
  },
};
//2.3
let secondElement = doggo.favoriteFoods[1];

//3
//3.2
const recipes = {
  ingredients: {
    butter: "butter",
    flour: "flour",
    salt: "salt",
    sugar: "sugar",
  },
  //3.5
  printIngredient() {
    for (const key in this.ingredients) {
      console.log(this.ingredients[key]);
    }
  },
};
//3.3
recipes.ingredients.ginger = "ginger";
//3.4
recipes.ingredients.sugar = "brown sugar";

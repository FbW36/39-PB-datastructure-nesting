//1
let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

const boardLoop = [];

for (element of board) {
  for (nestedElement of element) {
    boardLoop.push(nestedElement);
  }
}

console.log("1==>", boardLoop);

//2
const doggo = {
  name: "hundino",
  breed: "corgi",
  favoriteFoods: ["salmon", "avocado", "egg"],
};

for (value of doggo.favoriteFoods) {
  console.log(value);
}

//3
const recipes = {
  name: "migas",
  ingredients: {
    bread: "1",
    water: "300 ml",
    shrimp: "20",
    garlic: "4 cloves",
  },
};

// 3.3
recipes.ingredients["onion"] = "2";

//3.4
delete recipes.ingredients.bread;
recipes.ingredients = { ...recipes.ingredients, oldBread: "two" };

console.log(recipes.ingredients);

//3.5
const ingredients = [];
let nestedObject = recipes.ingredients;
for (i in nestedObject) {
  ingredients.push(nestedObject[i]);
}

console.log(ingredients);

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
// doggo.printFood();

//3
//3.2
const recipes = {
  ingredients: {
    butter: "300gm",
    flour: "100gm",
    salt: "2 spoons",
    sugar: "150gm",
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
//Solution1
function changeValue(keyToChange, newKey, object) {
  for (let key in object) {
    if (key === keyToChange) {
      object[newKey] = object[key];
      delete object[key];
    }
  }
}
changeValue("sugar", "brownSugar", recipes.ingredients);
// console.log(recipes);

//Solution 2 (Creating a new object)
let renameProp = (oldProp, newProp, { [oldProp]: old, ...others }) => ({
  [newProp]: old,
  ...others,
});
let recipes1 = renameProp("sugar", "brownSugar", recipes.ingredients);
console.log(recipes1);

//Solution 3 (Creating a new object)
function renameProp1(oldProp, newProp, object) {
  let { [oldProp]: old, ...others } = object;

  let newObject = Object.assign({}, { ...others }, { [newProp]: old });
  return newObject;
}
let recipes2 = renameProp1("sugar", "brownSugar", recipes.ingredients);
// console.log(recipes2);

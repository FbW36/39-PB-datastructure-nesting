// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false],
];

for (value of board) {
  //   console.log("value :>> ", value);
  for (j in value) {
    console.log("value :>> ", value[j]);
  }
}

board.map((array) => {
  console.log("array :>> ", array);
  return array.map((item) => console.log("item :>> ", item));
});

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods.
// * 2.4 Add a method that loops through and print all the doggo's favorite food.

const doggo = {
  name: "Ray",
  breed: "boxer",
  favorite_foods: ["sushi", "kebab"],
  myMethod: function print() {
    this.favorite_foods.map((food) => console.log("food==>", food));
  },
};

console.log("doggo.favorite_foods :>> ", doggo.favorite_foods[1]); //kebab

console.log("doggo.myMethod :>> ", doggo.myMethod()); //doggo.myMethod :>>  [ 'sushi', 'kebab' ]

// #### 3.
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`.
// * 3.4 Change the ingredient `sugar` to `brown sugar`.
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.

const recipes = {
  ingredients: ["butter", "sugar", "flour", "salt"],
  myMethod: function print() {
    return this.ingredients;
  },
};

recipes.ingredients.push("ginger"); //[ 'butter', 'sugar', 'flour', 'salt', 'ginger' ]
console.log("recipes :>> ", recipes);

recipes.ingredients[1] = "brownsugar";
console.log("recipes :>> ", recipes);

console.log("recipes.myMethod :>> ", recipes.myMethod());

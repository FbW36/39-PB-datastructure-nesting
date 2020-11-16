//Given the 2D Array below, **loop** through the arrays to print the values.
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

const loopArray = (array) => {
    let box = [];
    for(let item of array){
        console.log("item ==>", item); 
        for(let item2 of item){
            console.log("item2 ==>", item2);
            box.push(item2);
        }
    }
    return box;  
};

console.log("loopArray ==>", loopArray(board)); 
/*
[
  1,        2,
  3,        'quick',
  'brown',  'fox',
  'jumped', 'over',
  'lazy',   'dog',
  true,     false
]
*/

// 2.1) Create a doggo object. Add name and breed as properties of the object.
// 2.2) Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
const myDoggo = {
    name: 'Sully',
    breed: 'German Shepherd ',
    favFood: ['carrots', ' tuna', ' milk']
}; 
// 2.3) Access the second element of the doggo's favorite foods. 
let [favFood_1, favFood_2, favFood_3] = myDoggo.favFood; 
console.log("acces second element of favFood ==>", favFood_2); // tunna 
console.log("acces second element of favFood ==>", myDoggo.favFood[1]); // tuna 

// 2.4) Add a method that loops through and print all the doggo's favorite food.
const printFood = (obj) => {
    for(let key in obj){
        console.log("key in object ==>", key);
/*
key in object ==> name
key in object ==> breed
key in object ==> favFood
*/
        if(key === "favFood"){
            return `Sully favorite foods: ${myDoggo.favFood}`;
        }
    }
};

console.log("printFood ==>", printFood(myDoggo)); // Sully favorite foods: carrots, tuna, milk

// Create an object called recipes.
const myRecipes = {
    ingredients: {
        butter: "100g butter",
        sugar: "2 dl suger",
        flour: "2.5 dl flour",
    },
}; 

myRecipes.ingredients.ginger = "1 drop ginger"; 
console.log("myRecipes ==>", myRecipes);
/*
 {
  ingredients: {
    butter: '100g butter',
    sugar: '2 dl suger',
    flour: '2.5 dl flour',
    ginger: '1 drop ginger'
  }
}
*/
// 3.4 Change the ingredient `sugar` to `brown sugar`.
delete myRecipes.ingredients.sugar; 
myRecipes.ingredients.brownSugar = "2 dl brown suger";
console.log("myRecipes ==>", myRecipes);

// 3.5) Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 
const printMyRecipe = (obj) => {
    for(let key in obj){
        if(key === "ingredients"){
            return Object.values(myRecipes);
        }
    }
};
console.log("printMyRecipe ==>", printMyRecipe(myRecipes)); 



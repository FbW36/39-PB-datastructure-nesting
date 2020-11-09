//1. 

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

const items =[]

function getItemsInside(arr){
for (let valueI of arr){
    for (let valueJ of valueI){
    items.push(valueJ)
}
}
}
getItemsInside(board)
console.log("items ==> ", items);

/**
 * items ==>  [
  1,        2,
  3,        'quick',
  'brown',  'fox',
  'jumped', 'over',
  'lazy',   'dog',
  true,     false
]
 */


 //2.1 & 2.2 & 2.4
 const doggo = {
     name: "Sansa",
     breed: "Rottweiler",
     favoriteFood: ["steak", "beef", "chickenfilet","humans dinner"]
     favFood() {
        this.favoriteFood.map((food) => console.log("FavFood==>",food));
        }
    }
    doggo.favFood()
    
    //2.3
    console.log("2nd element of favorite food ==> ", doggo.favoriteFood[1]);
    
 //2.4  
 const foodContainer =[]
 
 function getFood(obj){
     for(let i of obj.favoriteFood){
       
        foodContainer.push(i)
     }
 }
 getFood(doggo);
 console.log("foodContainer ==> ", foodContainer);


 //3.1 & 3.2

 const recipes = {
     chocolate: "2bars",
        ingredients: {
         butter: "half pound",
         sugar: "2 spoons",
         flour: "pound",
 }
}
// 3.3
recipes.ingredients.ginger ="3 spoons"
//3.4
recipes.ingredients["brown sugar"] = recipes.ingredients["sugar"]
delete recipes.ingredients.sugar
 console.log("recipes ==> ", recipes );

function ingredientsCake(obj){
    for (let key in recipes.ingredients){
        console.log("ingredients ==> ", key);
    }
}


ingredientsCake(recipes)
console.log("ingredientsCake Values ==> ", Object.values(recipes.ingredients));
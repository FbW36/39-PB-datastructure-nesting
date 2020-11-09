let log = console.log;

// 1.
// Given the 2D Array below, loop through the arrays to print the values
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

for(let i of board) {
    for(let j of i) {
        log("board's value -->", j)
    }
}

// 2.
// 2.1 Create a doggo object. Add name and breed as properties of the object.

const Doggo = {
    name: 'Milo',
    breed: 'Jack Russel Terrier',
}
// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
Doggo["favorite foods"] = ['lamb chops', 'a tennis ball']


// 2.3 Access the second element of the doggo's favorite foods.
for(let i in Doggo) {
   if(i === 'favorite foods') {
        log(`Milo's second most favorite food is ${Doggo['favorite foods'][1]}` )
   }
}
// 2.4 Add a method that loops through and print all the doggo's favorite food.
Doggo.getDoggosProperty = (item) => log(`${item} =`, Doggo[item])
Doggo.getDoggosProperty('favorite foods')
log('Doggo -->',Doggo)

// 3.1 Create an object called recipes.
// 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
const recipes = {
    ingredients: {
        butter: '2 tablespoons',
        sugar: '1 teaspoon',
        flour: '50 grams',
    }
}
// 3.3 Without changing the previous code, add another ingredient - let's add ginger.
recipes.ingredients['ginger'] = '1 thumb';
log('ginger added to recipes -- >', recipes)
// 3.4 Change the ingredient sugar to brown sugar.
recipes.ingredients['brown_sugar'] = recipes.ingredients.sugar
delete recipes.ingredients.sugar
log(recipes)
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
recipes.getIngerdientValues = () => {
    for(let i in recipes.ingredients) {
        log('each ingredient -->', recipes.ingredients[i])
    }
}
recipes.getIngerdientValues()
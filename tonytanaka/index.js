// 1
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];

function loopArrays (arr) {
    for (let i of arr) {
//        console.log(i) // i is each one of the 3 arrays
 //       console.log(i.length) // 3, 7 and 2
        for (j in i) {
            console.log(i[j])
        }
    }
}
console.log(loopArrays(board)) 
/*
 1
2
3
quick
brown
fox
jumped
over
lazy
dog
true
false
==> undefined <== !!!
*/
//  why am I getting and UNDEFINED at the end of the list?


// 2
// 2.1 Create a doggo object. Add name and breed as properties of the object.
// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
const doggo = {
    name: "Kelly",
    breed: "Lhasa Apso",
    favoriteFoods: ["fruits", "chicken", "sausage"]
}

// 2.3 Access the second element of the doggo's favorite foods. 
for (let key in doggo) {
    if (key === 'favoriteFoods') {
        console.log("The 2nd fav food is:", doggo.favoriteFoods[1])
    }
}

// 2.4 Add a method that loops through and print all the doggo's favorite food.
console.log('doggo favorite foods are:', doggo.favoriteFoods)


// 3
const recipes = {
    ingredients: {
        butter: 'butter',
        sugar: 'sugar',
        flour: 'flour'
    },
    printIngredients() {
        for (let x in this.ingredients) {
            console.log(this.ingredients[x])
        }
    }
}
recipes.ingredients.ginger = 'ginger'
console.log(recipes)

recipes.ingredients.sugar = 'brown sugar'
console.log(recipes)

recipes.printIngredients()
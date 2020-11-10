
// 1. 2-Dimensional Array

let board = 
[
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

function print2DArray(arr)
{
    for (let itemRows of board)
    {
        for (let itemClo of itemRows)
        {
            console.log(itemClo);
        }
    }
}

print2DArray(board);

//=============================================

// 2. Doggo

const doggo = 
{
    name: 'aaa',
    breed: 'bbb',
    favoriteFoods: ['meet', 'bones', 'Salmon', 'Cheese', 'Eggs'],
    printDoggyFavoriteFood()
    {
        for (let item of this.favoriteFoods)
        {
            console.log(item);
        }
    }
};

doggo.printDoggyFavoriteFood();
console.log('Second Favorite Food of Dpggo is ', doggo.favoriteFoods[1]);

// ========================================

// 3. 

const recipes = 
{
    ingredients: 
    {
        butter: 'some butter',
        suger: 'put some suger',
        flour: 'add flour to the mix',
    },
    printIngredients()
    {
        console.log(recipes.ingredients);
    }
}

console.log(recipes.ingredients);
recipes.ingredients.ginger = 'put an amount of ginger';
console.log(recipes.ingredients);

recipes.ingredients.suger = 'brown suger';
console.log(recipes.ingredients);

recipes.printIngredients();
//* 1. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.
let board = [
	[1, 2, 3],
	["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
	[true, false]
];
for (let arr of board) {
	for (let val of arr) {
		console.log(val);
	}
}

//* 2. Doggo
// 2.1 Create a doggo object. Add name and breed as properties of the object.
// 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
const doggo = {
	name: 'Chap',
	breed: 'Spaniel',
	favFoods: ['crunchies', 'munchies', 'bones', 'crackers'],
}

// 2.3 Access the second element of the doggo's favorite foods.
console.log(doggo.favFoods[1]); // munchies

// 2.4 Add a method that loops through and prints all the doggo's favorite food.
const odeToFoods = function() {
	let message = "Doggo's favorite foods are: ";
	for (let food of this.favFoods) {
		message += `${food}, `;
	}
	message = message.replace(/, $/, '.');
	console.log(message);
}

doggo.listFoods = odeToFoods;

doggo.listFoods();


//* 3. Recipes
// 3.1 Create an object called recipes.
// 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
// 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object.
const recipes = {
	ingredients: {
		butter: 'butter',
		sugar: 'sugar',
		flour: 'flour'
	},
	printIngedients() {
		for (let ingredient in this.ingredients) {
			console.log(this.ingredients[ingredient]);
		}
	}
}

// 3.3 Without changing the previous code, add another ingredient - let's add ginger.
recipes.ingredients.ginger = 'ginger';

// 3.4 Change the ingredient sugar to brown sugar.
recipes.ingredients.sugar = 'brown sugar';

console.log(recipes);
recipes.printIngedients(); // butter	brown sugar	flour	ginger

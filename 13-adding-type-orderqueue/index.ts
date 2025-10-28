/**
 * Challenge: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */

type Pizza = {
	name: string;
	price: number;
};

/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */

type Order = {
	id: number;
	pizza: Pizza;
	status: string;
};

const menu = [
	{ name: "Margherita", price: 8 },
	{ name: "Pepperoni", price: 10 },
	{ name: "Hawaiian", price: 10 },
	{ name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderHistory: Order[] = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 *
 * Challenge: teach TS that the pizzaObj is supposed to be a Pizza type.
 * Then like before, look through the code to see if there are any new
 * TS warnings to deal with (😉), and fix those issues
 */

function addNewPizza(newMenu: Pizza) {
	menu.push(newMenu);
	console.log(menu);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(name: string) {
	const findMenu = menu.find((item) => item.name === name);

	if (!findMenu) {
		console.log(`${name} is not in menu`);
		return null;
	} else {
		cashInRegister += findMenu.price;
		const newOrder: Order = { id: nextOrderId++, pizza: findMenu, status: "ordered" };

		orderHistory.push(newOrder);
		return newOrder;
	}
}

console.log(placeOrder("pizza"));

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId: number) {
	const order = orderHistory.find((item) => item.id === orderId);

	if (!order) {
		console.log(`Order with ID ${orderId} not found`);
		return null;
	} else {
		order.status = "completed";
		return order;
	}
}

console.log(addNewPizza({ name: "BBQ Chicken", price: 6 }));
console.log(placeOrder("BBQ Chicken"));
console.log(completeOrder(1));

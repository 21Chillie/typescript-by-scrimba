const menu = [
	{ name: "Margherita", price: 8 },
	{ name: "Pepperoni", price: 10 },
	{ name: "Hawaiian", price: 10 },
	{ name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: any[] = [];

/**
 * Challenge: Add a utility function "addNewPizza" that takes a pizza object
 * and adds it to the menu.
 */

function addNewPizza(newMenu: any) {
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
		const newOrder = { id: nextOrderId++, pizza: findMenu, status: "ordered" };

		orderQueue.push(newOrder);
		return newOrder;
	}
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId: number) {
	const order = orderQueue.find((item) => item.id === orderId);

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

/**
 * Challenge: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */

type Pizza = {
	id: number;
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
	status: "ordered" | "completed";
};

const menu: Pizza[] = [
	{ id: 1, name: "Margherita", price: 8 },
	{ id: 2, name: "Pepperoni", price: 10 },
	{ id: 3, name: "Hawaiian", price: 10 },
	{ id: 4, name: "Veggie", price: 9 },
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

function addNewPizza(newMenu: Pizza): void {
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

function placeOrder(name: string): Order | undefined {
	const findMenu = menu.find((item) => item.name === name);

	if (!findMenu) {
		console.log(`${name} is not in menu`);
		return;
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

function completeOrder(orderId: number): Order | undefined {
	const order = orderHistory.find((item) => item.id === orderId);

	if (!order) {
		console.log(`Order with ID ${orderId} not found`);
		return;
	} else {
		order.status = "completed";
		return order;
	}
}

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 *
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

function getPizzaDetail(identifier: number | string): Pizza | undefined {
	if (typeof identifier === "number") {
		return menu.find((item) => item.id === identifier);
	} else if (typeof identifier === "string") {
		return menu.find((item) => item.name.toLowerCase() === identifier.toLowerCase());
	} else {
		throw new Error(`Function doesn't have parameter identifier`);
	}
}

console.log(addNewPizza({ id: 5, name: "BBQ Chicken", price: 6 }));
console.log(placeOrder("BBQ Chicken"));
console.log(completeOrder(1));

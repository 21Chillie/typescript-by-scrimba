// Pizza type
type Pizza = {
	id: number;
	name: string;
	price: number;
};

// Order type
type Order = {
	id: number;
	pizza: Pizza;
	status: "ordered" | "completed";
};

// App state
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderHistory: Order[] = [];

// Initial menu
const menu: Pizza[] = [
	{ id: nextPizzaId++, name: "Margherita", price: 8 },
	{ id: nextPizzaId++, name: "Pepperoni", price: 10 },
	{ id: nextPizzaId++, name: "Hawaiian", price: 10 },
	{ id: nextPizzaId++, name: "Veggie", price: 9 },
];

/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter.
 * Return the new pizza object (with the id added) from the function.
 */

// Add pizza to menu (assigns id)
function addNewPizza(newPizzaObj: Omit<Pizza, "id">): Pizza {
	const newPizzaMenu: Pizza = {
		id: nextPizzaId++,
		name: newPizzaObj.name,
		price: newPizzaObj.price,
	};

	menu.push(newPizzaMenu);

	return newPizzaMenu;
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

// Place an order by pizza name
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

// Mark an order completed by id
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

// Get pizza details by id or name
function getPizzaDetail(identifier: number | string): Pizza | undefined {
	if (typeof identifier === "number") {
		return menu.find((item) => item.id === identifier);
	} else if (typeof identifier === "string") {
		return menu.find((item) => item.name.toLowerCase() === identifier.toLowerCase());
	} else {
		throw new Error(`Function doesn't have parameter identifier`);
	}
}

console.log(placeOrder("BBQ Chicken"));
console.log(completeOrder(1));

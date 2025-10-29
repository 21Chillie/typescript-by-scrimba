type User = {
	id: number;
	username: string;
	role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
	{ id: nextUserId++, username: "john_doe", role: "member" },
	{ id: nextUserId++, username: "jane_smith", role: "contributor" },
	{ id: nextUserId++, username: "alice_jones", role: "admin" },
	{ id: nextUserId++, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: UpdatedUser) {
	// Find the user in the array by the id
	const findUser = users.find((item) => item.id === id);

	if (!findUser) {
		console.error(`User with ID ${id} not found`);
		return;
	}

	// Use Object.assign to update the found user in place.
	Object.assign(findUser, updates);
	// Check MDN if you need help with using Object.assign
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

function addNewUser(newUser: Omit<User, "id">): User {
	// Create a new variable called `user`, add an `id` property to it
	// and spread in all the properties of the `newUser` object. Think
	// about how you should set the type for this `user` object.
	// Push the new object to the `users` array, and return the object
	// from the function at the end

	const user: User = {
		id: nextUserId++,
		username: newUser.username,
		role: newUser.role,
	};

	users.push(user);

	return user;
}

addNewUser({ username: "schumacher", role: "member" });

console.log(users);

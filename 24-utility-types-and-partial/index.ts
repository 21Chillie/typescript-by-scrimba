type User = {
	id: number;
	username: string;
	role: "member" | "contributor" | "admin";
};

type UpdatedUser = Partial<User>;

const users: User[] = [
	{ id: 1, username: "john_doe", role: "member" },
	{ id: 2, username: "jane_smith", role: "contributor" },
	{ id: 3, username: "alice_jones", role: "admin" },
	{ id: 4, username: "charlie_brown", role: "member" },
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

console.log(users);

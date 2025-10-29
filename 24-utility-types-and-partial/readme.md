# Utility Types in TypeScript

Utility types are built-in helpers in TypeScript that let you modify existing types without rewriting or duplicating them. They act like functions for types — taking one or more types as input and returning a transformed version.

---

## Example Scenario

We have a `User` type and want to write an `updateUser` function that updates only certain properties of a user.

```ts
type User = {
	id: number;
	username: string;
	role: string;
};

const users: User[] = [
	{ id: 1, username: "John Doe", role: "member" },
	{ id: 2, username: "Charlie Brown", role: "member" },
];

function updateUser(id: number, updates: any) {
	const foundUser = users.find((user) => user.id === id);
	if (!foundUser) return console.log("User not found");

	Object.assign(foundUser, updates);
}
```

This works, but typing `updates` as `any` removes type safety.

---

## The Problem

We can’t simply use `User` as the type of `updates` because it doesn’t require all user properties, only the ones we want to change.
Manually defining an `UpdatedUser` type with all optional properties would be repetitive and inefficient.

## The Solution: `Partial<T>`

TypeScript provides a built-in utility type called Partial.
It takes an existing type and returns a new one with all properties marked as optional.

```ts
function updateUser(id: number, updates: Partial<User>) {
	const foundUser = users.find((user) => user.id === id);
	if (!foundUser) return console.log("User not found");

	Object.assign(foundUser, updates);
}
```

Hovering over `Partial<User>` in your editor will show that it produces:

```ts
{
  id?: number;
  username?: string;
  role?: string;
}
```

## Why It Matters

- Eliminates repetitive code
- Keeps types consistent across your codebase
- Improves readability and maintainability

---

Notes

Utility types use generic syntax (`<T>`) — similar to passing parameters to a function, but for types.

Partial`<T>` is one of many built-in utility types (others include `Required`, `Readonly`, `Pick`, `Omit`, etc.).

Explore the [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html) documentation

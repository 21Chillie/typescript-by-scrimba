# Function Return Types in TypeScript

Staying on the theme of being explicit in TypeScript, it’s often useful to specify **function return types** instead of relying solely on inference.

## Composing Types

We can compose multiple types together.
For example, we can use a `UserRole` type inside a `User` type:

```ts
type UserRole = "guest" | "member" | "admin";

type User = {
	username: string;
	role: UserRole;
};
```

## Function Return Types

Consider a function that finds a user by username:

```ts
const users: User[] = [
	{ username: "bob", role: "admin" },
	{ username: "alice", role: "member" },
];

function fetchUserDetails(username: string) {
	return users.find((user) => user.username === username);
}
```

If you hover over the function name, TypeScript will infer that it returns a `User | undefined`.
However, we can make it explicit:

```ts
function fetchUserDetails(username: string): User | undefined {
	return users.find((user) => user.username === username);
}
```

The return type is declared after the function parameters and before the opening curly brace.

## Why Be Explicit?

Explicit return types help maintain code stability — especially during refactoring.

For example, if another developer changes the function to return something else:

```ts
function fetchUserDetails(username: string): User | undefined {
	return users.find((user) => user.username === username)?.username; // ❌
}
```
TypeScript will warn that a `string` is being returned instead of a `User | undefined`.

Without the explicit type declaration, TypeScript would allow the change silently, potentially breaking other parts of the codebase.

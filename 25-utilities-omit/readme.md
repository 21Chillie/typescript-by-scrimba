# The `Omit` Utility Type in TypeScript

The `Partial` utility type allows us to make all properties optional, which is useful when updating objects.
However, sometimes we need to remove specific properties entirely — not just make them optional.

This is where `Omit` comes in.

---

## The Problem with `Partial`

Using `Partial<User>` for creating or returning full user objects can be risky.

```ts
type User = {
	id: number;
	username: string;
	role: string;
};

let nextUserId = 1;

function addNewUser(newUser: Partial<User>): User {
	const user: User = {
		id: nextUserId++,
		username: newUser.username,
		role: newUser.role,
	};

	users.push(user);

	return user;
}
```

If you call this function without all properties:

```ts
addNewUser({ username: "Joe" });
```

TypeScript will warn that the result may be missing required properties (`role`, for example),
because `Partial<User>` makes every property optional.

We could manually check all properties before returning,
but that’s verbose and unnecessary when there’s a better solution.

---

## The Solution: `Omit<T, K>`

Omit creates a new type by copying all properties from T, except for the ones listed in K.

```ts
Omit<Type, Keys>;
```

- `Type` — the base type you want to modify.

- `Keys` — a string (or union of strings) of property names you want to exclude.

## Example

We want to create users inside the function (so we generate the `id` ourselves),
and we don’t want callers to provide it.

```ts
type User = {
	id: number;
	username: string;
	role: string;
};

function addNewUser(newUser: Omit<User, "id">): User {
	const user: User = {
		id: nextUserId++,
		username: newUser.username,
		role: newUser.role,
	};

	users.push(user);

	return user;
}

addNewUser({ username: "Joe Schmo", role: "member" });
```

✅ `Omit<User, "id">` creates a new type:

```ts
{
	username: string;
	role: string;
}
```

TypeScript ensures that:

- You must supply all required properties except the omitted ones.
- You cannot provide the omitted property (id in this case).

---

## Multiple Keys

You can omit multiple properties using a union of strings.

```ts
type MinimalUser = Omit<User, "id" | "username">;
// Result: { role: string }
```

## Why `Omit` Is Useful

Removes properties you don’t want to expose or require

Ideal for situations where an API, database, or internal logic handles certain fields (like `id`, `createdAt`, etc.)

Keeps your type system clean and precise

In short:

> `Omit<T, K>` creates a new type with specific properties removed — perfect when you want to keep your types strict but flexible.

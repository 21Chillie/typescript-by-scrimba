# Union Types in TypeScript

Literal types by themselves can be useful, but they become far more powerful when combined with **union types**.
Unions allow you to define a variable that can hold one of several specific values, improving type safety and preventing invalid assignments.

---

## Example: User Roles

Imagine we’re building an application that assigns different roles to users.
We only want to allow specific roles such as `"guest"`, `"member"`, or `"admin"`.
We don’t want any unexpected values like `"hacker"` or `"test"` being assigned.

Using **literal types** combined with **unions**, we can restrict the possible values for a variable:

```ts
type UserRole = "guest" | "member" | "admin";

let userRole: UserRole = "member"; // ✅ valid
userRole = "guest"; // ✅ valid
userRole = "hacker"; // ❌ Error: Type '"hacker"' is not assignable to type 'UserRole'
```

This tells TypeScript that `userRole` must always be one of the defined string literals.

## Union Types and Enums

If you’re familiar with other languages, this concept is similar to enums.
While TypeScript also provides a built-in `enum` feature, union types often offer a simpler and more flexible way to achieve the same effect.

To understand this better, think about booleans.
A boolean can only ever be `true` or `false` — that’s a simple union of two possible literal values.

```ts
type BooleanLike = true | false;
```

Union types apply that same idea to any set of allowed values.

## Using Union Types Within Other Types

Union types can also be used inside more complex object structures.
For example, we can define a `User` type that includes a role property restricted by our `UserRole` type:

```ts
type UserRole = "guest" | "member" | "admin";

type User = {
	username: string;
	email: string;
	role: UserRole;
};

const user: User = {
	username: "bobz",
	email: "bob@example.com",
	role: "admin", // ✅ valid
};

user.role = "hacker"; // ❌ Error
```

This ensures that any user in our system can only ever have a valid role.

# Being Explicit with TypeScript

Writing TypeScript encourages developers to be more explicit in their code. This habit improves reliability, clarity, and reduces unexpected behavior.

For example, if a function accepts both a `string` and a `number`, TypeScript automatically narrows the type based on conditions. However, when TypeScript code is used inside a plain JavaScript file, that type safety is lost.

## Example

```ts
// index.ts
export function getPizzaDetail(identifier: string | number) {
	if (typeof identifier === "string") {
		return { id: 1, name: "Margherita" };
	} else {
		return { id: identifier, name: "Margherita" };
	}
}
```

```js
// index.js
import { getPizzaDetail } from "./index.js";

console.log(getPizzaDetail(1)); // Works fine
console.log(getPizzaDetail(false)); // No compile-time warning
```

Since JavaScript doesn’t enforce types, invalid inputs can go unnoticed.

## Making It More Explicit

We can make the function safer by throwing an error for unsupported types:

```ts
export function getPizzaDetail(identifier: string | number) {
	if (typeof identifier === "string") {
		return { id: 1, name: "Margherita" };
	} else if (typeof identifier === "number") {
		return { id: identifier, name: "Margherita" };
	} else {
		throw new TypeError("Parameter 'identifier' must be a string or number");
	}
}
```

Now, even if a JavaScript file imports this function, it will throw a clear runtime error when passed an invalid value.

## Key Point

Be explicit with your TypeScript code whenever possible.
It improves developer experience, prevents misuse, and ensures predictable behavior.

# Generics in TypeScript

Generics are a powerful TypeScript feature that add flexibility to functions, types, and classes.
They allow us to create reusable, type-safe code without losing TypeScript’s type checking.

---

## What Are Generics?

Generics are **placeholders for types** — similar to how function parameters are placeholders for values.

You can think of generics as “type variables” that you define once and use throughout a function, type, or interface.

```ts
function exampleFunction<T>(param: T) {
	// T is a placeholder for whatever type is passed in
}
```

## `<T>` defines a generic type parameter.

- `T` is a convention for “Type”, but you can use any name (e.g., `<Type>`, `<Placeholder>`).
- The type is determined automatically when the function is called.

---

## Example: `getLastItem` Function

Let’s say we want to create a function that returns the last item in an array and we want it to work with any type of array.

```ts
function getLastItem<Type>(array: Type[]) {
	return array[array.length - 1];
}
```

## How It Works

- The function accepts an array of any type (`Type[]`).
- TypeScript infers the actual type when you call the function.
- It returns the last item with the same type as the array elements.

---

## Example Usage:

```ts
const gameScores = [10, 20, 30];
const favoriteThings = ["pizza", "coffee", "code"];
const voters = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 40 },
];

function getLastItem<Type>(array: Type[]): Type | undefined {
	return array[array.length - 1];
}

console.log(getLastItem(gameScores)); // 30
console.log(getLastItem(favoriteThings)); // "code"
console.log(getLastItem(voters)); // { name: "Bob", age: 40 }
```

Hovering over each call in an IDE shows:

| Call                          | Inferred Type                   |
| ----------------------------- | ------------------------------- |
| `getLastItem(gameScores)`     | `number`                        |
| `getLastItem(favoriteThings)` | `string`                        |
| `getLastItem(voters)`         | `{ name: string; age: number }` |

TypeScript automatically infers the correct types — no any needed.

---

## Explicit Return Type with Generics

You can also explicitly specify the return type using the generic placeholder:

```ts
function getLastItem<T>(array: T[]): T | undefined {
	return array[array.length - 1];
}
```

This says:

- The function returns one item of type `T`
- It may also return `undefined` if the array is empty

---

## Generic Naming Convention

By convention:

- T → Type
- K → Key
- V → Value
- E → Element

---

## References

Official Docs: [Typescript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

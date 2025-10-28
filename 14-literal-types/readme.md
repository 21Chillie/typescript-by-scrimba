# Type Inference and Literal Types in TypeScript

In TypeScript, **type inference** allows the compiler to automatically determine the type of a variable based on its initial value.
By hovering over variables in your editor, you can see how TypeScript infers types and how it differs depending on whether you use `let` or `const`.

---

## Type Inference with `let`

When you declare a variable using `let`, TypeScript infers a general type based on the value assigned.

```ts
let myName = "Bob";
```

Hovering over `myName` shows:

```cpp
let myName: string

```

TypeScript infers that `myName` is of type `string`, meaning you can reassign it to another `string` value, but not a different data type.

```ts
myName = "Bobby"; // ✅ allowed
myName = true; // ❌ Error: Type 'boolean' is not assignable to type 'string'
```

## Type Inference with `const`

When using `const`, TypeScript infers a literal type instead of a general one.

```ts
const myName2 = "Bob";
```

Hovering over `myName2` shows:

```cpp
const myName2: "Bob"
```

Here, the variable’s type is not just string, but specifically the `string` literal `"Bob"`.
This means the variable can only ever have that exact value. Attempting to reassign it results in an error:

```ts
myName2 = "Bill"; // ❌ Error: Cannot assign to 'myName2' because it is a constant
```

This behavior aligns with JavaScript’s own rules—`const` variables cannot be reassigned—but TypeScript makes the restriction explicit at the type level.

## Manually Declaring Literal Types

You can manually declare literal types for both `const` and `let` variables:

```ts
const myName3: "Bob" = "Bob"; // Explicit literal type
let myName4: "Bob" = "Bob";
```

Now, both `myName3` and `myName4` can only ever hold the exact `string` `"Bob"`.
Trying to assign any other value will trigger a TypeScript error:

```ts
myName4 = "Bobby"; // ❌ Error: Type '"Bobby"' is not assignable to type '"Bob"'
```

## When to Use Literal Types

Literal types by themselves are uncommon in day-to-day code, but they become powerful when combined with union types.
For example, you can define a variable that can only take one of a few specific values:

```ts
type Size = "small" | "medium" | "large";
let pizzaSize: Size = "medium"; // ✅ valid
pizzaSize = "extra-large"; // ❌ Error
```

Literal types provide strong constraints that make your code safer, clearer, and easier to maintain.

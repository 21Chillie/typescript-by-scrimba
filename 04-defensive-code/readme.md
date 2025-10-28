# Understanding the Happy Path vs the Sad Path in TypeScript

Before we even start writing TypeScript-specific code, TypeScript can already help identify potential issues.
For example, when hovering over a variable like `selectedPizza`, TypeScript may warn that "the object is possibly undefined."
This is an example of how TypeScript helps us anticipate errors before they happen.

---

## The Happy Path and the Sad Path

### The Happy Path

The happy path represents code written with the assumption that everything will work perfectly.
This is common for new developers who have not yet experienced the consequences of unhandled edge cases in production.
Writing code along the happy path is faster and simpler because it focuses only on achieving the desired result.

### The Sad Path

The sad path accounts for cases where things might go wrong.
It considers edge cases, unexpected user behavior, and potential failures.
TypeScript encourages developers to think defensively and plan for the sad path.

By pointing out that a variable may be undefined, TypeScript reminds us to handle potential problems before they cause runtime errors.

---

## Defensive Programming with TypeScript

A common runtime error in JavaScript is trying to access a property of `undefined`, such as:

```js
Cannot read property 'price' of undefined
```

In our example, `selectedPizza` could be `undefined` if a pizza name doesn’t exist in the `menu` array.
TypeScript detects this possibility and alerts us before running the code.

To handle this defensively, we can write:

```js
if (!selectedPizza) {
	console.error("The pizza name you're searching for does not exist in the menu.");
	return; // Stop execution
}
```

This ensures that the rest of the function only runs when `selectedPizza `has a valid value.

## When TypeScript Reaches Its Limit

After fixing a few errors, we may still encounter issues that TypeScript doesn’t automatically warn about.
For example:

- A variable like `order` might be `undefined`, yet TypeScript doesn’t flag it.

- A function might receive a `string` instead of a `number`, but no error appears.

At this stage, TypeScript has reached the limit of what it can infer automatically.
To gain more protection, we need to start defining explicit types in our program.

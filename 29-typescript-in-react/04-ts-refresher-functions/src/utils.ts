import { words } from "./words";

/*
CHALLENGE 1: Complete the getRandomIndex function
CHALLENGE 2: Add type annotations where relevant
CHALLENGE 3: Use getRandomIndex in getRandomWord and getFarewellText
*/

function getRandomIndex(arr: string[]): number {
	const randomIndex: number = Math.floor(Math.random() * arr.length);
	return randomIndex;
}

export function getRandomWord(): string {
	const randomIndex = getRandomIndex(words);
	return words[randomIndex];
}

export function getFarewellText(language: string): string {
	const options: string[] = [
		`Farewell, ${language}`,
		`Adios, ${language}`,
		`R.I.P., ${language}`,
		`We'll miss you, ${language}`,
		`Oh no, not ${language}!`,
		`${language} bites the dust`,
		`Gone but not forgotten, ${language}`,
		`The end of ${language} as we know it`,
		`Off into the sunset, ${language}`,
		`${language}, it's been real`,
		`${language}, your watch has ended`,
		`${language} has left the building`,
	];

	const randomIndex: number = getRandomIndex(options);

	return options[randomIndex];
}

import { useState } from "react";
import { languages } from "./languages";
import { getRandomWord } from "./utils";

import ConfettiContainer from "./ConfettiContainer";
import AriaLiveStatus from "./AriaLiveStatus";
import GameStatus from "./GameStatus";
import Header from "./Header";
import Keyboard from "./Keyboard";
import LanguageChips from "./LanguageChips";
import WordLetters from "./WordLetters";
import NewGameButton from "./NewGameButton";

export default function AssemblyEndgame() {
	// State values
	const [currentWord, setCurrentWord] = useState<string>((): string => getRandomWord());
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

	// Derived values
	const numGuessesLeft: number = languages.length - 1;
	const wrongGuessCount: number = guessedLetters.filter((letter: string): boolean => !currentWord.includes(letter)).length;
	const isGameWon: boolean = currentWord.split("").every((letter: string): boolean => guessedLetters.includes(letter));
	const isGameLost: boolean = wrongGuessCount >= numGuessesLeft;
	const isGameOver: boolean = isGameWon || isGameLost;
	const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
	const isLastGuessIncorrect: boolean | "" = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

	// Static values
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	function addGuessedLetter(letter: string): void {
		setGuessedLetters((prevLetters: string[]): string[] => (prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]));
	}

	function startNewGame(): void {
		setCurrentWord(getRandomWord());
		setGuessedLetters([]);
	}

	return (
		<main>
			<ConfettiContainer isGameWon={isGameWon} />
			<Header />

			<GameStatus
				isGameWon={isGameWon}
				isGameLost={isGameLost}
				isGameOver={isGameOver}
				isLastGuessIncorrect={isLastGuessIncorrect}
				wrongGuessCount={wrongGuessCount}
			/>

			<LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />

			<WordLetters currentWord={currentWord} guessedLetters={guessedLetters} isGameLost={isGameLost} />

			<AriaLiveStatus
				currentWord={currentWord}
				lastGuessedLetter={lastGuessedLetter}
				guessedLetters={guessedLetters}
				numGuessesLeft={numGuessesLeft}
			/>

			<Keyboard
				alphabet={alphabet}
				guessedLetters={guessedLetters}
				currentWord={currentWord}
				isGameOver={isGameOver}
				addGuessedLetter={addGuessedLetter}
			/>

			<NewGameButton isGameOver={isGameOver} startNewGame={startNewGame} />
		</main>
	);
}

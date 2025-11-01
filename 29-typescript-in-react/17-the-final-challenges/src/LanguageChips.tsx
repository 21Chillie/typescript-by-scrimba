/*
CHALLENGE: Type LanguageChip's return value
*/

import { clsx } from "clsx";
import type { JSX } from "react";
import type { Language } from "./languages";

type LanguageChipsProps = {
	languages: Language[];
	wrongGuessCount: number;
};

export default function LanguageChips({ languages, wrongGuessCount }: LanguageChipsProps): JSX.Element {
	const languageElements: JSX.Element[] = languages.map((lang: Language, index: number): JSX.Element => {
		/*
      CHALLENGE: Type isLanguageLost, styles, and className
      HINT: TS's Omit utility type might come in handy here!
    */
		const isLanguageLost: boolean = index < wrongGuessCount;
		const styles: Omit<Language, "name"> = {
			backgroundColor: lang.backgroundColor,
			color: lang.color,
		};
		const className: string = clsx("chip", isLanguageLost && "lost");
		return (
			<span className={className} style={styles} key={lang.name}>
				{lang.name}
			</span>
		);
	});

	return <section className="language-chips">{languageElements}</section>;
}

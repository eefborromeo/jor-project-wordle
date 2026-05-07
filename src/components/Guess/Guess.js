import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses, answer }) {
	const placeholder = NUM_OF_GUESSES_ALLOWED - guesses.length;

	return (
		<div className="guess-results">
			{guesses.length <= NUM_OF_GUESSES_ALLOWED &&
				guesses.map(guess => {
					const word = guess.split('');
					const letterStatus = checkGuess(guess, answer);
					return (
						<p key={crypto.randomUUID()} className="guess">
							{word.map((letter, index) => (
								<span key={crypto.randomUUID()} className={`cell ${letterStatus[index].status}`}>
									{letter}
								</span>
							))}
						</p>
					);
				})}
			{guesses.length <= NUM_OF_GUESSES_ALLOWED &&
				range(0, placeholder).map(() => (
					<p key={crypto.randomUUID()} className="guess">
						<span className="cell"></span>
						<span className="cell"></span>
						<span className="cell"></span>
						<span className="cell"></span>
						<span className="cell"></span>
					</p>
				))}
		</div>
	);
}

export default Guess;

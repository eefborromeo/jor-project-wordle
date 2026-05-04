import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses }) {
	const placeholder = NUM_OF_GUESSES_ALLOWED - guesses.length;
	return (
		<div className="guess-results">
			{guesses.length <= NUM_OF_GUESSES_ALLOWED &&
				guesses.map(guess => {
					const word = guess.split('');
					return (
						<p key={crypto.randomUUID()} className="guess">
							{word.map(letter => (
								<span key={crypto.randomUUID()} className="cell">
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

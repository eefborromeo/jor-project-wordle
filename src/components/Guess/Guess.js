import React, { useEffect } from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({ guesses, answer, setGameStatus }) {
	const placeholder = NUM_OF_GUESSES_ALLOWED - guesses.length;

	useEffect(() => {
		const check = guesses.map(guess => checkGuess(guess, answer));
		const gameStatus = check.map(guess => guess.every(item => item.status === 'correct'));
		if (gameStatus.includes(true)) {
			setGameStatus(gameStatus);
		}

		if (gameStatus.length === NUM_OF_GUESSES_ALLOWED) {
			setGameStatus(gameStatus);
		}
	}, [guesses]);

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

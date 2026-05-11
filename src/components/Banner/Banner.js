import React from 'react';

function Banner({ gameStatus, answer }) {
	return gameStatus.includes(true) ? (
		<Happy numOfGuesses={gameStatus.length} />
	) : (
		<Sad answer={answer} />
	);
}

export default Banner;

function Happy({ numOfGuesses }) {
	return (
		<div className="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in{' '}
				<strong>
					{numOfGuesses} {numOfGuesses > 1 ? 'guesses' : 'guess'}
				</strong>
				.
			</p>
		</div>
	);
}

function Sad({ answer }) {
	return (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
}

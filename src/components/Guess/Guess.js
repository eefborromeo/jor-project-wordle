import React from 'react';

function Guess({ guesses }) {
	return (
		<div className="guess-results">
			{guesses.map(guess => (
				<p key={crypto.randomUUID()} className="guess">
					{guess}
				</p>
			))}
		</div>
	);
}

export default Guess;

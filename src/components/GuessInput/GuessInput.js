import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	function handleSubmit(e) {
		e.preventDefault();
		console.log({ guess });
		setGuess('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={e => handleSubmit(e)}>
			<label htmlFor="guess">Enter Guess:</label>
			<input
				id="guess"
				type="text"
				name="guess"
				value={guess}
				onChange={e => setGuess(e.target.value.toUpperCase())}
				pattern=".{5}"
			/>
		</form>
	);
}

export default GuessInput;

import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guesses, setGuesses }) {
	const [inputValue, setInputValue] = React.useState('');
	function handleSubmit(e) {
		e.preventDefault();
		setGuesses(prev => {
			return [...prev, inputValue];
		});
		setInputValue('');
	}

	return (
		<form className="guess-input-wrapper" onSubmit={e => handleSubmit(e)}>
			<label htmlFor="guess">Enter Guess:</label>
			<input
				id="guess"
				type="text"
				name="guess"
				value={inputValue}
				onChange={e => setInputValue(e.target.value.toUpperCase())}
				pattern=".{5}"
				disabled={guesses.length === NUM_OF_GUESSES_ALLOWED}
			/>
		</form>
	);
}

export default GuessInput;

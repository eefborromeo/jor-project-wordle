import React from 'react';

function GuessInput({ setGuesses }) {
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
			/>
		</form>
	);
}

export default GuessInput;

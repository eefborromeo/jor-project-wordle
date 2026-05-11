import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Banner from '../Banner/Banner';

function GuessInput({ answer, guesses, setGuesses, gameStatus }) {
	const [inputValue, setInputValue] = React.useState('');
	function handleSubmit(e) {
		e.preventDefault();
		setGuesses(prev => {
			return [...prev, inputValue];
		});
		setInputValue('');
	}
	const showBanner = gameStatus.includes(true) || NUM_OF_GUESSES_ALLOWED === guesses.length;

	return (
		<>
			<form className="guess-input-wrapper" onSubmit={e => handleSubmit(e)}>
				<label htmlFor="guess">Enter Guess:</label>
				<input
					id="guess"
					type="text"
					name="guess"
					value={inputValue}
					onChange={e => setInputValue(e.target.value.toUpperCase())}
					pattern=".{5}"
					disabled={showBanner}
				/>
			</form>
			{showBanner && <Banner gameStatus={gameStatus} answer={answer} />}
		</>
	);
}

export default GuessInput;

import React from 'react';

function Banner() {
	return <div></div>;
}

export default Banner;

function Happy() {
	return (
		<div class="happy banner">
			<p>
				<strong>Congratulations!</strong> Got it in
				<strong>3 guesses</strong>.
			</p>
		</div>
	);
}

function Sad() {
	return (
		<div class="sad banner">
			<p>
				Sorry, the correct answer is <strong>LEARN</strong>.
			</p>
		</div>
	);
}

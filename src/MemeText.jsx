import React from "react";

function MemeText({ memeText, setMemeText, getRandomImage, setBlackText }) {
	function handleOnChange(e) {
		const { name, value } = e.target;

		setMemeText((previousValue) => ({
			...previousValue,
			[name]: value,
		}));
	}

	return (
		<section>
			<form className="meme">
				<input
					type="text"
					name="top"
					id="top"
					value={memeText.top}
					onChange={handleOnChange}
					placeholder="First line"
				/>
				<br />
				<input
					type="text"
					name="bottom"
					id="bottom"
					value={memeText.bottom}
					onChange={handleOnChange}
					placeholder="Second line"
				/>
				<br />
				<button
					onClick={(e) => {
						e.preventDefault();

						getRandomImage();
					}}
				>
					Generate new meme
				</button>
			</form>
			<button onClick={(e) => {
				e.preventDefault();

				setBlackText(previousValue => !previousValue)
			}}>Toggle black text</button>
		</section>
	);
}

export default MemeText;

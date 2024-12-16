import React from "react";

function MemeText({ memeText, setMemeText }) {
	function handleOnChange(e) {
		const { name, value } = e.target;

		setMemeText((previousValue) => ({
			...previousValue,
			[name]: value,
		}));
	}

	return (
		<section>
			<input
				type="text"
				name="top"
				id="top"
				value={memeText.top}
				onChange={handleOnChange}
			/>
			<input type="text" name="bottom" id="bottom" value={memeText.bottom} onChange={handleOnChange} />
			<button>Generate new meme</button>
		</section>
	);
}

export default MemeText;

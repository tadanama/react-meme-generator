import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function App() {
	// Store all meme data including images from api
	const [meme, setMeme] = useState();

	// Send get request to api
	async function getMeme() {
		try {
			const response = await axios.get("https://api.imgflip.com/get_memes");
			setMeme(response.data.data.memes);
		} catch (error) {
			console.log(error);
		}
	}

	// Run when conponent mounts
	useEffect(() => {
		getMeme();
	}, []);
	return (
		<>
			<h1>hi</h1>
		</>
	);
}

export default App;

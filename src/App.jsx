import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MemeText from "./MemeText";

function App() {
	// Store all meme data including images from api
	const [meme, setMeme] = useState();
	// Track the meme input
	const [memeText, setMemeText] = useState({
		top: "",
		bottom: "",
	});
	// Initial image state
	const [imgUrl, setImageUrl] = useState("https://i.imgflip.com/1ur9b0.jpg");
	// State to display black text
	const [blackText, setBlackText] = useState(false);

	// Send get request to api
	async function getMeme() {
		try {
			const response = await axios.get("https://api.imgflip.com/get_memes");
			setMeme(response.data.data.memes);
		} catch (error) {
			console.log(error);
		}
	}

	function getRandomImage() {
		const randomNumber = Math.floor(Math.random() * (meme?.length - 1));
		setImageUrl(meme[randomNumber].url);
	}

	// Run when conponent mounts
	useEffect(() => {
		getMeme();
	}, []);
	return (
		<>
			<main className="app">
				<MemeText
					memeText={memeText}
					setMemeText={setMemeText}
					getRandomImage={getRandomImage}
					blackText={blackText}
					setBlackText={setBlackText}
				/>
				<section className="meme-image">
					<img src={imgUrl} alt="" />
					<h2 className="top" style={{ color: blackText ? "black" : null }}>
						{memeText?.top}
					</h2>
					<h2 className="bottom" style={{ color: blackText ? "black" : null }}>
						{memeText?.bottom}
					</h2>
				</section>
			</main>
		</>
	);
}

export default App;

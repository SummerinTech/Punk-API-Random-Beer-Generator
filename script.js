document.addEventListener("DOMContentLoaded", () => {
	const startBtn = document.querySelector(".beer-button");
	const randomBeer = document.querySelector(".random-beer");
	const descriptionDisplay = document.querySelector(".description");

	let punkUrl = "https://api.punkapi.com/v2/beers/random";

	function fetchUrl(e) {
		e.preventDefault();

		fetch(punkUrl)
			.then((res) => res.json())
			.then((data) => {
				const name = data[0].name;
				const description = data[0].description;
				const { volume } = data[0];
				const volumeUnit = volume.unit;
				const volumeValue = volume.value;

				randomBeer.innerHTML = name + " " + volumeValue + " " + volumeUnit;
				descriptionDisplay.innerHTML = description;
			});
	}

	startBtn.addEventListener("click", fetchUrl);
});

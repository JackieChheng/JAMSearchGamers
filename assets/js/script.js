const url = 'https://epic-free-games.p.rapidapi.com/epic-free-games';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3',
		'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
	}
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

window.onload = fetchData;
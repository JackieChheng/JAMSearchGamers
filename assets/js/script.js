//const url = 'https://epic-free-games.p.rapidapi.com/epic-free-games';
//onst options = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': 'dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3',
//		'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com'
//	}
//};

//async function fetchData() {
//  try {
//    const response = await fetch(url, options);
//    const result = await response.text();
//    console.log(result);
//  } catch (error) {
//    console.error(error);
//  }
//}

//fetchData();

//window.onload = fetchData;




var freeGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3"

fetch(freeGamesUrl)
  .then(function (response) {
    return response.json()
  }) 
    .then(function (data) {
      console.log(data);
  });


  var  upcomingGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3"

  fetch(upcomingGamesUrl)
  .then(function (response) {
    return response.json()
  }) 
    .then(function (data) {
      console.log(data);
  });


  var test = "https://epic-store-games.p.rapidapi.com/onSale?searchWords=Mount&categories=Games&locale=us&country=us&rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041"
  
  fetch(test)
  .then(function (response) {
    return response.json()
  }) 
    .then(function (data) {
      console.log(data);
  });



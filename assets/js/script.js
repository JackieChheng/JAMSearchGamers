var freeGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3";
var upcomingGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3";
var test = "https://epic-store-games.p.rapidapi.com/onSale?searchWords=Mount&categories=Games&locale=us&country=us&rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041";

var urls = [freeGamesUrl, upcomingGamesUrl, test];

Promise.all(
  urls.map(url => fetch(url).then(response => response.json()))
)
.then(function (dataArray) {
  console.log("Free Games Data:", dataArray[0]);
  console.log("Upcoming Games Data:", dataArray[1]);
  console.log("On Sale Games Data:", dataArray[2]);
})
.catch(function (error) {
  console.error("Error fetching data:", error);
});
  
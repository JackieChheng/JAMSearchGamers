var freeGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3";
var upcomingGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon?rapidapi-key=dbbe26a28cmsh58d0c330cc6e4fcp1d024ajsnff75918c19c3";
var test = "https://epic-store-games.p.rapidapi.com/onSale?searchWords=Mount&categories=Games&locale=us&country=us&rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041";
//API's for free games of the week, upcoming free games, and test(Games that are discounted and what not)
var urls = [freeGamesUrl, upcomingGamesUrl, test];

var freeGamesArray = [];
var upcomingGamesArray = [];

var row = document.getElementById("row");




Promise.all(
  urls.map(url => fetch(url).then(response => response.json()))
)
.then(function (dataArray) {
  console.log("Free Games Data:", dataArray[0]);
  for (var i = 0; i < dataArray[0].length; i++) {
    var freeGames = {
      image: dataArray[0][i].offerImageWide,
      name: dataArray[0][i].name,
      publisher: dataArray[0][i].publisher,
      descr: dataArray[0][i].description,
      link: dataArray[0][i].appUrl
    }
    freeGamesArray.push(freeGames)
  } 
  console.log("Upcoming Games Data:", dataArray[1]);
  for (var i = 0; i < dataArray[1].length; i++) {
    var upcomingGames = {
      image: dataArray[1][i].offerImageWide,
      name: dataArray[1][i].name,
      publisher: dataArray[1][i].publisher,
      descr: dataArray[1][i].description,
      link: dataArray[1][i].appUrl
    }
    upcomingGamesArray.push(upcomingGames)
  }
    console.log("On Sale Games Data:", dataArray[2]);
    generateFreeGames();
})
.catch(function (error) {
  console.error("Error fetching data:", error);
});
  

console.log("below should be new object containing the two free games of the week in an array.")
console.log(freeGamesArray)
console.log("========================")

console.log("below should be new object containing the upcoming games in an array.")
console.log(upcomingGamesArray)
console.log("========================")


//creating a card to put information from arrays into
function generateFreeGames() {
for (var i = 0; i < freeGamesArray.length; i++) {
  var card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-md-3");
  card.style.width = "18rem";
    var img = document.createElement("img");
    img.classList.add("card-img-top");
    img.href = freeGamesArray[i].image;
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
      var h5 = document.createElement("h5");
      h5.textContent = freeGamesArray[i].name;
      console.log(h5)
  
      var p = document.createElement("p");
      p.textContent = freeGamesArray[i].descr;
      var a = document.createElement("a");
      a.href = freeGamesArray[i].link;
      a.classList.add("btn", "btn-primary")
      a.textContent = "Go somewhere"
  row.appendChild(card)
    card.appendChild(img);
    card.appendChild(cardBody);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(a);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var freeGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games?rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041";
  var upcomingGamesUrl = "https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon?rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041";

  //API's for free games of the week, upcoming free games, and test(Games that are discounted and what not)
  
  $('.dropdown-trigger').dropdown();

  var urls = [freeGamesUrl, upcomingGamesUrl];
  // Array that contains all APIs
  var freeGamesArray = [];
  var upcomingGamesArray = [];
  
  var freeGamesRow = document.getElementById("freeGames");
  var upcomingGamesRow = document.getElementById("upcomingGames");
  var GameSaleRow = document.getElementById("GamesOnSale")
  
  
  // Fetches data from multiple APIs
  Promise.all(
    urls.map(urls => fetch(urls).then(response => response.json()))
  )
  .then(function (dataArray) {
    console.log("Free Games Data:", dataArray[0]); // Logs data from APIs
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
      var upcomingGame = {
        image: dataArray[1][i].offerImageWide,
        name: dataArray[1][i].name,
        publisher: dataArray[1][i].publisher,
        descr: dataArray[1][i].description,
        link: dataArray[1][i].appUrl,
      };
      upcomingGamesArray.push(upcomingGame);
    }
    generateFreeGames(); // Call the function here, after processing the data
    generateUpcomingGames();
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
  
  // Generates the card for the freegames
  function generateFreeGames() {
    for (var i = 0; i < freeGamesArray.length; i++) {
  //     // HTML elements for card
      var card = document.createElement("div");
      card.classList.add("card", "col-sm-12", "col-md-3", "grey", "darken-3", "hoverable");
      //card.style.width = "18rem";
      
      var img = document.createElement("img");
      img.classList.add("card-img-top", "section", "img-fluid");
      img.src = freeGamesArray[i].image; 
      
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "white-text");
      
      var h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = freeGamesArray[i].name;
      
      var p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = freeGamesArray[i].descr;
      
      var a = document.createElement("a");
      a.href = freeGamesArray[i].link;
      a.classList.add("btn", "btn-primary")
      a.textContent = "view on site"
    
      freeGamesRow.appendChild(card)
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(a);
    }
  }
  
  function generateUpcomingGames() {
    for (var i = 0; i < upcomingGamesArray.length; i++) {
      // HTML elements for card
      var card = document.createElement("div");
      card.classList.add("card", "col-sm-12", "col-md-3", "grey", "darken-3");
      card.style.width = "18rem";
      
      var img = document.createElement("img");
      img.classList.add("card-img-top", "section", "img-fluid");
      img.src = upcomingGamesArray[i].image; 
      
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "white-text");
      
      var h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = upcomingGamesArray[i].name;
      
      var p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = upcomingGamesArray[i].descr;
      
      var a = document.createElement("a");
      a.href = upcomingGamesArray[i].link;
      a.classList.add("btn", "btn-primary")
      a.textContent = "view on site"
    
      upcomingGamesRow.appendChild(card)
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(a);
    }
  }

function generateGameSale(gameSaleArray) {
  console.log("hey is this working")
      for (var i = 0; i < gameSaleArray.length; i++) {
      // HTML elements for card
      var card = document.createElement("div");
      card.classList.add("card", "col-sm-12", "col-md-3", "grey", "darken-3");
      card.style.width = "18rem";
      
      var img = document.createElement("img");
      img.classList.add("card-img-top", "section", "img-fluid");
      img.src = gameSaleArray[i].image; 
      
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body", "white-text");
      
      var h5 = document.createElement("h5");
      h5.classList.add("card-title");
      h5.textContent = gameSaleArray[i].name;
      
      var p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = gameSaleArray[i].descr;
      
      var a = document.createElement("a");
      a.href = gameSaleArray[i].link;
      a.classList.add("btn", "btn-primary")
      a.textContent = "view on site"
    
      GameSaleRow.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(a);
    }
}



$(".genre").on("click", function(){
    GameSaleRow.innerHTML = "";
    var gameSaleArray = [];
    var genre = $(this).text();
    console.log(genre);
    var gameSale = "https://epic-store-games.p.rapidapi.com/onSale?searchWords=Mount&categories=" + genre + "&locale=us&country=us&rapidapi-key=206b08d759mshb06b9e5b9dbd779p1ec90ajsn4b8ad24f5041";
  
    fetch(gameSale)
    .then(function(response){
      return response.json();
    })
      .then(function (dataArray) {
      console.log("On Sale Games Data:", dataArray);
      console.log(dataArray[1].keyImages[1].url);
      for(var i = 0; i < dataArray.length; i++) {
        var saleGame = {
          image: dataArray[i].keyImages[1].url,
          name: dataArray[i].title,
          publisher: dataArray[i].publisherName,
          descr: dataArray[i].description,
          link: dataArray[i].url
        }
        gameSaleArray.push(saleGame)
      } 
      generateGameSale(gameSaleArray);
    })
  })
})
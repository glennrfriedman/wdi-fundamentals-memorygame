var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamons.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamons.png"
}
]; 

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};

var flipCard = function (cardId) {

	cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);

	console.log(cards[cardId].suit);

	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 2) {
    checkForMatch();

  }

};

var createBoard = function() {
		
		for (var i = 0; i < cards.length; i++) {
		
		var cardElement = document.createElement('img');
		
		cardElement.setAttribute('src', 'images/back.png');
		
		cardElement.setAttribute('data-id', i);
		
		cardElement.addEventListener('click', flipCard);

		 document.getElementById('game-board').appendChild(cardElement);

  }

};

createBoard();

//Tried to use JavaScript to reset game board, ended up adding extra gameboards everytime clicked, created reset using button to link back to original URL

//document.querySelector('button').addEventListener('click', createBoard);








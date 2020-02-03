class Card {
	constructor(value, suit) {
		this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
		this.values = [
		      null,
		      null,
		      "2",
		      "3",
		      "4",
		      "5",
		      "6",
		      "7",
		      "8",
		      "9",
		      "10",
		      "Jack",
		      "Queen",
		      "King",
		      "Ace"
    ];
    this.value = value;
    this.suit = suit;
	}

	lessThan(card2) {
		if (this.value <= card2.value) {
			return true;
		} else if (this.value === card2.value) {
			return this.suit < card2.suit;
		} 
			return false;
	}

	greaterThan(card2) {
    if (this.value > card2.value) {
      	return true;
    } else if (this.value === card2.value) {
      	return this.suit > card2.suit;
    }
   		return false;
}

  	print() {
  		return this.values[this.value] + " of " + this.suits[this.suit];
	}
}

class Deck {
  	constructor() {
    	this.cards = [];
    	for (let i = 2; i <= 14; i++) {
     	for (let j = 0; j <= 3; j++) {
        	let card = new Card(i, j);
      	 	 this.cards.push(card.print());
    }
    }
    this.shuffle(this.cards);
    this.shuffle(this.cards);
  }

	removeCard() {
    if (this.cards.length === 0) {
     	 return;
    }
   		 return this.cards.pop();
  }

  shuffle() {
    for (let i = 0; i <= 51; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      	this.cards[i] = this.cards[j];
      	this.cards[j] = temp;
    }
    	return this.cards;
  }
}

class Player {
  constructor(name) {
    	this.wins = 0;
    	this.card = "";
    	this.name = name;
  }
}

class Game {
  constructor() {
    // insert your name here for player 1 and 2
    const name1 = prompt("Player 1 Name");
    const name2 = prompt("Player 2 Name");
    	this.deck = new Deck();
    	this.player1 = new Player(name1);
    	this.player2 = new Player(name2);
  }
  wins(winner) {
    console.log(`${winner} wins this round`);
  }

  draw(player1Name, player1Card, player2Name, player2Card) {
    console.log(
     `${player1Name} drew ${player1Card} and ${player2Name} drew ${player2Card}`
    );
  }

playGame() {
	const cards = this.deck.cards;
	console.log("Let's Start WAR");
		while (cards.length >= 2) {

		const player1Card = this.deck.removeCard();
		const player2Card = this.deck.removeCard();
		const player1Name = this.player1.name;
		const player2Name = this.player2.name;
			this.draw(player1Name, player1Card, player2Name, player2Card);
				if (player1Card >= player2Card) {
					this.player1.wins++;
        			this.wins(this.player1.name);
     			} else {
        			this.player2.wins++;
        			this.wins(this.player2.name);
			}
		}
		const win = this.winner(this.player1, this.player2);
    	console.log(`The WAR is Over!!! ${win} is the winner!`);
    }

winner(player1, player2) {
		if (player1.wins === player2.wins) {
			return "The WAR ended in a tie";
		} else { 
			return player1.wins > player2.wins ? player1.name : player2.name;
		}
	}
}

const game = new Game();
game.playGame();


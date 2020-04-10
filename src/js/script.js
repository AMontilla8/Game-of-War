class Card {
	constructor(value, suit) {
	  this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
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
	  if (this.value < card2.value) {
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
	  const name1 = prompt("Player 1 Name");
	  const name2 = prompt("Player 2 Name");
	  this.deck = new Deck();
	  this.player1 = new Player(name1);
	  this.player2 = new Player(name2);
	}
  
	wins(winner) {
	  console.log(`${winner} win's this round`);
	}
  
	draw(player1Name, player1Card, player2Name, player2Card) {
	  console.log(
		`${player1Name} drew ${player1Card} and ${player2Name} drew ${player2Card}`
	  );
	}

	drawTie(player1Name, player1Card, player2Name, player2Card) {
		console.log(
		  `WAR!!!: ${player1Name}\'s WAR card is ${player1Card} and ${player2Name}\'s WAR card is ${player2Card}`
		);
	}
  
	playGame() {
	  const cards = this.deck.cards;
	  console.log("Beginning WAR!!");
	  while (cards.length >= 2) {
		let player1Card = this.deck.removeCard();
		let player2Card = this.deck.removeCard();
		const player1Name = this.player1.name;
		const player2Name = this.player2.name;
		this.draw(player1Name, player1Card, player2Name, player2Card);
		let player1CardNumber = player1Card.split(" ")[0];
		let player2CardNumber = player2Card.split(" ")[0];
		// console.log(player1Name +" Card : " + player1CardNumber);
		// console.log(player2Name +" Card : " + player2CardNumber);
		let numbersArray = {
			"2": 2, 
			"3": 3, 
			"4": 4, 
			"5": 5, 
			"6": 6, 
			"7": 7, 
			"8": 8, 
			"9": 9, 
			"10": 10, 
			"Jack": 11,
			"Queen": 12,
			"King": 13,
			"Ace": 14
			};
		if (numbersArray[player1CardNumber] > numbersArray[player2CardNumber]) {
		  this.player1.wins++;
		  this.wins(this.player1.name);
		} else if(numbersArray[player1CardNumber] == numbersArray[player2CardNumber]) {
 
				// Take 3 cards from both Players hands and then the 4th card will be face up and whoever wins will win war

			let flag = true;
			while (flag && cards.length >= 2) {
 	
				// Take 3 cards for each, So that is the reason there are a lot of ifs	

				if(cards.length >= 2)
					player1Card = this.deck.removeCard();
				else{
					this.player2.wins++;
					break;
				}
				if(cards.length >= 2)
					player2Card = this.deck.removeCard();
				else{
					this.player1.wins++;
					break;
				}
				if(cards.length >= 2)
					player1Card = this.deck.removeCard();
				else{
					this.player2.wins++;
					break;
				}
				if(cards.length >= 2)
					player2Card = this.deck.removeCard();
				else{
					this.player1.wins++;
					break;
				}
				if(cards.length >= 2)
					player1Card = this.deck.removeCard();
				else{
					this.player2.wins++;
					break;
				}
				if(cards.length >= 2)
					player2Card = this.deck.removeCard();
				else{
					this.player1.wins++;
					break;
				}

				// Now store 4th card for both Players
				if(cards.length >= 2)
					player1Card = this.deck.removeCard();
				else{
					this.player2.wins++;
					break;
				}
				if(cards.length >= 2)
					player2Card = this.deck.removeCard();
				else{
					this.player1.wins++;
					break;
				}

				this.drawTie(player1Name, player1Card, player2Name, player2Card);
				let player1CardNumber = player1Card.split(" ")[0];
				let player2CardNumber = player2Card.split(" ")[0];
				// console.log(player1Name +"\'s WAR card : " + player1CardNumber);
				// console.log(player2Name +"\'s WAR card : " + player2CardNumber);
				if (numbersArray[player1CardNumber] > numbersArray[player2CardNumber]) {
					this.player1.wins++;
					this.wins(this.player1.name);
					flag = false;
				}else if(numbersArray[player1CardNumber] == numbersArray[player2CardNumber]) {
					// if war Continue, loop 
					flag = true;
				}else {
					this.player2.wins++;
					this.wins(this.player2.name);
					flag = false;
				}
			}
		}
		 else {
		  this.player2.wins++;
		  this.wins(this.player2.name);
		}
	  }
	  const win = this.winner(this.player1, this.player2);
	  console.log(`War is over! ${win} is the winner!`);
	}
  
	winner(player1, player2) {
	  if (player1.wins === player2.wins) {
		return "It was a tie!";
	  } else {
		return player1.wins > player2.wins ? player1.name : player2.name;
	  }
	}
  }
  
  const game = new Game();
  game.playGame();
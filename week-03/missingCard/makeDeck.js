// http://www.overclock.net/t/1517621/objects-and-cards-in-javascript

function makeDeck() {
    var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                    "J", "Q", "K");
    var suits = new Array("Clubs", "Diamonds", "Hearts", "Spades");
    
    this.deck = new Array(52);
    
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 13; j++) {
            this.deck[i*ranks.length + j] = new Card(ranks[j], suits[i]);
        }
    }
}

function shuffle() {
    var i, j, temp;
    var n = 10;
    for (i = 0; i < n; i++) {
        for (j = 0; j < this.deck.length; j++) {
            k = Math.floor(Math.random() * this.deck.length);
            temp = this.deck[j];
            this.deck[j] = this.deck[k];
            this.deck[k] = temp;
        }
    }
}

function Deck() {
    
    this.deck = new Array();
    
    this.makeDeck = makeDeck;
    this.shuffle = shuffle;
}

function Card (rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

var deck = new Deck();
deck.makeDeck();
deck.shuffle();
console.log(deck);

/*

var deck = [ { rank: '7', suit: 'Diamonds' },
     { rank: '6', suit: 'Spades' },
     { rank: '2', suit: 'Clubs' },
     { rank: '10', suit: 'Spades' },
     { rank: '2', suit: 'Spades' },
     { rank: '4', suit: 'Hearts' },
     { rank: '2', suit: 'Hearts' },
     { rank: 'K', suit: 'Spades' },
     { rank: '6', suit: 'Clubs' },
     { rank: 'A', suit: 'Diamonds' },
     { rank: '3', suit: 'Clubs' },
     { rank: 'K', suit: 'Hearts' },
     { rank: '3', suit: 'Spades' },
     { rank: '6', suit: 'Diamonds' },
     { rank: '2', suit: 'Diamonds' },
     { rank: '5', suit: 'Diamonds' },
     { rank: '10', suit: 'Diamonds' },
     { rank: '7', suit: 'Hearts' },
     { rank: '4', suit: 'Diamonds' },
     { rank: '9', suit: 'Hearts' },
     { rank: '8', suit: 'Diamonds' },
     { rank: 'Q', suit: 'Clubs' },
     { rank: 'J', suit: 'Hearts' },
     { rank: '7', suit: 'Clubs' },
     { rank: 'A', suit: 'Hearts' },
     { rank: '9', suit: 'Diamonds' },
     { rank: 'Q', suit: 'Diamonds' },
     { rank: '10', suit: 'Clubs' },
     { rank: '3', suit: 'Hearts' },
     { rank: 'J', suit: 'Spades' },
     { rank: '5', suit: 'Spades' },
     { rank: '8', suit: 'Hearts' },
     { rank: '8', suit: 'Spades' },
     { rank: '5', suit: 'Clubs' },
     { rank: 'J', suit: 'Diamonds' },
     { rank: '3', suit: 'Diamonds' },
     { rank: '5', suit: 'Hearts' },
     { rank: 'A', suit: 'Spades' },
     { rank: 'A', suit: 'Clubs' },
     { rank: 'K', suit: 'Diamonds' },
     { rank: '10', suit: 'Hearts' },
     { rank: '7', suit: 'Spades' },
     { rank: 'J', suit: 'Clubs' },
     { rank: '6', suit: 'Hearts' },
     { rank: '4', suit: 'Spades' },
     { rank: '4', suit: 'Clubs' },
     { rank: 'K', suit: 'Clubs' },
     { rank: '8', suit: 'Clubs' },
     { rank: 'Q', suit: 'Hearts' },
     { rank: 'Q', suit: 'Spades' },
     { rank: '9', suit: 'Clubs' },
     { rank: '9', suit: 'Spades' } ];

*/

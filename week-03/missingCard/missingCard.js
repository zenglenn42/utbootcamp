
// Get random deck from:
// http://www.overclock.net/t/1517621/objects-and-cards-in-javascript

var deck = [ 
     { rank: '7', suit: 'Diamonds' },
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
     /*{ rank: '9', suit: 'Clubs' },*/
     { rank: '9', suit: 'Spades' } ];

var freq = {};

for (var i = 0; i < deck.length; i++) {
    var rank = deck[i].rank;
    var suit = deck[i].suit;
    if (freq[rank] === undefined) {
        freq[rank] = 1;
    } else {
        freq[rank]++;
        if (freq[rank] == 4) {
            delete freq[rank];
        }
    }
    if (freq[suit] === undefined) {
        freq[suit] = 1;
    } else {
        freq[suit]++;
        if (freq[suit] == 13) {
            delete freq[suit];
        }
    }
}
console.log("This missing card is:", freq);
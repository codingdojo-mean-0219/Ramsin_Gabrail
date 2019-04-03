
// The Deck should contain the 52 standard Cards
// The Deck should be able to shuffle
// The Deck should be able to reset
// The Deck should be able to deal a random Card
// Deal should return the Card that was dealt and remove it from the Deck
class Deck{
    constructor(){
        this.deck = [];
        this.reset();
        this.shuffle();
    }
  
    reset(){
        this.deck = [];
  
        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  
        for (let suit in suits) {
            for (let value in values) {
                this.deck.push(`${values[value]} of ${suits[suit]}`);
            }
        }
    }
  
    shuffle(){
        const { deck } = this;
        let m = deck.length, i;
    
        while(m){
            i = Math.floor(Math.random() * m--);
    
            [deck[m], deck[i]] = [deck[i], deck[m]];
         }
  
        return this;
    }
  
    deal(){
        return this.deck.pop();
    }
}
  
const deck1 = new Deck();
console.log(deck1.deck);
deck1.reset();
console.log(deck1.deck);
  
// The Player should have a name
// The Player should have a hand (an array of cards taken from a Deck)
// The Player should be able to take a Card (use the deck.deal method)
// The Player should be able to discard a Card

class Player{
    constructor(name) {
        this.name = name;
        this.hand = []
    }
    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discard() {
        this.hand.pop();
        return this;
    }
}

const deck2 = new Deck();
deck2.reset();
console.log(deck2);

const player2 = new Player("Jackson");
player2.draw(deck2).draw(deck2).draw(deck2).draw(deck2).draw(deck2);
console.log(player2);
console.log(deck2);
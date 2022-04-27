const SUITS=["♠","♥","♣","♦"]
const VALUES =["A","2","3","4","5","6","7","8","9","10","K","Q","J"]

export default class Deck{
    constructor(cards = cleanDeck()){
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }


    //returns the first card in each players deck
    pop(){
        return this.cards.shift()
    }
    
    push(card){
        this.cards.push(card)
    }

    shuffle(){
        // Shuffle gets the value of an old card and swaps with another card
        for (let i = this.numberOfCards - 1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i +1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }

    get color(){
        return this.suit ==="♣" || this.suit ==="♠" ? 'black' : 'red'
    }

    getHTML(){
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value =`${this.value} ${this.suit}`
        return cardDiv
    }
}

function cleanDeck(){
    return SUITS.flatMap(suit =>{
        return VALUES.map(value=>{
            return new Card(suit, value)
        })
    })
}
// Code your solutions in this file 
let realCards = [];
let cards = ["Charlie", "Jennifer", "Branson"];
function writeCards(cards) {
    for (let a = 0; a < cards.length; a++) {
        realCards.push(`Thank you, ${cards[a]}, for the wonderful surprise gift!`);
        debugger; 
         } 
    return realCards;
}

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
    console.log(countDown--);
    }
}
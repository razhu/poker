// Exercise 1 Write some code that will evaluate a poker hand and determine its rank.
// Hand: Ah As 10c 7d 6s (Pair of Aces)
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)

const { pairAces, twoPair, flush } = require('./cards')

function determineRank(hand) {
    const cleanHand = hand.trim()
    let rank = ''
    const value = pairAces(cleanHand) + twoPair(cleanHand) + flush(cleanHand);
    switch (value) {
        case 1:
            rank = 'Its a Pair of Aces!'
            break;
        case 2:
            rank = 'Its a 2 Pair!'
            break;
        case 5:
            rank = 'Its a Flush!'
            break;
        default:
            break;
    }
    return rank;
}


console.log(determineRank('Ah As 10c 7d 6s'));
console.log(determineRank('Kh Kc 3s 3h 2d'));
console.log(determineRank('Kh Qh 6h 2h 9h'));
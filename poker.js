// Exercise 1 Write some code that will evaluate a poker hand and determine its rank.
// Hand: Ah As 10c 7d 6s (Pair of Aces)
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)

const { pairAces, twoPair, flush } = require('./ranks')

const determineRank = (hand) => {
    let rank = ''
    const cleanHand = hand.trim()
    const rankValue = pairAces(cleanHand) + twoPair(cleanHand) + flush(cleanHand);
    switch (rankValue) {
        case 1:
            rank = 'It\'s a Pair of Aces!'
            break;
        case 2:
            rank = 'It\'s a 2 Pair!'
            break;
        case 5:
            rank = 'It\'s a Flush!'
            break;
        default:
            rank = 'Hand is invalid!'
            break;
    }
    return rank;
}

module.exports = determineRank;
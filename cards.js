// Exercise 1 Write some code that will evaluate a poker hand and determine its rank.
// Hand: Ah As 10c 7d 6s (Pair of Aces)
// Hand: Kh Kc 3s 3h 2d (2 Pair) 
// Hand: Kh Qh 6h 2h 9h (Flush)

const pairAces = (hand) => { // 'Ah As 10c 7d 6s'
    let cards = hand.split(' ');
    return cards.filter(c => c[0] === 'A').length === 2 ? 1 : 0;
}

const twoPair = (hand) => { // 'Kh Kc 3s 3h 2d'
    let cards = hand.split(' ');
    let elements = {}
    for( let c of cards) {
        if(!elements[c[0]]) {
            elements[c[0]] = 1;
        } else {
            elements[c[0]] += 1;
        }
    }
    return Object.values(elements).filter(e => e === 2).length === 2 ? 2: 0 // verifying if there is a 2 pair. 
}

const flush = (hand) => { // 'Kh Qh 6h 2h 9h'
    let cards = hand.split(' ');
    let lastCharacter = cards[0][cards[0].length -1] // last caracter
    return cards.every(c => c[(c.length) - 1] === lastCharacter) ? 5 : 0; // returning 5 or 0 points.
}

module.exports = {
    pairAces,
    twoPair,
    flush
}
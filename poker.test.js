const determineRanks = require('./poker')
 
test('It\'s 2As', () => {
    expect(determineRanks('Ah As 10c 7d 6s')).toBe('It\'s a Pair of Aces!');
});
test('It\'s 2 Pair', () => {
    expect(determineRanks('Kh Kc 3s 3h 2d')).toBe('It\'s a 2 Pair!');
});
test('It\'s Flush', () => {
    expect(determineRanks('Kh Qh 6h 2h 9h')).toBe('It\'s a Flush!');
});
test('Invalid hand', () => {
    expect(determineRanks('3d Qh 6h 2h 9h')).toBe('Hand is invalid!');
});
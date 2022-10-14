# Exercise
Exercise 1 Write some code that will evaluate a poker hand and
determine its rank.

Example:

Hand: Ah As 10c 7d 6s (Pair of Aces)

Hand: Kh Kc 3s 3h 2d (2 Pair) 

Hand: Kh Qh 6h 2h 9h (Flush)

# Disclaimer
Poker has a bunch of hands but this project assumes that the below three hands are the only hands in poker:

Hand: Ah As 10c 7d 6s (Pair of Aces) 2As -> 1 point

Hand: Kh Kc 3s 3h 2d (2 Pair) 2 pair-> 2 points

Hand: Kh Qh 6h 2h 9h (Flush) last letter is the same in the 5 cards -> 5 points

So, whoever has the bigger number wins!

# Dependencies
Project uses: 
- Node v16
- Jest for unit test.

# Install
```sh
npm i
```
# Execution
```sh
npm test
```
# Output
Test cases
```sh
'Ah As 10c 7d 6s'
'Kh Kc 3s 3h 2d'
'Kh Qh 6h 2h 9h'
'3d Qh 6h 2h 9h'
```
![Output](output.png)

// Code your solutions in this file
function printBadges() {

}

function tailsNeverFails() {
  let tails = 0;
  let coinFlip = Math.random();
  while (coinFlip >= 0.5) {
    coinFlip = Math.random();
    tails++;
  }
  return `You got ${tails} tails in a row!`;
}

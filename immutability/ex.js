"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(nrs, rand) {
	return [...Set(...nrs, rand)].sort((a, b) => a > b ? -1 : 1);
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	pickNumber(luckyLotteryNumbers, lotteryNum());
}

console.log(luckyLotteryNumbers);

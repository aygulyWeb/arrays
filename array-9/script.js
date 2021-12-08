// 9) Дан массив из 50 элементов и лежат в диапазоне от -50 до 49 включительно.
// Требуется из одного массива скопировать 
// в другой массив значения в диапазоне от -5 до 5
//  включительно и подсчитать их количество.

var arrRandom = [];

for (var i = 0; i < 50; i++) {
	arrRandom[i] = random(-50, 49);
}

function random(min, max) {
	var rand = min + Math.random() * (max - min + 1);
	return Math.round(rand);
}

console.log(arrRandom);
arrRandom = sqArray(arrRandom);
console.log(arrRandom);

function sqArray(arr) {
	var arrNum = [];

	for (var i = 0; i < arr.length; i++) {
		var num = arr[i];
		if (num >= -5 && num <= 5) {
			arrNum.push(num);
		}
	}
	return arrNum;
}




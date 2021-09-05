const numbers = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];
for (var i = 0; i < numbers.length; i++) {
  console.log("numbers index" + i + " " + numbers[i]);
}

// didejimo
for (var i = 0; i < numbers.length; i++) {
	for (var j = 0; j < numbers.length; j++) {
		if (numbers[i] < numbers[j]) {
			var temp = numbers[j];
		    numbers[j] = numbers[i];
		    numbers[i] = temp;
		}
	}
}
console.log(numbers);

//mazejimo
for (var i = 0; i < numbers.length; i++) {
	for (var j = 0; j < numbers.length; j++) {
		if (numbers[i] > numbers[j]) {
			var temp = numbers[j];
		    numbers[j] = numbers[i];
		    numbers[i] = temp;
		}
	}
}
console.log(numbers);



/*- Išsaugokite šiuos skaičius į `skaiciuMasyvas`: 100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27

- Naudojant for loop patikrinti visus skaičius masyve ir naudojant if pakeisti skaičių į mažiausią arba didžiausią, jeigu ankstesnis skaičius mažesnis. Tuomet, per console.log atspausdinti tokį rezultatą:

Skaičių suma: x
var numbers = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 2];
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
// arrSum([20, 10, 5, 10]) -> 45

Skaičių vidurkis: x
const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
// arrAvg([20, 10, 5, 10]) -> 11.25

Didžiausias skaičius: x
const arrMax = arr => Math.max(...arr);
// arrMax([20, 10, 5, 10]) -> 20

Mažiausias skaičius: x*/
//const arrMin = arr => Math.min(...arr);
// arrMin([20, 10, 5, 10]) -> 5
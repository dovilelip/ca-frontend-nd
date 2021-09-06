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




//Suma:
var array = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27];
for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
  console.log(sum.toFixed(2));




//Skaičių vidurkis:
const avg = arr => {
  const sum = arr.reduce((acc, cur) => acc + cur);
  const average = sum/arr.length;
  return average.toFixed(2);
}

console.log(avg([100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]));



//Didžiausias skaičius:
const array1 = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]
console.log(Math.max(...array1));



//Mažiausias skaičius: 
const array2 = [100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27]
console.log(Math.min(...array2));




//- Išsaugokite šiuos skaičius į `skaiciuMasyvas`: 100, 21, 10.211, 300, 41, 21, -41, 0, 1, 27

// Naudojant for loop patikrinti visus skaičius masyve ir naudojant if pakeisti skaičių į mažiausią arba didžiausią, jeigu ankstesnis skaičius mažesnis. Tuomet, per console.log atspausdinti tokį rezultatą:

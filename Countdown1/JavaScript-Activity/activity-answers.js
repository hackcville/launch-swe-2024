// Solution by Ben Life
/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

let bookList = [
	{ title: "Don Quixote", author: "Miguel de Cervantes" },
	{ title: "Ulysses", author: "James Joyce" },
	{ title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
	{ title: "Moby Dick", author: "Herman Melville" },
];

// 1
const addBook = (title, author) => bookList.push({ title: title, author: author });

// 2
const removeBook = (title, author) =>
	(bookList = bookList.filter((book) => book.title != title && book.author != author));

// 3
const listBooks = (property) => bookList.forEach((book) => console.log(book[property]));

// Tests
addBook("To Kill a Mockingbird", "Harper Lee");
removeBook("Ulysses", "James Joyce");
listBooks("title");
console.log("\n");
listBooks("author");

/* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
      number is positive or negative using a ternary operator (assume the number will never be zero) */

const isPositive = (number) => (number > 0 ? "The number is positive" : "The number is negative");

console.log("\n");
console.log(isPositive(1));
console.log(isPositive(-1));

/* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
      the week it is
      i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

const dayStatement = (day) => {
	switch (day) {
		case "Monday":
			console.log("good luck");
			break;
		case "Tuesday":
			console.log("tough tuesday?");
			break;
		case "Wednesday":
			console.log("hump day!");
			break;
		case "Thursday":
			console.log("the day of Thor");
			break;
		case "Friday":
			console.log("party");
			break;
		case "Saturday":
			console.log("party again");
			break;
		case "Sunday":
			console.log("sleep in");
			break;
		default:
			console.log("that's not a day");
	}
};

console.log("\n");
dayStatement("Monday");
dayStatement("Tuesday");
dayStatement("Wednesday");
dayStatement("Thursday");
dayStatement("Friday");
dayStatement("Saturday");
dayStatement("Sunday");

/* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
      number from 1 up to that number
      ex. sumUp(7) = 28 */

const sumUpTo = (number) => {
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += i;
	}
	return sum;
};

console.log("\n");
console.log(sumUpTo(7));
console.log(sumUpTo(0));
console.log(sumUpTo(10));

/* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
      me what I should wear accordingly */

const tempConvert = (celsiusTemperature) => {
	const fahrenheitTemperature = celsiusTemperature * (9 / 5) + 32;
	console.log("The temperature in Fahrenheit is " + fahrenheitTemperature + " degrees");
	if (fahrenheitTemperature < 50) {
		console.log("It's cold! Wear pants and long sleeves.");
	} else if (fahrenheitTemperature < 80) {
		console.log("It's nice weather! Wear what you want.");
	} else {
		console.log("It's hot! Wear shorts and short sleeves.");
	}
};

console.log("\n");
tempConvert(-10);
tempConvert(40);
tempConvert(18);

/* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
      using .forEach() */

const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

const countTruthy = (array) => {
	let count = 0;
	array.forEach((element) => {
		if (element) count++;
	});
	return count;
};

console.log("\n");
console.log(countTruthy(exampleArray));

/* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
      and an averageGrade field representing the letter grade that corresponds to their GPA */

const attendance = [
	{ firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
	{ firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
	{ firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
	{ firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
	{ firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
	{ firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
	{ firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
];

const convertAttendance = (student) => {
	let newInfo = {};
	newInfo.fullName = student.firstName + " " + student.lastName;
	//console.log(newInfo);
	if (student.gpa >= 3.7) {
		newInfo.grade = "A";
	} else if (student.gpa >= 2.7) {
		newInfo.grade = "B";
	} else if (student.gpa >= 1.7) {
		newInfo.grade = "C";
	} else if (student.gpa >= 0.7) {
		newInfo.grade = "D";
	} else {
		newInfo.grade = "F";
	}
	return newInfo;
};

console.log("\n");
const newAttendance = attendance.map(convertAttendance);
for (let i in newAttendance) {
	console.log(JSON.stringify(newAttenance[i]));
}

/* (10) Write a function that solves the "every number eventually equals 4" puzzle. The output should be
      an array of the path you took to make it equal four
      ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
      For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

const units = {
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "ninetten",
};
const tens = {
	20: "twenty",
	30: "thirty",
	40: "fourty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninty",
};

const numToString = (num) => {
	if (num <= 0 || num > 9999) return "Input out of bounds (1-9999)";
	let numString = "";
	if (num > 999) {
		const thousandDigit = Math.floor(num / 1000);
		numString += units[thousandDigit] + "thousand";
		num = num % 1000;
	}
	if (num > 99) {
		const hundredDigit = Math.floor(num / 100);
		numString += units[hundredDigit] + "hundred";
		num = num % 100;
	}
	if (num > 19) {
		const tensDigit = Math.floor(num / 10);
		numString += tens[tensDigit * 10];
		num = num % 10;
	}
	numString += units[num];
	return numString;
};

const fourPuzzle = (num) => {
	let path = [num];
	while (path[path.length - 1] !== 4) {
		const numString = numToString(num);
		num = numString.length;
		path.push(num);
	}
	return path;
};

console.log("\n");
console.log(JSON.stringify(fourPuzzle(4)));
console.log(JSON.stringify(fourPuzzle(8)));
console.log(JSON.stringify(fourPuzzle(2947)));

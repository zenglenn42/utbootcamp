// ------------------------------------------------------
// File: calc.js
//
// Simple webapp calculator object model.
//
// This file defines a 5-function calculator suitable
// for use by javascript clients.
// ------------------------------------------------------


// Object: calc
// ------------------------------------------------------
// The calc object provides the model for our calculator
// webapp.  It maintains the state of the calculator and
// provides methods for performing calculations.
//
// Usage example:
// ------------------------------------------------------
// To add two numbers:  10 + 23
//
// calc.num.push(1);  			// calc.num = [1];
// calc.num.push(0);  			// calc.num = [1, 0];
//
// calc.setOperator("plus"); 		// calc.operator = "plus"
//					// calc.num1 = 10;
//
// calc.num.push(2);			// calc.num = [2];
// calc.num.push(3);			// calc.num = [2, 3];
//
// result = calc.run(); 		// calc.num2 = 23
//					// calc.result = 33;
//
// NB: It is important to run calc.init() inbetween separate
//     calculations to clear out numbers, etc from the past.	

var calc = {
	validOperators: ["plus", "minus", "times", "divide", "power"],
	operator: "", // e.g., "plus"  The operator to use in the calculation.
	num: [],
	num1: undefined,
	num2: undefined,
	result: undefined,
	init: function() {
		
		// Initialize the state of the calc object to pristine form.

		this.operator = "";
		this.num = [];
		this.num1 = undefined;
		this.num2 = undefined;
		this.result = undefined;
	},
	setOperator: function(operator) {

		// Only update the object's operator if what got
		// passed in is valid.

		if (this.validOperators.indexOf(operator) === -1) {
			console.log("setOperator: Invalid operator: ", operator);
			console.log("setOperator: This is vary bad :-(");
			console.log("setOperator: this.num1 will not be updated");
		} else {
			this.operator = operator;

			// Since we're doing infix parsing, we can latch
			// in the first operand in numeric form since we've
			// detected the user has entered an operator and thus
			// is done entering in their first operand.
			//
			// NB: This assumes support for binary operations only.
			//     Sorry unary -1, you'll come with rev 2.0. ;-)

			this.num1 = arrayToNum(this.num);
			console.log("setOperator: num1: ", this.num1);
			console.log("setOperator: operator: ", this.operator);

			// Reset num array so it's fresh to take on
			// the second operand of (pushed) numbers.

			this.num = [];
		}
	},
	hasOperator: function() {
		return (this.operator.length > 0);
	},
	hasResult: function() {
		return (this.result !== undefined);
	},
	hasFirstNumber: function() {
		return (!isNaN(this.num1));
	},
	hasBothNumbers: function() {
		return (!isNaN(this.num1) && !isNaN(this.num2));
	},
	run: function() {

		// Since we're doing infix parsing, we can latch in
		// the second operand in numeric form b/c user presumably pressed
		// "=" and triggered a call to calc.run().  So they've
		// obviously stopped entering in the digits of the second
		// number.

		this.num2 = arrayToNum(this.num);

		// Validate we have two valid operands.
		// Console log otherwise and bail with NaN for result.

		if (isNaN(this.num1)) {
			console.log("run: this.num1 is not a number :-/ ", this.num1);
			console.log("run: quitting calculation");
			this.result = NaN;
			return this.result;
		}
		if (isNaN(this.num2)) {
			console.log("run: this.num2 is not a number :-/ ", this.num2);
			console.log("run: quitting calculation");
			this.result = NaN;
			return this.result;
		}

		// Perform the calculation.  
		switch(this.operator) {
			case "plus":
				this.result = this.num1 + this.num2;
				break;
			case "minus":
				this.result = this.num1 - this.num2;
				break;
			case "times":
				this.result = this.num1 * this.num2;
				break;
			case "divide":
				this.result = this.num1 / this.num2;
				break;
			case "power":
				this.result = Math.pow(this.num1, this.num2);
				break;
			default: {
				console.log("run: Illegal operator: ", operator);
				console.log("run: Sorry can't compute anything. :-/");
				this.result = NaN;
				break;
			}
		}
		return this.result;
	},
	runUnitTests: function() {
		var passed = unitTests();
		if (passed) {
			console.log("Unit tests passed. :-)");
		} else {
			console.log("Unit tests failed. :-(");
			console.log("Please investigate.");
		}
		return passed;
	}
}

// Function: arrayToNum
// Usage: var num = arrayToNum(numArray);
// --------------------------------------
// Takes an array of numbers, joins them together, then
// converts the resulting joined string to a number.
//
// e.g., [1, 2, 3] --> "123" --> 123

function arrayToNum(numArray) {
	var result = 0;
	var numStr = numArray.join("");
	if (numArray.length > 0) {
		result = parseInt(numStr);
		if (isNaN(result)) {
			console.log("arrayToNum: NaN from input:", numArray);
			console.log("arrayToNum: overriding to 0");
			result = 0;
		}
	} else {
		console.log("arrayToNum: encountered empty input numArray");
		console.log("arrayToNum: returning 0");
	}
	return result;
}

// Function: unitTests
// Usage: unitTests();
// ------------------
// Console logs the result of adding two numbers using the
// calc object.
//
// TODO: This could be enhanced to support all operands and
//       flag when the expected value is not returned.

function unitTests() {

	// 10 + 23 = 33

	calc.init();

	// 10

	calc.num.push(1);
	calc.num.push(0);
	console.log("calc.num", calc.num);

	// +

	calc.setOperator("plus");
	console.log("calc.operator", calc.operator);
	console.log("calc.num1", calc.num1)

	// 23

	calc.num.push(2);	// num = [2];
	calc.num.push(3);	// num = [2, 3];
	console.log("calc.num", calc.num);

	// =

	result = calc.run(); // joinedNum = 23;
	console.log("calc.num2", calc.num2);
	console.log(result);

	// Return true if the actual answer matches expected answer.
	return (result === 33);
}

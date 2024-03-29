// Project: Project 3
// Name: Zachary Gover
// Student Number: 0003013517
// Date: December 11th, 2014
// Term Number: 1412
// Course: SDI

//-------------- Global Variables ------------------//
var offer = "We\'ve accepted to the offer from freelancer";
var acceptedOffer = true;
var hiring = "Yes, we are going to hire more people";
var hireAmmount = 2;
var companyName = "Gover Development";

//-------------- Functions ------------------//

var stringFunction = function(leadEmp, regularEmp) {
	
	for (var i = 0; i < leadEmp.leadEmployees.length; i++){
	       
		var leadEmployees = json1.leadEmployees[i];
		var regularEmployees = json2.regularEmployees[i];
		
		var leadEmployeeName = "Lead Employee: \n" + leadEmployees.employeename + "\n\n";
		var regularEmployeeName = "Regular Employee: \n" + regularEmployees.employeename + "\n\n";
		
		console.log(leadEmployeeName, regularEmployeeName);
		
	};
	
	var question = prompt("What position is Zachary?", "Lead Developer");
		
	if (question === "Lead Developer") {
		
		console.log("You're Correct!");
		
		return question;
		
	} else {
		
		var answer = console.log("You're incorrect!");
		
		return answer;
		
	}
	
};

var numberFunction = function(hireAmmount) {
	
	while (hireAmmount > 3 && hireAmmount > 1){
		
		if (hireAmmount > 3) {
			
			console.log("You said: " + hireAmmount);
			
			console.log("That's a little high, let\'s minus 1 from that.");
			
			hireAmmount = hireAmmount - 1;
			
		} else if (hireAmmount < 1) {
			
			console.log("You said: " + hireAmmount);
			
			console.log("That's a little high, let\'s add 1 from that.");
			
			hireAmmount = hireAmmount + 1;
			
		}
		
	};
	
	console.log("Alright!, " + hireAmmount + " is a good number. Let's hire one more just in case.");
	
	hireAmmount = hireAmmount + 1;
	
	return hireAmmount;
	
};


var procedureFunction = function(argArray) {
	
	var listEmployeesFirstName = argArray.join(", ");
	
	console.log("Here is a list of all of the employee\'s: \n" + listEmployeesFirstName);
	
	var employeeAmmount = parseInt(prompt("How many employee\'s do we have?", "4"));
	
	for (employeeAmmount; employeeAmmount > 4; employeeAmmount++) {
		
		var doubleCheck = confirm("You said: " + employeeAmmount + ", is this correct? OK for yes and Cancel for No.");
		
		while (doubleCheck === false) {
			
			var doubleCheck = confirm("That answer was incorrect please try again. OK for yes and Cancel for No.");
			
		};
		
	};
	
	var firstTwoNames = argArray[0] + " " + argArray[1];
	console.log(firstTwoNames);
	
	return firstTwoNames;
	
};

var booleanFunction = function(argAge) {
	
	if (argAge === true) {
		
		console.log("You\'re Correct! Good job!");
		
	} else {
		
		onsole.log("You\'re Incorrect! Better luck next time!");
		
	}
	
	return argAge;
	
}

//-------------- Main Code ------------------//

console.log("Welcome, my name is Zachary Gover I am a Co-Founder of Gover Development.");

var acceptOffer = prompt("Would you like to accept a project offer from Freelancer.com?", "Yes or No");
acceptOffer = acceptOffer.charAt(0).toUpperCase() + acceptOffer.slice(1);

if (acceptOffer === "Yes") {
	
	// Section One
	var employeeAnswer = stringFunction(json1, json2);
	
	
	// Section Two
	var hireQuestion = parseInt(prompt("How many people are we going to hire?", "2"));
	var hiringAmmount = numberFunction(hireQuestion);
	
	// Section Three
	var listEmployees = ["Zachary", "Stephanie", "Joshua", "Joe"];
	var employeeQuestion = procedureFunction(listEmployees);
	
	// Section Four
	var myAge = confirm("My age is 19 year\'s old. Is this correct?");
	var ageQuestion = booleanFunction(myAge);
	
	console.log("\n \n *PROJECT COMPLETED!*");

	
} else {
	
	// Prompt user to see if they really didn't want the project and capitalize the first letter in the string
	var whyNot = prompt("Did you not want the project?", "Yes or No");
	whyNot = whyNot.charAt(0).toUpperCase() + whyNot.slice(1);
	
	// String Conditional
	if (whyNot === "Yes") {
		
		console.log("Wow, it amazes me that people don\'t read before they click." +
			    " Because if you wanted the job like you just said, then you would have said it the first time." +
			    " Oh well, better luck next time.");
		
	} else {
		
		console.log("Okay, I\'ll keep looking for another project.");
		
	}
	
}



















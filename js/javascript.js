// JavaScript Document

// the double slash is a single line coment

/*
the single slash and star is the
multi line comment thing, just like AS3
*/

alert('This is an alert.');  // makes a popup window

var name;

while (!name){	// the exclamation point means not
name = prompt("What's your name?");
}

console.log(name); // works line the trace() thing in AS3 - find through firebug console

document.write("Hello, " + name); // will make Hello, Roger (or other name) appear onscreen

for (var i = 0; i < 5; i++){
	document.write("<p>" + i);  // for js, html is just a string - to get the html to work, put in "
	document.write("<h1>" + i + "</h1>");
}

//		FUNCTIONS 

// declarations

function isNameCool () {
	var name = prompt('What is yuohr name?');
	
	if (name == "Roger") {
		document.write("That is an awesome name!");
	}else{
		document.write("You have chosen poorly.");
	}
}

isNameCool();

// assignment (more reusable, etc)

var writeNameManyTimes = function(){
	for (var i = 0; i < 5; i++ ){
		document.write("<br><strong>Roger!</strong>");
	}
}; // this semicolon is becuase of the variable bit

writeNameManyTimes ();
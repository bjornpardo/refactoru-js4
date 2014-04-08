var vicNames=[];
var vicAdds=[];
var vicPhones=[];

var vicNum=+prompt("How many victims would you like to enter?")
for (var i=0; i<vicNum; i++){
	vicNames.push(prompt("Please enter victim\'s name"));
	vicAdds.push(prompt("Please enter victim\'s address"));
	vicPhones.push(prompt("Please enter victim\'s phone number"));	
}

var volNames=[];
var volAdds=[];
var volPhones=[];

	volNames.push(prompt("Please enter your name"));
	volAdds.push(prompt("Please enter your address"));
	volPhones.push(prompt("Please enter your phone number"));	

var summary="Persons in Need: " + vicNames.length + "\n" +
			"Number of Volunteers: " + volNames.length + "\n" +
			"Victim Names: " + vicNames + "\n" +
			"Volunter Names: " + volNames;

alert(summary);
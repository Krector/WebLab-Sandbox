/*  Given an array of text strings and a length, return a list of the
 *  individual strings that are longer than the input length.
*/
var filterArrayOfStrings = function (stringList, inputLength) {
	
	var outputList = [""];
	var listIndex = 0;
	
	if (stringList != null) {
		for ( var index in stringList){
		  
			if (typeof stringList[index] == "string") {
		  		if (stringList[index].length > inputLength) {  //Length qualifies
					outputList[listIndex] = stringList[index];
					listIndex ++;
		  		}
			else {
                document.write ("Element at position " + index.toString + " is not a string.");
			}
		}
	}
	else { //stringList is empty
  
	 	document.write ("Input string list is empty");
	}
  return outputList;

} // End filterArrayStrings

var myStrings =["123", "Now Is The Time", "22", "4", "five ""];
document.write ("got here");
document.write (filterArrayOfStrings (myStrings, 5));
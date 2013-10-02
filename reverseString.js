/* Takes a string of text and reverses the characters */

var ReverseText = function (InputText) {
	var OutputText = "";
	for (var index = InputText.length - 1; index >= 0; index --)
	{
		OutputText += InputText[index];
	}
	return OutputText;
}
document.write ("<p>abcde -> " + ReverseText ('abcde') + "</p>");
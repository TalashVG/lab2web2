var expression = function(num1, num2, num3, name="Vlad"){
	if (arguments.length) {
		var res = num1 + num2 + num3;
		var res2 = name + ", Hello";
		result = res + " " + res2;
		return result;
	}else{
		return "No arguments"
	}
}

var num1 = 2;
var num2 = 3;
var num3 = 5;

document.write(expression(num1, num2, num3));

function declaration(num1, num2, num3, name="Jhon"){
	if (arguments.length) {
		var res = num1 + num2 + num3;
		var res2 = name + ", Hello";
		result = res + " " + res2;
		return result;
	}else{
		return "No arguments"
	}
}

document.write(declaration(num1, num2, num3));
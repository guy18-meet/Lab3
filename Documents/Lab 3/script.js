var Number(num1) = prompt ('Enter num 1','here');
var Number(num2) = prompt ('Enter num 2','here');
var calc = prompt ('Enter one: +,-,*,/');
var result

if (calc== '+') {
	result = num1+num2;
}
else if (calc=='-') {
	result = num1-num2;
}
else if (calc=='*') {
	result = num1*num2;
}
else if (calc=='/') {
	result = num1/num2;
}

alert('Result: ', result);
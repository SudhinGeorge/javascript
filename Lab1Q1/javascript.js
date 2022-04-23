function displayResult(){
	var first_number = document.getElementById("first-number").value;
	var f_num = Number(first_number);

	var second_number = document.getElementById("second-number").value;
	var s_num = Number(second_number);

	var op = document.getElementById("operation").value;

	if(op == 'add') {
		document.getElementById("result-field").innerHTML = f_num + s_num;
	}
	else if (op == 'substract') {
		document.getElementById("result-field").innerHTML = f_num - s_num;
	}
	else if (op == 'multiply') {
		document.getElementById("result-field").innerHTML = f_num * s_num;
	}
	else{
		document.getElementById("result-field").innerHTML = f_num / s_num;
	}


}
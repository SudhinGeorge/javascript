function validate(){

	var u_name = document.getElementById("u_name").value;
	var u_regx = /^[a-zA-Z\.]{3,100}$/;

	var email_Id = document.getElementById("email_Id").value;
	var e_regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	var p_num = document.getElementById("p_num").value;
	var pn_regx = /^[0-9]{10}$/

	var pwd = document.getElementById("pwd").value;
	var pw_regx = /^[a-zA-Z0-9\.-]{6,100}$/;

	userName();

	function userName(){
		if (u_regx.test(u_name)) {
			document.getElementById("u_lbl").style.visibility="hidden";
			emailId();
		}
		else{
			document.getElementById("u_lbl").style.visibility="visible";
	
		}

	}

	function emailId(){
		if (e_regx.test(email_Id)) {
			document.getElementById("email_lbl").style.visibility="hidden";
			mobileNumber();
		}
		else{
			document.getElementById("email_lbl").style.visibility="visible";
		}
	}
	function mobileNumber(){
		if (pn_regx.test(p_num)) {
			document.getElementById("p_lbl").style.visibility="hidden";
			password();
		}
		else{
			document.getElementById("p_lbl").style.visibility="visible";
		}
	}
	function password(){
		if (pw_regx.test(pwd)) {
			document.getElementById("pwd_lbl").style.visibility="hidden";
			alert("Successfully submitted");
		}
		else{
			document.getElementById("pwd_lbl").style.visibility="visible";
		}
	}
}











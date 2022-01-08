function option(){
    const idnumber = document.getElementById("idnumber");
    const pass1 = document.getElementById("pass");
    if(idnumber.value == "user" && pass.value == "user") {
      alert("Login Successfully");
      window.location = "dashboard.html";
    }
    else{
      alert("Login Failed");
    }
     
}

var objPeople = [
	{ // Object @ 0 index
		idnumber: "admin",
		pass: "admin"
	},
	{ // Object @ 1 index
		idnumber: "cristian",
		pass: "cristian"
	},
	{ // Object @ 2 index
		idnumber: "edwin",
		pass: "edwin"
	}

]

function loginstaff() {
	var idnumber = document.getElementById('idnumber').value;
	var pass = document.getElementById('pass').value;
	

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(idnumber == objPeople[i].idnumber && pass == objPeople[i].pass) {
      alert("Login");
      window.location= "dashboard.html";
      return ;
    }
    else if(idnumber !== objPeople[i].idnumber && pass !== objPeople[i].pass) {
      alert("Login Failed");
      return ; 
    }

	}
}
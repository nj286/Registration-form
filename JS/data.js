var errObject = {
  errFname : "",
  errLname : "",
  errContact : "",
  errEmail : "",
  errAddress : "",
  errSsn : "",
  Checked: false
};

const errMessage ={
  errNameMsg : "Please enter valid name",
  errAddrMsg : "Please enter valid address",
  errContactMsg : "Please enter valid contact number",
  errEmailMsg : "Please enter valid email id",
  errSsnMsg : "Please enter valid ssn number"
};

// enable submit button
function enableButton()
{
  if(errObject.errContact == "" && errObject.errEmail == "" && errObject.errFname == "" && errObject.errLname == "" && errObject.errSsn == "" && errObject.errAddress == "" && errObject.Checked)
  {
    enableSubmitButton();
  }
  else
  {
    disableSubmitButton();
  }
}

function enableSubmitButton()
{
  var submit = document.getElementById("submit");
  submit.disabled = false;
    submit.style.backgroundColor = "#bf4d45";
    submit.style.borderColor = "#bf4d45";
}

function disableSubmitButton()
{
  var submit = document.getElementById("submit");
    submit.disabled = true;
    submit.style.backgroundColor = "#e38a84";
    submit.style.borderColor = "#e38a84";
}


// handle checkbox
function handleClick(cb) {
  var license = document.getElementById("license");
  if(cb.checked)
  {
    errObject.Checked = true
    license.innerHTML = "A licensing agreement, or license agreement, is a deal between the owner of a patent, brand, or trademark and someone who wants to use the patented or trademarked goods and services. The license grants permission to the licensee and includes stipulations. The licensee must honor these guidelines.";
  }
  else
  {
    errObject.Checked = false
    license.innerHTML = "";
  }
  enableButton();
}

// handles Navigation
var prevNav = "about";
function navigate(navValue)
{
  document.getElementById(prevNav).style.display = "none";
  document.getElementById(navValue).style.display = "inherit";
  prevNav = navValue; 
}


function validateNumber(event)
{
  var value = event.target.value;
  var regex_num = /[0-9]{10}/;

  if(regex_num.test(value) == false) 
  {
    errObject.errContact = errMessage.errContactMsg;
    event.target.style.borderColor = "#e75d53"
  }
  else
  {
    errObject.errContact = "";
    event.target.style.borderColor = "#FFFFFF"
  }

  document.getElementById("errcontact").innerHTML = errObject.errContact;
  enableButton();

}

function validateName(event)
{
  var value = event.target.value;
  var regex_char = /^[a-zA-Z]+$/;
  if(regex_char.test(value) == false)
  {
    if(event.target.id == "fname")
    {
      errObject.errFname = errMessage.errNameMsg;
    }
    else
    {
      errObject.errLname = errMessage.errNameMsg;
    }
    event.target.style.borderColor = "#e75d53";
  }
  else
  {
    if(event.target.id == "fname")
    {
      errObject.errFname = "";
    }
    else
    {
      errObject.errLname = "";
    }
    
    event.target.style.borderColor = "#FFFFFF";
  }

  if(event.target.id == "fname")
    {
      document.getElementById("errfname").innerHTML = errObject.errFname;
    }
    else
    {
      document.getElementById("errlname").innerHTML = errObject.errLname;
    }

  enableButton()
}

function validateSSN(event)
{
  var value = event.target.value;
  var regex_ssn = /[0-9]{9}/;
  if(regex_ssn.test(value) == false) 
  {
    errObject.errSsn = errMessage.errSsnMsg
    event.target.style.borderColor = "#e75d53"
  }
  else
  {
    errObject.errSsn = "";
    event.target.style.borderColor = "#FFFFFF"
  }
  document.getElementById("errssn").innerHTML = errObject.errSsn;
  enableButton();
}

function validateEmail(event)
{
  var value = event.target.value;
  var regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if(regex_email.test(value) ==  false)
  {
    errObject.errEmail = errMessage.errEmailMsg;
    event.target.style.borderColor = "#e75d53";
  }
  else
  {
    errObject.errEmail = "";
    event.target.style.borderColor = "#FFFFFF";
  }
  document.getElementById("erremail").innerHTML = errObject.errEmail;
  enableButton();
}

function validateAddress(event)
{
  var value = event.target.value;
  if(value ==  "")
  {
    errObject.errAddress = errMessage.errAddrMsg;
    event.target.style.borderColor = "#e75d53";
  }
  else
  {
    errObject.errAddress = "";
    event.target.style.borderColor = "#FFFFFF";
  }
  document.getElementById("erraddr").innerHTML = errObject.errAddress;
  enableButton();

}


function myFunction() {
    var frm = document.getElementById('myform');
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var number = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var ssn = document.getElementById("ssn").value;
    var address = document.getElementById("address").value;

    var license = document.getElementById("license");

    var response = document.getElementById("marker");
    var img = document.getElementById("img1");
    var msg = document.getElementById("msg");

    var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 ) {
      response.style.display = "inherit"
      msg.innerHTML = this.responseText;
      if(this.status == 200)
      {
        frm.reset();
        submit.disabled = false;
        submit.style.backgroundColor = "#bf4d45";
        submit.style.borderColor = "#bf4d45";
        img.src = "tick1.png"
        license.innerHTML = ""
        disableSubmitButton();
      }
      else
      {
        enableSubmitButton();
        img.src = "cross.png"
      }
      
     }
  }
  xmlhttp.open("POST", "http://localhost:8080/sendData");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify({"firstName": fname,
    "lastName": lname,
    "contact": number,
    "email": email,
    "ssn": ssn,
    "address": address}));
}

function drawTable(data)
{
  var div1 = document.getElementById('table1');
 
        var tbl = document.createElement("table");
        var title = document.createElement("tr");
        for(key in data[0])
        {
          if(key == "id")
          {
            continue;
          }
          var cell = document.createElement("td");
          cell.innerHTML = key;
          title.appendChild(cell)
        }
        tbl.appendChild(title);

        // creating rows
        for (var r = 0; r < data.length; r++) {
            var row = document.createElement("tr");
	     
        // create cells in row
            for(key in data[r])
            {
              if(key == "id")
              {
                continue;
              }
              var cell = document.createElement("td");
              cell.innerHTML = data[r][key];
              row.appendChild(cell)
            }
	          tbl.appendChild(row); // add the row to the end of the table body
        }
  div1.appendChild(tbl); // appends <table> into <div1>
}


// Handles search by user name

function searchName(uName)
{
  var div1 = document.getElementById('table1');
  var p1 = document.getElementById("errmsgname");
  var p2 = document.getElementById("errmsgaddr");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    
    if (this.readyState == 4 ){    
      var obj = JSON.parse(this.responseText);
      p1.innerHTML = "&nbsp;";
      p2.innerHTML = "&nbsp;";
      div1.innerHTML = "";
      if(this.status == 200)
      {
        drawTable(obj); 
      }
      else if(this.status == 404)
      {
        div1.innerHTML = "";
        console.log(obj.message);
        p1.innerHTML = obj.message;
      }
     }
  }
  xmlhttp.open("GET", "http://localhost:8080/getDataByName?fname=" + uName);
  xmlhttp.send();
}

function searchAddress(uAddress)
{
  var div1 = document.getElementById('table1');
  var p1 = document.getElementById("errmsgname");
  var p2 = document.getElementById("errmsgaddr");
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 ) {
      obj = JSON.parse(this.responseText);
      p1.innerHTML = "&nbsp;";
      p2.innerHTML = "&nbsp;";
      div1.innerHTML = "";
      if(this.status == 200)
      {
        drawTable(obj); 
      }
      else if(this.status == 404)
      {
        p2.innerHTML = obj.message;
      }
      
     }
  }
  xmlhttp.open("GET", "http://localhost:8080/getDataByAddress?address=" + uAddress);
  xmlhttp.send();
}
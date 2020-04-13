function updateAfterReg(success)
{
    if(success)
    {
        img.src = "image/tick1.png"
        msg.style.color = "#59a070"
    }
    else
    {
        img.src = "image/cross.png"
        msg.style.color = '#c21919'; 
    }
}

function resetForm(frm)
{
    frm.reset();
    disableSubmitButton();
    updateAfterReg(true) 
}

function resetSearchPage()
{
    var div1 = document.getElementById('table1');
    var p1 = document.getElementById("errmsgname");
    var p2 = document.getElementById("errmsgaddr");
    document.getElementById("username").innerHTML = "";
    document.getElementById("useraddress").innerHTML = "";
    p1.innerHTML = "&nbsp;";
    p2.innerHTML = "&nbsp;";
    div1.innerHTML = "";
}

function RegisterUser() {
    var frm = document.getElementById('myform');
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
      var status = false;
      if(this.status == 200)
      {
        status = true;
        license.innerHTML = "" 
        resetForm(frm)
      }
      else if(this.status == 0)
      {
        status = false  
        msg.innerHTML = errMessage.errTimeOut;
      }
      else
      {
        status = false
        disableSubmitButton();
      }
      updateAfterReg(status)
     }
  }
  xmlhttp.open("POST", "http://localhost:8080/sendData");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify({"firstName": frm["fname"].value,
    "lastName": frm["lname"].value,
    "contact": frm["contact"].value,
    "email": frm["email"].value,
    "ssn": frm["ssn"].value,
    "address": frm["address"].value}));
}

// Handles search by user name
function searchName(uName)
{
  var p1 = document.getElementById("errmsgname");
  var xmlhttp = new XMLHttpRequest();
  resetSearchPage()

  if(uName.value != "")
  {
    xmlhttp.onreadystatechange = function()
    {
    if (this.readyState == 4 ){    
        if(this.status == 0)
        {
          p1.innerHTML = errMessage.errTimeOut;
        }
        else
        {
            var obj = JSON.parse(this.responseText);
            if(this.status == 200)
            {
                drawTable(obj); 
            }
            else 
            {
                p1.innerHTML = obj.message;
            }
        }
     }
  }
  xmlhttp.open("GET", "http://localhost:8080/getDataByName?fname=" + uName);
  xmlhttp.send();
  }
  else
  {
    p1.innerHTML = errMessage.validName;
  }
  
}

// Handles search by address
function searchAddress(uAddress)
{
  var p2 = document.getElementById("errmsgaddr");
  var xmlhttp = new XMLHttpRequest();
  resetSearchPage()

  if(uAddress.value != "")
  {
    xmlhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 ) {
      if(this.status == 0)
      {
        p2.innerHTML = errMessage.errTimeOut;
      }
      else
      {
        obj = JSON.parse(this.responseText);
       
        if(this.status == 200)
        {
          drawTable(obj); 
        }
        else
        {
          p2.innerHTML = obj.message;
        }
      }
     }
  }
  xmlhttp.open("GET", "http://localhost:8080/getDataByAddress?address=" + uAddress);
  xmlhttp.send();
  }
  else
  {
    p2.innerHTML = errMessage.validAddress;
  }
  
}


function drawTable(data)
{
  var div1 = document.getElementById('table1');
  var tbl = document.createElement("table");
  var title = document.createElement("tr");
    
        for(var i = 0; i< Object.keys(data[0]).length - 1; i++)
        {
          var cell = document.createElement("td");
          cell.innerHTML = Titles[i];
          title.appendChild(cell)
        }
        tbl.appendChild(title);
        for (var r = 0; r < data.length; r++) {
            var row = document.createElement("tr");
            for(key in data[r])
            {
              if(key == "id")
              { continue;}
              var cell = document.createElement("td");
              cell.innerHTML = data[r][key];
              row.appendChild(cell)
            }
	          tbl.appendChild(row); // add the row to the end of the table body
        }
  div1.appendChild(tbl); // appends <table> into <div1>
}
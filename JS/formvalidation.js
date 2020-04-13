// update the input box style based on validation
function handleError(event, valid)
{
    if(valid)
    {
        event.target.style.borderColor = "#FFFFFF"
        errObject = ""
    }
    else
    {
        event.target.style.borderColor = "#e75d53"
    }
}

// validate contact number
function validateNumber(event)
{
  errObject = errMessage.errContactMsg;

  var value = event.target.value;
  var regex_num = /[0-9]{10}/;

  validated = regex_num.test(value)
  handleError(event, validated)
  document.getElementById("errcontact").innerHTML = errObject;
  enableButton();
}

// validate ssn number
function validateSSN(event)
{
  errObject = errMessage.errSsnMsg;

  var value = event.target.value;
  var regex_ssn = /[0-9]{9}/;

  validated = regex_ssn.test(value)
  handleError(event, validated)
  document.getElementById("errssn").innerHTML = errObject;
  enableButton();
}

//  validate email id
function validateEmail(event)
{
  errObject = errMessage.errEmailMsg;

  var value = event.target.value;
  var regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  validated = regex_email.test(value)
  handleError(event, validated)
  document.getElementById("erremail").innerHTML = errObject;
  enableButton();
}

// validate address
function validateAddress(event)
{
  errObject = errMessage.errAddrMsg;
  var regex_address = /^$|\s+/;
  var value = event.target.value;

  validated = regex_address.test(value)
  handleError(event, !validated)
  document.getElementById("erraddr").innerHTML = errObject;
  enableButton();
}

// validate name
function validateName(event)
{
  errObject = errMessage.errNameMsg;

  var value = event.target.value;
  var regex_char = /^[a-zA-Z]+$/;

  validated = regex_char.test(value)
  handleError(event, validated)
 
  if(event.target.id == "fname")
  {
      document.getElementById("errfname").innerHTML = errObject;
  }
  else
  {
      document.getElementById("errlname").innerHTML = errObject;
  }
  enableButton()
}

// handle checkbox
function handleClick(cb) {
    var license = document.getElementById("license");
    if(cb.checked)
    {
      Checked = true
      license.innerHTML = licenseText;
    }
    else
    {
      Checked = false
      license.innerHTML = "";
    }
    enableButton();
}

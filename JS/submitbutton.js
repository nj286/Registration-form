// enable submit button
function enableButton()
{
  if(errObject ==  ""  && Checked)
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


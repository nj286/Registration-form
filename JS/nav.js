//
function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    document.getElementsByTagName('head').item(0).appendChild(script);     
}

include("JS/constant.js")
include("JS/submitbutton.js")
include("JS/formvalidation.js")
include("JS/httpconnection.js")




// handles Navigation
var prevNav = "about";
function navigate(navValue)
{
  document.getElementById(prevNav).style.display = "none";
  document.getElementById(navValue).style.display = "inherit";
  prevNav = navValue; 
}
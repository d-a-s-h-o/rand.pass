
var num = document.getElementById('number');
/*all checkboxes*/
var check_num = document.getElementById('numCheck');
var symCheck = document.getElementById('symCheck');
var smCheck = document.getElementById('smCheck');
var capCheck = document.getElementById('capCheck');

/*output show*/
var output = document.getElementById('output');

/*password character num*/
var pass_num = document.querySelector('#char_num');
/*password strength*/
var strength = document.querySelector('#strength');



var randomPassword = function(length)
{
  chars_cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  chars_num = "1234567890";
  chars_sym = "!@`~#$%^&*()";
  chars_small = "abcdefghijklmnopqrstuvwxyz";


  var pass = "";
  var new_pass = "";

/* Primeiro loop for // first for loop */
  for(i=0;i<length;i++)
  {

    if (check_num.checked == true) {
        x = Math.floor(Math.random() * chars_num.length);
        pass += chars_num.charAt(x);
    }
    if(symCheck.checked == true){
        y = Math.floor(Math.random() * chars_sym.length);
        pass += chars_sym.charAt(y);
    }
    if(smCheck.checked == true){
        z = Math.floor(Math.random() * chars_small.length);
        pass += chars_small.charAt(z);
    }
    if (capCheck.checked == true){
        w = Math.floor(Math.random() * chars_cap.length);
        pass += chars_cap.charAt(w);
    }
 }
  
/*  Segundo loop for // second for loop */
    for(i=0;i<length;i++){
      k = Math.floor(Math.random() * pass.length);
      new_pass += pass.charAt(k);       
    }

      /* final password */
      output.value = new_pass;


    /*check password strength*/
    if (new_pass.length <= 5){
        strength.innerHTML = "Weak";
        strength.style.color = "#feff00";
    }
    else if(new_pass.length >= 20){
         strength.innerHTML = "Very Strong";
         strength.style.color = "#2dff02";
    }
     else if(new_pass.length >= 8){
         strength.innerHTML = "Strong";
         strength.style.color = "#2dff02";
     }
     else{
         strength.innerHTML = "Normal";
         strength.style.color = "#2dff02";
     }

}

/* password generate */
function generate() {
  var length = pass_num.value;

  if (length >= 0) {
    randomPassword(length);
  } 
}


/* copy password */
function copyFunction() {
  output.select();
  output.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Your password: " + "************" + " has been coppied to the clipboard");
}
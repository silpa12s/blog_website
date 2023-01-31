 function validateLogin() {
     var login=document.getElementById('login');
     var email=document.getElementById('form2Example11').value;
     var password=document.getElementById('form2Example22').value;
     login.style.display="none";

     if(email.length==0){
         login.innerText="Email is required!";
         login.style.display="block";
         return false;
     }
     if(password.length<5){
         login.innerText="Password is required!";
         login.style.display="block";
         return false;
        }
        
        return true;
 }

  function validateForm() {
      let submiError=document.getElementById('submit-Error');
      var email=document.getElementById('form2Example11');
      var password=document.getElementById('form2Example22');
      if(!validateLogin()){
         submiError.innerHTML="Please fill out all the feilds!";
        return false;
      }else{
        alert("Welcome to our website!");
        return true;
      }
  }








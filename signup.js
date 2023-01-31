


function validateName() {
    let nameError=document.getElementById('name-error');
    let name=document.getElementById('form2Example11');
    if(name.value.trim()==''){
        nameError.innerHTML='Username is required!';
       name.style.border="solid 3px red";
        return false;
    }else if(name.value.length<6){
        nameError.innerHTML='username must not be less than 6!';
        return false;
    }else{
      nameError.innerHTML='';
      name.style.border="solid 3px green";
      return true;
    }

        
    }



function validateEmail(){
    let email=document.getElementById('registerEmail');
    let emailError=document.getElementById('email-error');
    

    let regEx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.value.trim()==''){
        emailError.innerHTML='Email is required!'
        email.style.border="solid 3px red";
        return false;
    } else if(!email.value.match(regEx)){
        emailError.innerHTML="Email is not in global format"
        return false;
    }else{
        emailError.innerHTML=''
        email.style.border="solid 3px green";
        return true;
    }

}



function validatePassword(){
    let password=document.getElementById('form2Example22');
    let passwordError=document.getElementById('password-error');
    


    if(password.value.trim()==''){
        passwordError.innerHTML='Password is required!';
        password.style.border="solid 3px red";
        return false;
    }else if(password.value.length<6){
        passwordError.innerHTML='password length is too short';
        password.style.border="solid 3px red";
        return false;
    }
    else{
        passwordError.innerHTML=''
        password.style.border="solid 3px green";
        return true;
    }
}

function validateRepeat(){
    
    let password=document.getElementById('form2Example22');
    let repeatPassword=document.getElementById('registerRepeatPassword');
    let repeatError=document.getElementById('rpassword-error');

    if(password.value!=repeatPassword.value){
        repeatError.innerHTML='password doesnt match';
        repeatPassword.style.border="solid 3px red";
        return false;
      }else if
        (repeatPassword.value.trim()==''){
            repeatPassword.innerHTML='Password is required!';
            repeatPassword.style.border="solid 3px red";
            return false;
        } else{
        repeatError.innerHTML=''
        repeatPassword.style.border="solid 3px green";
        return true;
      }
    }
 

  function validateForm(){
    let submiError=document.getElementById('submit-Error');
    if(!validateName()||!validateEmail()||!validatePassword()||!validateRepeat()){
    submiError.innerHTML="Please fill out all the feilds!";
    return false;
   }else{
    alert("Welcome to our website!");
    return true;
   }
}


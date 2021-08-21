const username=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const phone=document.getElementById('phone');
const success=document.getElementById('success');
const fail=document.getElementById('fail');
success.style.display="none";
fail.style.display="none";
let validEmail=false;
let validPhone=false;
let validPass=false;
let validUser=false;

username.addEventListener("blur",(event)=>{
    let regex=/^[a-zA-Z]{2}[a-zA-Z0-9@_]{0,10}$/;
      validUser=regex.test(username.value);
    if(regex.test(username.value)){
       username.classList.remove("is-invalid");
       username.nextElementSibling.innerHTML="";
    }
    else{
      username.classList.add("is-invalid");
      username.nextElementSibling.innerHTML="This is invalid";
    }

})
email.addEventListener("blur",(event)=>{
     regex=/^[a-zA-Z0-9-*?&\.]+@[a-zA-Z0-9-*?*&\.]{0,20}.[a-zA-Z0-9]{0,5}$/;
     validEmail=regex.test(email.value);
    if(regex.test(email.value)){
       email.classList.remove("is-invalid");
       email.nextElementSibling.innerHTML="";
    }
    else{
      email.classList.add("is-invalid");
      email.nextElementSibling.innerHTML="This is invalid";
    }
})
password.addEventListener("blur",(event)=>{
     regex=/^[a-zA-Z0-9@_\.\*?#%$!]{3,12}$/;
     validPass=regex.test(password.value)
    if(regex.test(password.value)){
       password.classList.remove("is-invalid");
       password.nextElementSibling.innerHTML="";
    }
    else{
      password.classList.add("is-invalid");
      password.nextElementSibling.innerHTML="This is invalid";
    }
})
phone.addEventListener("blur",(event)=>{
     regex=/^[0-9]{10}$/;
     validPhone=regex.test(phone.value);
    if(regex.test(phone.value)){
       phone.classList.remove("is-invalid");
       phone.nextElementSibling.innerHTML="";
    }
    else{
      phone.classList.add("is-invalid");
      phone.nextElementSibling.innerHTML="This is invalid";
    }
})
let button=document.getElementById("button");
button.addEventListener("click",(event)=>{
  event.preventDefault();
   if(validPass&&validPhone&&validEmail&&validUser){
     console.log("submitted");
     success.style.display="block";
     fail.style.display="none";}
     else
     {
     fail.style.display="block";
     success.style.display="none"
     console.log("error",validPass,validPhone,validEmail,validUser)
     }

})
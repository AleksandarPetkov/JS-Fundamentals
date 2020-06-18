
 function register() {
   let username = document.getElementById('username').value;
   let email = document.getElementById('email').value;
   let password = document.getElementById('password').value;
   
   let checker = checkValidForm(username, email, password);

   if(checker){
    let getSection = document.getElementById('result');
    let createH3 = document.createElement('h3');
    let text = document.createTextNode('Successful Registration!');
    let textUsername = document.createTextNode('Username ' + username);
    let textEmail = document.createTextNode('Email ' + email);

    createH3.appendChild(text);
    
    getSection.appendChild(createH3);
    getSection.appendChild(textUsername);
    getSection.appendChild(textEmail);
   }

 }

 function checkValidForm(username, email, password){
   let checkerU = false;
   let checkerE = false;
   let checkerP = false;
   if(username.length > 0){
     checkerU = true;
   }
   
   let regex = /(.+)@(.+).(com|bg)/gm;

   if(matches = email.match(regex)){
     checkerE = true;
   }

   if(password.length > 0){
     checkerP = true;
   }

   if(checkerP && checkerU && checkerE){
     return true;
   } else {
     return false;
   }
 }

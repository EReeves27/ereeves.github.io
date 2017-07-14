

function awayOrHome(person){
  var results = [];
  for (var i = 0; i < 16; i++){
    var radios=document.getElementsByName("awayOrHome"+String(i+1));
    for(var j = 0; j < radios.length; j++){
      if(radios[j].checked){
        results.push(radios[j].value);
      }
    }
  }
  localStorage.setItem(JSON.stringify(person),JSON.stringify(results));
}

function signUp(){
  var person = {}
  
  person.firstname = document.getElementById('first').value;
  person.lastname = document.getElementById('last').value;
  person.email = document.getElementById('email').value;
  person.paypal = document.getElementById('paypal').value;
  person.value = document.getElementById('value').value;
  person.yesOrNo = document.getElementById('yesOrNo').value;
  awayOrHome(person);
}


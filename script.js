var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('phone');
    fields.question = document.getElementById('message');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.phone, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);
    return valid;
   }

   class User {
    constructor(name, email, phone, message) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    }
   }

   function sendContact () {
    if (isValid()) {
        let usr = new User(name.value, email.value, phone.value, message.value);
        
        alert (`$usr.name} thank you!`)
    } else {
        alert("Oops! Try again.")
    }
    }
   

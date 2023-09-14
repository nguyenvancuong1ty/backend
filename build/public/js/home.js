"use strict";

var account = document.querySelector('.account');
var cancel = document.querySelectorAll('.cancel');
account.addEventListener('click', function (e) {
  e.preventDefault();
  login.style.display = 'flex';
});
cancel.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    login.style.display = 'none';
    register.style.display = 'none';
  });
});
// Login
var login = document.querySelector('.login');
var loginContent = document.querySelector('.login__content');
var loginFrm = document.querySelector('.register__input--link');
login.addEventListener('click', function () {
  login.style.display = 'none';
});
loginContent.addEventListener('click', function (e) {
  e.stopPropagation();
});
loginFrm.addEventListener('click', function (e) {
  e.preventDefault();
  register.style.display = 'none';
  login.style.display = 'flex';
});

// Register
var register = document.querySelector('.register');
var registerFrm = document.querySelector('.login__input--link');
var registerContent = document.querySelector('.register__content');
registerFrm.addEventListener('click', function (e) {
  e.preventDefault();
  login.style.display = 'none';
  register.style.display = 'flex';
});
register.addEventListener('click', function () {
  register.style.display = 'none';
});
registerContent.addEventListener('click', function (e) {
  e.stopPropagation();
});

// Validate form

var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirms = document.getElementById('confirm');
var checkName = document.querySelector('.check-name');
var checkPass = document.querySelector('.check-pass');
var checkConfirm = document.querySelector('.check-confirm');
var checkEmail = document.querySelector('.check-email');
var btnSubmit = document.querySelector('.register__input--submit');
var checkData = function checkData(action, min, max) {
  switch (action) {
    case 'name':
      if (username.value) {
        if (username.value.length < min) {
          checkName.innerHTML = "Toi thieu ".concat(min, " ki tu");
        } else if (username.length > max) {
          checkName.innerHTML = "Toi da ".concat(max, " ki tu");
        } else {
          checkName.innerHTML = '';
        }
      } else {
        checkName.innerHTML = 'Username is valid ';
      }
      break;
    case 'email':
      {
        if (email.value) {
          var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (regex.test(email.value)) {
            checkEmail.innerHTML = '';
          } else {
            checkEmail.innerHTML = 'email not format';
          }
        } else {
          checkEmail.innerHTML = 'Email is valid';
        }
        break;
      }
    case 'password':
      {
        if (password.value) {
          if (password.value.length < min) {
            checkPass.innerHTML = "Password Toi thieu ".concat(min, " ki tu");
          } else if (password.value.length > max) {
            checkPass.innerHTML = "Password Toi da ".concat(max, " ki tu");
          } else {
            checkPass.innerHTML = '';
          }
        } else {
          checkPass.innerHTML = 'Password is valid';
        }
        break;
      }
    case 'confirm':
      {
        if (confirms.value) {
          if (confirms.value === password.value) {
            checkConfirm.innerHTML = '';
          } else {
            checkConfirm.innerHTML = 'Confirm not match password';
          }
        } else {
          checkConfirm.innerHTML = 'Confirm is valid';
        }
        break;
      }
    default:
      console.log('errr');
  }
};
username.addEventListener('keyup', function () {
  checkData('name', 6, 12);
});
email.addEventListener('keyup', function () {
  checkData('email', 6, 12);
});
password.addEventListener('keyup', function () {
  checkData('password', 6, 12);
});
confirms.addEventListener('keyup', function () {
  checkData('confirm', 6, 12);
});
username.addEventListener('focusout', function () {
  checkData('name', 6, 12);
});
email.addEventListener('focusout', function () {
  checkData('email', 6, 12);
});
password.addEventListener('focusout', function () {
  checkData('password', 6, 12);
});
confirms.addEventListener('focusout', function () {
  checkData('confirm', 6, 12);
});
btnSubmit.addEventListener('mousedown', function () {
  if (checkName.innerText == false && checkEmail.innerText == false && checkPass.innerText == false && checkConfirm.innerText == false) {
    btnSubmit.type = 'submit';
  } else {
    btnSubmit.type = 'button';
  }
});
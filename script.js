const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');

inputs.forEach(input => {
  input.addEventListener('change', () => {
    if(input.validity.valid === true && input.value !== '') {
      input.style.borderColor = 'green';
    } else if(input.validity.valid === false && input.value !== ''){
      input.style.borderColor = 'red';
    } else {
      input.style.borderColor = '#e5e7eb'
    }
  });
});

const checkPassword = () => {
  pwd = document.querySelector('#pwd');
  pwd2 = document.querySelector('#pwd2');
  errorMsg = document.querySelector('.error-msg');
  
  if(pwd2.value !== pwd.value) {
    errorMsg.innerText = '* Passwords do not match';
    error = errorMsg.style.display = 'block';
    errorTimeout = setTimeout(() => {
      error = errorMsg.style.display = 'none';
    }, 3000);
  } else if(pwd.value === '' || pwd2.value === '') {
    errorMsg.innerText = '* Please enter a valid password'
    error = errorMsg.style.display = 'block';
    errorTimeout = setTimeout(() => {
      error = errorMsg.style.display = 'none';
    }, 3000);
  } else if(pwd.validity.valid === true){
    alert('Submitted');
  }

  if(pwd.validity.valid === false || pwd2.validity.value === false) {
    errorMsg.innerText = '* Please enter a valid password'
    error = errorMsg.style.display = 'block';
    errorTimeout = setTimeout(() => {
      error = errorMsg.style.display = 'none';
    }, 3000);
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  checkPassword();
});


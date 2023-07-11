import { throttle } from 'lodash';

const form = document.querySelector('form');
const formEmail = document.querySelector('form label input');
const formMessage = document.querySelector('form label textarea');
const formButton = document.querySelector('form button');

const formValues = {
  Email: formEmail.value,
  textArea: formMessage.value,
};

if (localStorage.getItem('feedback-form-state') != null) {
  const values = JSON.parse(localStorage.getItem('feedback-form-state'));
  formEmail.value = values.Email;
  formMessage.value = values.textArea;
}

form.addEventListener(
  'input',
  throttle(event => {
    formValues.Email = formEmail.value;
    formValues.textArea = formMessage.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
  }, 500)
);

// BUTTON
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  formEmail.value = '';
  formMessage.value = '';
  localStorage.clear();
});

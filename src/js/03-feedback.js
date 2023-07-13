import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
const Btn = document.getElementById('btn');

form.addEventListener('input', throttle(data, 500));
Btn.addEventListener('click', submit);

function data() {
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

if (localStorage.length !== 0) {
  email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

function submit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Rellene todos los espacios');
  }
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

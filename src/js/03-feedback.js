import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputEmailEl = form.querySelector('[name="email"]');
const inputMessageEl = form.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";
let savedFeedBackDate = JSON.parse(localStorage.getItem(STORAGE_KEY));

examinationStorage();
form.addEventListener("input", throttle(handleInput,500));
form.addEventListener("submit", handleSubmit);

function examinationStorage() {
    if (savedFeedBackDate) {
        inputEmailEl.value = savedFeedBackDate.email;
        inputMessageEl.value = savedFeedBackDate.message;
      return ;
    }
}

function handleInput(event) {
  const email = inputEmailEl.value;
  const message = inputMessageEl.value;
  const feedBackDate = {
    email,
    message,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedBackDate));
}

function handleSubmit(event) {
    event.preventDefault();
    const {email, message} = event.currentTarget.elements;
    const formDate = {
        email:email.value,
        message: message.value,
    }; 
    console.log(formDate);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}
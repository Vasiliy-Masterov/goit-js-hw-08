import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const inputContent = form.querySelector("input");
const textArea = form.querySelector("textarea")
const STORAGE_KEY = "feedback-form-state";
let savedFeedBackDate = JSON.parse(localStorage.getItem(STORAGE_KEY));
const email = "";
const message = "";
const feedBackDate = {
    email,
    message,
  };

examinationStorage();
form.addEventListener("input", throttle(handleInput,500));
form.addEventListener("submit", handleSubmit);

function examinationStorage() {
    if (savedFeedBackDate) {
        inputContent.value = savedFeedBackDate.email;
        textArea.value = savedFeedBackDate.message;
      return ;
    }
}

function handleInput(event) {
  feedBackDate[event.target.name] = event.target.value;
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
    event.currentTarget.reset();
}
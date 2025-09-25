const formData = {
  email: '',
  message: '',
};

const formRef = document.querySelector('.feedback-form');

function fillForm() {
  try {
    if (localStorage.length === 0) {
      return;
    }
    const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

    formRef.elements.email.value = storageData.email;
    formRef.elements.message.value = storageData.message;
  } catch (error) {
    console.log(error);
  }
}
fillForm();

formRef.addEventListener('input', onInput);
formRef.addEventListener('submit', onSubmit);

function onInput(e) {
  const email = e.currentTarget.elements.email.value.trim();
  const message = e.currentTarget.elements.message.value.trim();
  formData.email = email;
  formData.message = message;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

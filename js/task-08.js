// const formEL = document.querySelector('.login-form');

// formEL.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//     const formData = new FormData(event.currentTarget);
//     event.preventDefault();

//     if (!formData.get('email') || !formData.get('password')) {
//         alert('All fields must be filled in!');
//         return;
//       }
    

//     formData.forEach((value, name) => {
//         console.log(name);
//         console.log(value);

//     })

//     formEL.reset();

// }

const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = formEL.elements.email.value;
  const password = formEL.elements.password.value;

  if (!email || !password) {
    alert('All fields must be filled in!');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  formEL.reset();
}
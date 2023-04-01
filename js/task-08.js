const formEL = document.querySelector('.login-form');

formEL.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    if (!formData.get('email') || !formData.get('password')) {
        alert('All fields must be filled in!');
        return;
      }
    

    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);

    })

    formEL.reset();

}
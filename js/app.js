const email = document.getElementById('email');
const span = document.getElementsByTagName('span');
const password = document.getElementById('password');
email.addEventListener('keyup', () => {
    const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(email.value)
    if (regExp.test(email.value)) {
        span[0].innerText = "Email Is Validate"
        span[0].style.color = "green";
    } else {
        span[0].innerText = "Email Is not Validate"
        span[0].style.color = "red";
    }
})

// password validate
password.addEventListener('keyup', () => {
    const regExpPas = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (regExpPas.test(password.value)) {
        span[1].innerText = 'Password Is Validate';
        span[1].style.color = 'green';
    } else {
        span[1].innerText = 'Password Is not Validate (please set 1Upper 1lower 1number 1spacial correcter use up to 8   ';
        span[1].style.color = 'red';
    }
})
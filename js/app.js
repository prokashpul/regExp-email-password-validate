const eamil = document.getElementById('email');
const span = document.getElementsByTagName('span');
eamil.addEventListener('keyup', () => {
    const regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(eamil.value)
    if (regExp.test(eamil.value)) {
        span[0].innerText = "Email Is Vlaid"
        span[0].style.color = "green";
    } else {
        span[0].innerText = "Email Is not Vlaid"
        span[0].style.color = "red";
    }
})
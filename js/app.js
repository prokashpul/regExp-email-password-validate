const eamil = document.getElementById('email');
eamil.addEventListener('keydown', () => {
    const regExp = /^([a-zA-Z0-9!&^%$#@!*]){6,13}$/;
    if (regExp.test(eamil.value)) {

    }
})
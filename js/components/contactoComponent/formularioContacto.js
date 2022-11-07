var i = 0;
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        this.contact_number.value = i++;
        emailjs.sendForm('pDesMiAmigo+37', 'bgzow87', '#contact-form')
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
    let formulario = document.getElementById('contact-form');
    formulario.addEventListener('submit', function () {
        formulario.reset();
    });
}
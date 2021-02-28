jQuery.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0;
}, "El campo no puede estar vacío. No deje espacios en blanco");

jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Por favor, ingrese un email válido");


let $registrationForm = $('#registration');

if ($registrationForm.length) {
    $registrationForm.validate({
        rules: {
            email: {
                required: true,
                customEmail: true
            },
            password: {
                required: true
            },
            confirm: {
                required: true,
                equalTo: '#password'
            },
            fname: {
                required: true,
                noSpace: true
            },
            lname: {
                required: true,
                noSpace: true
            },
            provincia: {
                required: true
            },
        },
        messages: {
            email: {
                required: 'Please enter email!',
                email: 'Please enter valid email!'
            },
            password: {
                required: 'Please enter password!'
            },
            confirm: {
                required: 'Please enter confirm password!',
                equalTo: 'Please enter same password!'
            },
            fname: {
                required: 'Please enter first name!'
            },
            lname: {
                required: 'Please enter last name!'
            },
            provincia: {
                required: 'Please select provincia!'
            },
        },
    });
}
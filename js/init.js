(function($){
    $(function(){

        $('.button-collapse').sideNav();

    });
})(jQuery);
var recapOk = function() {
    $('#submit').removeAttr('disabled');
};
$(document).ready(function(){
    $('.parallax').parallax();
    $('#contact-form').validate({
        errorClass: 'invalid',
        validClass: 'valid',
        errorElement: 'span',
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                maxlength: 140
            },
            message: {
                required: true,
                minlength: 20,
                maxlength: 2000
            }
        }
    });
});
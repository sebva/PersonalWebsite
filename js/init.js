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
    $('#nav-large').pushpin({ top: 350 });
    $('#nav-small').pushpin({ top: 0 });
    var contact = $('#contact-form');
    if(contact.length) {
        contact.validate({
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
    }
});


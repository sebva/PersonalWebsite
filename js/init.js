(function($){
    $(function(){

        $('.button-collapse').sideNav();

    });
})(jQuery);
var recapOk = function() {
    $('#submit').removeAttr('disabled');
};
$(document).ready(function(){
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
        require(['converse'], function (converse) {
            converse.initialize({
                authentication: 'anonymous',
                jid: 'anon.vaucher.org',
                auto_login: true,
                bosh_service_url: 'https://s2.vaucher.org:5281/http-bind',
                websocket_url: 'wss:s2.vaucher.org:5281/xmpp-websocket',
                allow_chat_pending_contacts: true,
                auto_subscribe: true,
                auto_join_on_invite: true,
                i18n: locales.en,
                show_controlbox_by_default: false,
                auto_join_rooms: ['web@conference.vaucher.org']
            });
        });
    }
});
$(window).on("load", function() {
    $('#projects-grid').masonry({
        columnWidth: '.project-item',
        itemSelector: '.project-item',
    });
})


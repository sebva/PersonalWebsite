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
    
    $('#chat-button').on('click', function() {
        require(['converse'], function (converse) {
            converse.initialize({
                authentication: 'anonymous',
                jid: 'anon.vaucher.org',
                auto_login: true,
                bosh_service_url: 'https://s2.vaucher.org:5281/http-bind',
                websocket_url: 'wss:s2.vaucher.org:5281/xmpp-websocket',
                allow_chat_pending_contacts: true,
                allow_contact_removal: false,
                allow_contact_requests: false,
                show_controlbox_by_default: false,
            });
            $('#chat-button').remove();
            converse.listen.once('connected', function (event) {
                converse.contacts.add('seb@vaucher.org', 'Sébastien Vaucher');
            });
            converse.listen.on('rosterPush', function (event, items) {
                converse.chats.open('seb@vaucher.org');
            });
        });
    });
});
$(window).on("load", function() {
    $('#projects-grid').masonry({
        columnWidth: '.project-item',
        itemSelector: '.project-item',
    });
})


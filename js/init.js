$(document).ready(function(){
    $('.collapsible').collapsible();
    $('a.activator').on('click', function(e) { e.preventDefault(); });
    $('#chat-button').on('click', function(e) {
        e.preventDefault();
        require(['converse'], function (converse) {
            converse.initialize({
                authentication: 'anonymous',
                jid: 'anon.vaucher.org',
                auto_login: true,
                bosh_service_url: 'https://alfa.vaucher.org:5281/http-bind',
                websocket_url: 'wss:alfa.vaucher.org:5281/xmpp-websocket',
                allow_chat_pending_contacts: true,
                allow_contact_removal: false,
                allow_contact_requests: false,
                allow_muc: false,
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


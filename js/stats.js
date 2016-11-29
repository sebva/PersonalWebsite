var _paq = _paq || [];
_paq.push(['setTrackerUrl', 'https://stats.vaucher.org/piwik.php']);
_paq.push(['setSiteId', 1]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
$(document).ready(function() {
    $('#chat-button').on('click', function(e) {
        _paq.push(['trackEvent', 'chat', 'start']);
    });
    $('.activator').on('click', function(e) {
        var project = $(e.target).attr('data-project');
        _paq.push(['trackEvent', 'project', 'open', project]);
    });
    $('.card-title').on('click', function(e) {
        var project = $(e.target).attr('data-project');
        _paq.push(['trackEvent', 'project', 'close', project]);
    });
});


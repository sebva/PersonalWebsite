$(document).ready(function(){
    $('.collapsible').collapsible();
    $('a.activator').on('click', function(e) { e.preventDefault(); });
});
$(window).on("load", function() {
    $('#projects-grid').masonry({
        columnWidth: '.project-item',
        itemSelector: '.project-item',
    });
})


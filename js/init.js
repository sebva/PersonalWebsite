document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibles, {});

    document.querySelector('.collapsible').addEventListener('click', function(e) { e.preventDefault(); });
    document.querySelectorAll('a.activator').forEach(function(element) {
        element.addEventListener('click', function(e) { e.preventDefault(); });
    });
});

window.addEventListener('load', function() {
    new Masonry(document.getElementById('projects-grid'), {
        columnWidth: '.project-item',
        itemSelector: '.project-item',
    });
})


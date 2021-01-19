document.addEventListener('DOMContentLoaded', function() {
    var collapsibles = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibles, {});

    document.querySelectorAll('a.activator').forEach(function(element) {
        element.addEventListener('click', function(e) { e.preventDefault(); });
    });
});

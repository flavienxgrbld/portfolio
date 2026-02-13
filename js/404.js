// 404 page back button
document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn-back');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            history.back();
        });
    }
});

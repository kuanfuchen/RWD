$(document).ready(function () {
    $('.menu').click(function (e) {
        e.preventDefault();
        $('body').toogleClass('open')
    });
});
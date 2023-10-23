//dropDown
$(function () {
    $('.navbar li').hover(
        function () {
            $('>ul.sub:not(:animated)', this).slideDown(500);
        },
        function () {
            $('>ul.sub:not(:animated)', this).slideUp(300);
        }
    );
});

//AOS
AOS.init({
    duration: 2000,
});


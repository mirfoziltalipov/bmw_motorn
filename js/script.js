$(window).scroll(function() {
    $(this).scrollTop()
    if ($(this).scrollTop() > 50) {
        $('#top').slideDown()
    } else {
        $('#top').slideUp()
    }

})

$('#top').click(function() {
    $('html').animate({
        scrollTop: 0
    })
})
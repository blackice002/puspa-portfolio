$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

$('nav a').mouseover(function(event) {
    $(this).css({
        "border-right": "1px solid yellow",
        "border-left": "1px solid yellow"
    });
});

$('nav a').mouseleave(function(event) {
    $(this).css({
        "border-right": "",
        "border-left":""
    })
});

$(".navbar-brand").mouseover(function(event) {
    $(this).css({
        "border-right": "",
        "border-left":""
})
});

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
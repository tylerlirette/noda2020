$(window).scroll(function() {
    if($(document).width() > 1200) {
        updateBgTransition();
    } else {
        $("nav").removeClass("bg-glass").addClass("bg-transition");
    }
});

$(window).resize(function() {
    if( $(document).width() > 1200) {
        updateBgTransition();
    } else {
        $("nav").removeClass("bg-glass").addClass("bg-transition");
    }
});

$(document).scrollTop( $(document).scrollTop() + 1 );

$(".filter-button").on('click', function(){
    $(this).siblings('.filter-drop-down').toggleClass("active");
});

function updateBgTransition() {
    if ($(document).scrollTop() > 50) { 
        $("nav").removeClass("bg-glass").addClass("bg-transition"); 
    } else {
        $("nav").removeClass("bg-transition").addClass("bg-glass");
    }
}
$(document).ready(function() {

var container = document.querySelector('#masonry-grid');
var masonry = new Masonry(container, {
	columnWidth: 300,
	gutter: 15,
	itemSelector: '.grid-item'
});


$("a").click(function() {
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});


$(".darken").hover(function() {
    $(this).find("img").fadeTo(500, 1);
}, function() {
    $(this).find("img").fadeTo(500, 0.7);
});

$('.darken').hover(function(){
   $(this).find('.message').fadeIn(1000); 
}, function(){
   $(this).find('.message').fadeOut(1000); 
});


$("#link1").mouseover(function() {
	$("#pop-up1").show();
});
$("#link1").mouseout(function() {
	$("#pop-up1").hide();
});

$("#link2").mouseover(function() {
	$("#pop-up2").show();
});
$("#link2").mouseout(function() {
	$("#pop-up2").hide();
});

$("#link3").mouseover(function() {
	$("#pop-up3").show();
});
$("#link3").mouseout(function() {
	$("#pop-up3").hide();
});

$(document).ready(function () {
    $('.flipWrapper').click(function () {
        $(this).find('.card').toggleClass('flipped');
        return false;
    });
});



})

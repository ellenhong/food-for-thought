$(document).ready(function() {

/* Properties for Masonry grid */
var container = document.querySelector('#masonry-grid');
var masonry = new Masonry(container, {
	columnWidth: 300,
	gutter: 15,
	itemSelector: '.grid-item',
	isFitWidth: true
});

/* Add text-shadow to header links on hover */
$('.hlink').hover(function() {
  $(this).addClass('shadow');
}, function() {
  $(this).removeClass('shadow');
});

/* Animations for "Blog" link */
$("#link1").mouseover(function() {
	$("#pop-up1").show();
});
$("#link1").mouseout(function() {
	$("#pop-up1").hide();
});

/* Animations for "About" link */
$("#link2").mouseover(function() {
	$("#pop-up2").show();
});
$("#link2").mouseout(function() {
	$("#pop-up2").hide();
});

/* Animations for "Connect" link */
$("#link3").mouseover(function() {
	$("#pop-up3").show();
});
$("#link3").mouseout(function() {
	$("#pop-up3").hide();
});


/* Scroll */
$("a").click(function() {
    $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});

/* Set grid item to full opacity on hover */
$(".darken").hover(function() {
    $(this).find("img").fadeTo(500, 1);
}, function() {
    $(this).find("img").fadeTo(500, 0.7);
});

/* Make message appear on hover */
$('.darken').hover(function(){
   $(this).find('.message').fadeIn(750); 
}, function(){
   $(this).find('.message').fadeOut(750); 
});

/* Card flip */
$('.flipWrapper').click(function () {
    $(this).find('.card').toggleClass('flipped');
    return false;
});


})

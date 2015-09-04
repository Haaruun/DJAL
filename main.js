$(function(){

	// $(window).scroll(function(){

	// 	var scroll = $(this).scrollTop();
	// 	var video = document.getElementById('video')

	// 	if(scroll > $('video').offset().top){

	// 		video.play();

	// 	}

	// 	if(scroll >= 1200){

	// 		video.pause();

	// 	}

	// });
// var audio = document.getElementById('audio')

// $('body').keyup(function(e){
  
//    if(e.keyCode == 32){
//        // user has pressed space

//        audio.pause();
//    }

// });


// Hide the controls if HTML5 video is not supported
if (!document.createElement('video').canPlayType){
	$('#video_controls').hide();
	return;
}

var video = document.getElementById('video');


// Play and Pause button



// $('#push_button').click(function(){

// 	video.play();

// });
// $('.pause').click(function(){
// 	video.pause();
// });

 $('.play_toggle').click(function(){
  	if(video.paused){
 		video.play();
		$('.play_toggle').html('PAUSE');
	}else{
		video.pause();
		$('.play_toggle').html('PLAY');
	}
 });



// Play progress

$(video).bind('timeupdate', function(){
	var timePercent = (this.currentTime / this.duration) * 100;

	$('.play_progress').css({width: timePercent + '%'});
	$('.play_progress').css({height: '100%'});



});



// Current Time display

$(video).bind('timeupdate', function(){
	$('.current_time').html(formatTime(this.currentTime));
})
$(video).bind('durationchange', function(){
	$('.duration').html(formatTime(this.duration));
});


function formatTime(seconds) {
	var seconds = Math.round(seconds);
	var minutes = Math.floor(seconds / 60);
	//Remaining seconds
	seconds = Math.floor(seconds % 60);
	//Add leading zeros
	minutes = (minutes >= 10) ? minutes : "0" + minutes;
	seconds = (seconds >= 10) ? seconds : "0" + seconds;
	return minutes + ":" + seconds;
}




// Mute event
var muteBtn = document.getElementById('mute');
muteBtn.addEventListener('click', function(){
	if(video.muted == false){
		video.muted = true;
	}else{
		video.muted = false;
	}

});



// Full Screen 

var fullScreen = document.getElementById('full');
fullScreen.addEventListener('click', function(){
	if(video.requestFullscreen){
		video.requestFullscreen();
	}else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});



// Play video on click && toggle play control

$(video).click(function(){
	if(video.paused){
 		video.play();
	}else{
		video.pause();
	}

	$('.play_control').slideToggle('fast');

	$('.others').slideToggle('slow');



});



});
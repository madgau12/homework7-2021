//VARIABLES
var video = document.querySelector("#player1");

//EVENTLISTENERS
window.addEventListener("load", function() {
	console.log("Good job opening the window")
});
//play
document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
video.play();
document.querySelector("#volume").textContent="Volume is: 100%";
});
//pause
document.querySelector("#pause").addEventListener("click", function() {
console.log("Pause Video");
video.pause();
});
//slow down
document.querySelector("#slower").addEventListener("click", function() {
console.log("Current Speed: " + video.playbackRate);
video.playbackRate = video.playbackRate - (video.playbackRate * 0.05);
});
//speed up	
document.querySelector("#faster").addEventListener("click", function() {
console.log("Current Speed: " + video.playbackRate);
video.playbackRate = video.playbackRate + (video.playbackRate * 0.05);
});
//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current Time: " + video.currentTime);
	if ((video.currentTime + 15) > video.duration){
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime* + 15;
	}
});
//mute
document.querySelector("#mute").addEventListener("click", function() {
if (video.muted == false){
	video.muted = true;
	document.querySelector("#mute").textContent="Unmute";
}
else{
	video.muted = false;
	document.querySelector("#mute").textContent="Mute";
}
});
//volume
document.querySelector("#slider").addEventListener("input", function() {
	console.log(video.volume);
	video.volume = document.querySelector("#slider").value*.001;
	document.querySelector("#volume").textContent="Volume is: "+(video.volume*1000)+"%";	
});	
//styled
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.remove('video');
  	video.classList.add('oldSchool');
});	
//original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
  	video.classList.add('video');	
});	


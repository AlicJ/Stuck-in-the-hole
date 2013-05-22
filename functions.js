//Main Menu
function hideDiv (div){
    $(div).css('display','none');
}
function fadeInDiv (div){
    $(div).fadeIn();
}
function mainAnimation() {
    if(bgscrolling){
        mainPosition--;
        $("#main").css({backgroundPosition: (mainPosition * 2) + "px 0px"});
        if(Math.abs(mainPosition)>=bgImg.width){
    	mainPosition = 0;
	}
    }
}
function creditAnimation() {
    creditPosition--;
	$("#credit").css({backgroundPositionY: (creditPosition) + "px"});
}
function splash() {
	$('#splash').fadeOut("800");
	main = window.setInterval(function () {
		if (count == 1){
			$('#menu').fadeIn("500");
			count+=1;
		}
	},500);
}

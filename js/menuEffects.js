hideDiv('#gamefield');
//hideDiv('#menu');
hideDiv('#setting1');
hideDiv('#help1');
hideDiv('#credit');
hideDiv('#highscore');
hideDiv('#save');
hideDiv('#namefield');
hideDiv('#pauseScreen');
hideDiv('#effects')
hideDiv('#shop');
hideDiv('#setting2');
hideDiv('#help2');
hideDiv('#mainmenu');
hideDiv('#levelComplete');
hideDiv('#gameover');
//$('body').css('width',window.innerWidth);
//$('body').css('height',window.innerHeight);

/*** Splash is disabled due to the load screen function of PlayBook
if(count === 0){
	splashscreen = window.setInterval(splash, 1000);
	count+=1;
}else{
    clearInterval(splashscreen); 
}
***/
//load highscores
if(!localStorage.highscore){
    localStorage.highscore = high;
}else{
    high = JSON.parse(localStorage.highscore);
}
//load music
loadTrack(currentTrack);
//hide pictures
    shieldPic.hide();
    layer.add(shieldPic);
    stage.add(layer);



mainInterval = window.setInterval(mainAnimation, 1000/60);

$('.priceBomb').text(priceBomb);
$('.priceShield').text(priceShield);
$('.priceLife').text(priceLife);
$('.priceFreeze').text(priceFreeze);

$(document).ready(function() {
    //for main menu selections
	$('.newgame').click(function(){
        //below is the saving slot, refer line 139-234 for relevant funcitons
        //comment out the next five line, and uncomment the blue lines,
        //will start the game directly when "start" button is clicked 
        hideDiv('#help1');
		hideDiv('#highscore');
        hideDiv('#setting1');
        hideDiv('#namefield');
        fadeInDiv('#save');
		shipAnimate();
		//below is to load the save info
		for (var i=0;i<5;i++){
			if (localStorage['save'+i]&&slot[i]){
				//get data from localStorage
				getSave[i] = new Object();
				getSave[i] = JSON.parse(localStorage.getItem('save'+i));
				$('.save'+(i+1)).text(getSave[i].name + " level " + (parseInt(getSave[i].level)+1) + " - " + getSave[i].lastSave);
			}
		}
	});
    $('.setting1').click(function(){
        hideDiv('#help1');
        hideDiv('#save');
		hideDiv('#highscore');
        hideDiv('#namefield');
		fadeInDiv('#setting1');
        
	});
    $('.bg').click(function(){
        if(bgscrolling){
            bgscrolling = false;
            $('.bg').text("Background Scrolling OFF");
        }else{
            bgscrolling = true;
            $('.bg').text("Background Scrolling ON");
        }
    });
    $('.music').click(function(){
        if(music){
            music = false;
            musicPause();
            $('.music').text("Music OFF");
        }else{
            music = true;
            musicPlay();
            $('.music').text("Music ON");
        }
    });
    $('.sound').click(function(){
        if(sound){
            sound = false;
            $('.sound').text("Sound FX OFF");
        }else{
            sound = true;
            $('.sound').text("Sound FX ON");
        }
    });
	$('.help1').click(function(){
        hideDiv('#setting1');
        hideDiv('#save');
		hideDiv('#highscore');
        hideDiv('#namefield');
        fadeInDiv('#help1');
	});
	$('.highscore').click(function(){
        hideDiv('#setting1');
        hideDiv('#help1');
        hideDiv('#save');
        hideDiv('#namefield');
        fadeInDiv('#highscore');
		sortScore();
		$('#highscore ul').text('');
		showScore();
	});
    $('.credit').click(function(){
        hideDiv('#setting1');
		hideDiv('#highscore');
        hideDiv('#help1');
        hideDiv('#menu');
        hideDiv('#save');
        hideDiv('#namefield');
        fadeInDiv('#credit');
		creditInterval = window.setInterval(creditAnimation, 1000/30);
        pauseInterval = window.setInterval(function(){
            if(creditPosition <= -1450){
                clearInterval(creditInterval);
                counter++;
            }
            if(counter == 3){
                $('#credit').fadeOut();
            }
            if(counter == 4){
                fadeInDiv('#menu');
                counter = 0;
                creditPosition = 560;
            }
        },1000);
        
    });
    $('#credit').click(function(){
        window.clearInterval(creditInterval);
        window.clearInterval(pauseInterval);
        hideDiv('#credit');
		creditPosition = 560;
        fadeInDiv('#menu');
    });
    //for in-game buttons
    $('.pause').click(function(){
        hideDiv('#nonPause');
        $('#myCanvas').fadeTo(400, 0.5);
        fadeInDiv('#pauseScreen');
        animStop(true);
        pause = true;
    });
    $('.resume').click(function(){
        hideDiv('#pauseScreen');
        hideDiv('#setting2');
        hideDiv('#shop');
        hideDiv('#help2');
        hideDiv('#mainmenu');
        fadeInDiv('#nonPause');
        $('#myCanvas').fadeTo(400, 1.0);
        animStop(false);
        pause =false;
    });
    $('.shop').click(function(){
        hideDiv('#mainmenu');
        hideDiv('#setting2');
        hideDiv('#help2');
        fadeInDiv('#shop');
    });
    $('.bomb').click(function(){
        if(score>=priceBomb){
            score -= priceBomb;
            $('.score').text(score);
            numBomb +=1;
            $('.numBomb').text('Bomb: ' + numBomb);
        }
    });
    $('.shield').click(function(){
        if(score>=priceShield){
            score -= priceShield;
            $('.score').text(score);
            numShield +=1;
            $('.numShield').text('Shield: ' + numShield);
        }
    });
    $('.life').click(function(){
        if(score>=priceLife){
            score -= priceLife;
            $('.score').text(score);
            lives +=1;
            $('.lives').text(lives);
        }
    });
    $('.freeze').click(function(){
        if(score>=priceFreeze){
            score -= priceFreeze;
            $('.score').text(score);
            numFreeze +=1;
            $('.numFreeze').text('Freeze: ' + numFreeze);
            ('#effects').css();
            fadeInDiv('#effects');
        }
    });
    $('.setting2').click(function(){
        hideDiv('#mainmenu');
        hideDiv('#shop');
        hideDiv('#help2');
        fadeInDiv('#setting2');
    });
    $('.help2').click(function(){
        hideDiv('#mainmenu');
        hideDiv('#shop');
        hideDiv('#setting2');
        fadeInDiv('#help2');
    });
    $('.mainmenu').click(function(){
        hideDiv('#setting2');
        hideDiv('#shop');
        hideDiv('#help2');
        fadeInDiv('#mainmenu');
    });
    $('.backMain').click(function(){
		updateData(selectSlot);
        gamestart = false;
        bgscrolling = true;
        clearInterval(gameLoop);
        clearInterval(bgInterval);
        ended();
        switchTrack(0);
		destoryed.pause();
        mainInterval = window.setInterval(mainAnimation, 1000/60);
		hideDiv('#gamefield');
        hideDiv('#mainmenu');
        hideDiv('#pauseScreen');
		hideDiv('#levelcomplete');
		hideDiv('#gameover');
		hideDiv('#save');
		fadeInDiv('#main');
        $('#myCanvas').fadeTo(400, 1.0);
        pause=false;
        for(var i=0;i<enemies.length;i++)
        {
            enemies[i].image.hide();
            enemies[i].text.hide(); 
        }
    });
    $('.no').click(function(){
        $('#mainmenu').fadeOut();
    });
    $('.nextLevel').click(function(){
        levelSelect(level);
        enemyNum=0;
        hideDiv("#levelComplete");
        $('.level').text(level+1);
		pause = false;
    });
    $('.exit').click(function(){
        window.close();
        blackberry.app.exit();
    });
});

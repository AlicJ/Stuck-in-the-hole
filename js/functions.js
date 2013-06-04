//Fades in and out the varius divs
function hideDiv (div){
    $(div).css('display','none');
}
function fadeInDiv (div){
    $(div).fadeIn();
}
//Animation for the scrolling background
function mainAnimation() {
    if(bgscrolling){
        mainPosition--;
        $("#main").css({backgroundPosition: (mainPosition * 2) + "px 0px"});
        if(Math.abs(mainPosition)>=bgImg.width){
    	mainPosition = 0;
	    }
    }
}
//Animation for the scrolling credits
function creditAnimation() {
    creditPosition--;
	$("#credit").css({backgroundPosition: "20px " + (creditPosition) + "px"});
}
//Makes the splash screen appear and dissapear, no longer used
function splash() {
	$('#splash').fadeOut("800");
	main = window.setInterval(function () {
		if (count == 1){
			$('#menu').fadeIn("500");
			count+=1;
		}
	},500);
}


//Question Maker
    function QuestionMaker(num1, num2, operation){
        //Creates two random numbers
        if (Math.max(num1, num2)== num2){
            switcher = num2;
    		num2=num1;
			num1=switcher;
		}
		
		if(operation>=3){
			num1 = halver(num1+1);
			num2 = halver(num2+1);
		}
		
		switch(operation){
			case 1: //addition
                this.answer = num1 + num2;
				//$("#question").text("What is " + num1 + " plus " + num2+ "? ");
				this.question = num1 + " + " + num2+ " = ? ";
                break;
			case 2: //subtraction
				this.answer = num1 - num2;
				//$("#question").text("What is " + num1 + " minus " + num2+ "? ");
				this.question = num1 + " - " + num2+ " = ? ";
                break;
			case 3: //multiplication
				this.answer = num1 * num2;
				//$("#question").text("What is " + num1 + " multiplied by " + num2+ "? ");
				this.question = num1 + " x " + num2+ " = ? ";
				break;
			case 4: //division
				num1 *= num2;
				this.answer = num1 / num2;
				//$("#question").text("What is " + num1 + " divided by " + num2+ "? ");
				this.question = num1 + " / " + num2+ " = ? ";
				break;
		}
    }
	function halver (number){
		if(number>10){
			number /=2;
		}
            return Math.floor(number);
	}
//Keypad
    function addNum (num){
        if(input.length<=3){
            input += num;
            $("#input").text(input);
        }
	}
//Clear keypd
	function clean(){
		input = "";
		$("#input").text(input);
	}
//High Scores
function sortScore(){
    for(var j=0; j<high.length-1; j++){
		for (var i=0; i<high.length-1; i++){
			if(high[i].score<high[i+1].score){
				temp = high[i];
				high[i] = high[i+1];
				high[i+1] = temp;
			}
		}
	}
	high9 = high.slice(0,9);
}
//Shows the high score
function showScore(){
	for(var h=0; h<high9.length; h++){
		$('#highscore ul').append('<li><span class="score">' + high9[h].score + '</span><span class="user">' + high9[h].user + '</span></li>');
	}
}

function pushScore(){
	var currentScore = {
		score : score,
		user : getSave[selectSlot].name
	};
	high.push(currentScore);
	sortScore();
	localStorage.highscore = JSON.stringify(high9);
}
//Music Player
    function musicPlay(){
		audio.play();
		isPlaying = true;
	}
	function musicPause(){
		audio.pause();
		isPlaying = false;
	}
	function switchTrack(i){
		var track;
		if(i<0){
			track = currentTrack = playlist.length-1;
		}else if(i>=playlist.length){
			track = currentTrack = 0;
		}else{
			track = i;
		}
		$('audio').remove();
		loadTrack(track);
		if(isPlaying === true){
			musicPlay();
		}
	}
	//Fire when track ended
	function ended(){
		musicPause();
        if(gamestart){
            switchTrack(++currentTrack);
        }else{
            switchTrack(currentTrack);
        }
		
	}
	//
	function afterLoad(){
		if(autoplay == true){
			musicPlay();
		}
	}
	//Load track
	function loadTrack(i){
		var item = playlist[i],
			newaudio = $('<audio>').html('<source src="' + item.ogg + '"><source src="' + item.mp3 + '">').appendTo('.bgMusic');
		audio = newaudio[0];
		audio.addEventListener('canplay',afterLoad, false);
		audio.addEventListener('ended',ended, false);
	}
//save files
function LSupdate(pending,update){
	//add 1 to the version
	pending.version ++;
	//update last save date
	pending.lastSave = now.customFormat("#MMM# #D##th# #hh#:#mm#");
	//update the version
	localStorage.setItem(update,JSON.stringify(pending));
}
//get data from localStorage
function LSget(pending,getData){
	//get data from localStorage
	pending = JSON.parse(localStorage.getItem(getData));
}
//update data to localStorage
function updateData(num){
	getSave[num].level = level;
	getSave[num].score = score;
	getSave[num].numLives = lives;
	getSave[num].numShield = numShield;
	getSave[num].numBomb = numBomb;
	getSave[num].numFreeze = numFreeze;
	getSave[num].numEnemyKilled = numEnemyKilled;
	getSave[num].lastSave = now.customFormat("#MMM# #D##th# #hh#:#mm#");
	getSave[num].version++;
	LSupdate(getSave[num],'save'+num);
}

function deleteData(num){
	if(getSave[num]){
		getSave[num] = new Object();
		slot[num] = false;
		if(english) $('.save'+(num+1)).text(en_restart);
		if(french) $('.save'+(num+1)).text(fr_restart);
		localStorage.removeItem('save'+num);
	}
}
//Changes to the ingame screen
function GameStart(){
	GG = 0;
	hideDiv('#main');
	fadeInDiv('#gamefield');
	fadeInDiv('#ui');
	$('#gamefield').css('background', '#999');
	fadeInDiv('#nonPause');
	gamestart = true;
	enemyNum = 0;
	levelSelect(level);
	gameLoop = window.setInterval(enemyMaker, enemyDelay);
	bgInterval = window.setInterval(bgAnimation, 1000/30);
	ended();
	window.clearInterval(mainInterval);
	score = getSave[selectSlot].score;
function GameStart(){
	GG = 0;
	hideDiv('#main');
	fadeInDiv('#gamefield');
	fadeInDiv('#ui');
	$('#gamefield').css('background', '#999');
	fadeInDiv('#nonPause');
	gamestart = true;
	enemyNum = 0;
	levelSelect(level);
	gameLoop = window.setInterval(enemyMaker, enemyDelay);
	bgInterval = window.setInterval(bgAnimation, 1000/30);
	ended();
	window.clearInterval(mainInterval);
	score = getSave[selectSlot].score;
	lives = getSave[selectSlot].numLives;
	$('#leftPanel #lives .num').text(lives);
    $('#rightPanel .level').text(level+1);
    $('#leftPanel #score .num').text(score);
    lazer.hide();
    layer.add(base);
    layer.add(lazer);
    stage.add(layer);
}

function GameOver(){
	if(GG == 0){
		if(fail){
			if(english){
				$('#gameover h3').text(en_destroyed);
				$('#gameover div').text(en_retreate);
			}else if(french){
				$('#gameover h3').text(fr_destroyed);
				$('#gameover div').text(fr_retreate);
			}
			if(sound) destoryed.play();
		}else{
			if(english){
				$('#gameover h3').text(en_survive);
				$('#gameover div').text(en_celeb);
			}else if(french){
				$('#gameover h3').text(fr_survive);
				$('#gameover div').text(fr_celeb);
			}
		}
		$('#ui').fadeOut();
		$('#gamefield').css('background-image', 'url(images/space.jpg)');
		clearInterval(gameLoop);
		fadeInDiv('#gameover');
		pushScore();
	}
	GG ++;
}

function saveData(i){
	//if save does not exist
    if(!getSave[i]&&slot[i]){
        hideDiv('#save');
        fadeInDiv('#namefield');
        $(".launch").click(function(){
			hideDiv('#namefield');
			hideDiv('#save');
            selectSlot = i;
            getSave[i] = {
                name : $(".name").val(),
                slot: selectSlot,
                level : 1,
                score : 0,
                numLives : 3,
                numShield : 0,
                numBomb : 0,
                numFreeze : 0,
                numEnemyKilled : 0,
                lastSave : 0,
                createTime: creat.customFormat("#MMM# #D##th# #hh#:#mm#"),
                version : 1
            };
			//if the input name is valid, store it and start game
            if(getSave[i].name){
                if(getSave[i].name.length>0) {
                    LSupdate(getSave[i],'save'+i);
					level = 0;
					selectSlot = i;
					GameStart();
                }
			//otherwise dont
            }else{
                getSave[i] = "";
            }
        });
	//if the save exit, use it
    }else if(slot[i]){
		selectSlot = i;
		level = getSave[selectSlot].level;
		lives = getSave[selectSlot].numLives;
		GameStart();
    }
}
//Testmode with infinite resources, disabled in real version
function testmod() {
    level = 15;
    score = 500000;
    lives = 300;
    numShield = 100;
    numBomb = 100;
    numFreeze = 100;
    GG = 0;
	hideDiv('#main');
	fadeInDiv('#gamefield');
	fadeInDiv('#ui');
	$('#gamefield').css('background', '#999');
	fadeInDiv('#nonPause');
	gamestart = true;
	enemyNum = 0;
	levelSelect(level);
	gameLoop = window.setInterval(enemyMaker, enemyDelay);
	bgInterval = window.setInterval(bgAnimation, 1000/30);
	ended();
	window.clearInterval(mainInterval);
	$('#leftPanel #lives .num').text(lives);
    $('#rightPanel .level').text(level+1);
    $('#leftPanel #score .num').text(score);
    lazer.hide();
    layer.add(base);
    layer.add(lazer);
    stage.add(layer);

}
//Checks if the submitted answer matches an actual answer
//Also animates the lazer to fly towards the asteroid
function submit(){
    var correct =false
    for(var i = 0; i <enemies.length; i++ ){
        if(input == enemies[i].answer&&enemies[i].alive){
           
            
            layer.add(lazer);
            stage.add(layer);
            var initX = lazer.attrs.x;
            var initY = lazer.attrs.y;
            var enemySelect=i;
            lazer.show();
            //lazer animation
            var lazerAnim = new Kinetic.Animation(function(frame){
                lazer.setX(initX + frame.time*(enemies[enemySelect].image.attrs.x-initX)/400);
                lazer.setY(initY + frame.time*(enemies[enemySelect].image.attrs.y-initY)/400);
            }, layer);
            lazerAnim.start();
            
            var counter=true;
            var lazerCount = window.setInterval(function()
            {
                if(!counter)
                {
                    lazerAnim.stop();
                    lazer.setX(stage.getWidth()/ 2 +30);
                    lazer.setY(stage.getHeight()/2 + 15);
                    lazer.hide();
                    cleanEnemy (enemySelect);
                    clearInterval(lazerCount);
                }
                counter=false;
            },200);
            score+=Math.round(enemies[i].scoreKeep);
			numEnemyKilled ++;
			if(sound) asteriod.play();
            correct=true;
        }
    }
    if(!correct)
    {
        score-=300;
    }
	$('#leftPanel #score .num').text(score);
    input = "";
    $("#input").text(input);
}
//Makes a new enemy
function enemyMaker ()
{
     if(gamestart&&enemyNum<totalEnemies&&!pause)
    {
    //Creates a new question and answer.
    //Makes sure no two asteriods have the same answer while alive.
    var questionDiff=true; 
    
    var question = new QuestionMaker(Math.floor(Math.random()*20)+1, Math.floor(Math.random()*20)+1,Math.floor(Math.random()*4)+1 );
    while(questionDiff)
    {
        questionDiff=false;
        for(var i=0;i<enemies.length;i++)
        {
            if(question.answer==enemies[i].answer)
            {
                questionDiff=true;
                var question = new QuestionMaker(Math.floor(Math.random()*20)+1, Math.floor(Math.random()*20)+1,Math.floor(Math.random()*4)+1 );
            }
        }
    }
    //Sets a random side for the enemy to appear from
    var side= Math.floor((Math.random())*4+1);
    var x=0;
    var y=0;
    if(side==2||side==4)
    {
        y= Math.floor(Math.random()*canvas.height)+1;
        if(side==2){
            x= canvas.width+50;
        }
        else{
            x=-50;
        }
    }
    else if(side==1||side==3)
    {
        x= Math.floor(Math.random()*canvas.width)+1;
        if(side==3){
            y= canvas.height+50;
        }
        else{
            y=-50;
        }
    }
    //New enemy object is created  
    enemies[enemyNum]= new enemy(x, y, question.question, question.answer, side);
    if(base.attrs.x-x<30)
    {
        if(base.attrs.y>y)
        {
            enemies[enemyNum].rotate(-Math.PI/2);
        }
        else
        {
            enemies[enemyNum].rotate(Math.PI/2);
        }
    }
    else
    {    
        if(enemies[enemyNum].image.attrs.x<base.attrs.x)
        {
            enemies[enemyNum].image.setScale(-1, 1);
        }
        //Image is rotated using trig ratios
        enemies[enemyNum].image.rotate(Math.atan((base.attrs.y-y)/(base.attrs.x-x+120)));
    }
    layer.add(enemies[enemyNum].image);
    layer.add(enemies[enemyNum].text);
      
    stage.add(layer);
    
    
    animate(enemyNum);
    
    enemyNum++;
    }
}
//Changes the diffculty based on level
function levelSelect (level)
{
    totalEnemies = 1 +3*level;
    enemySpeed = 100000/(5+level);
    enemyDelay = 30000/(5+level);
}
//Enemy object constructor
function enemy (x_bron, y_bron, question, answer, side)
{
    this.answer = answer;
    this.alive = true;
    this.side = side
   	this.fixedX = x_bron;
	this.fixedY = y_bron;
    //this.borderWidth= 2;   
    this.xGap = ((canvas.width/2)-x_bron)/enemySpeed;
    this.yGap = ((canvas.height/2)-y_bron)/enemySpeed;
    this.scoreKeep=1000;
    //Meteor image
    this.image = new Kinetic.Image({
            x: x_bron,
            y: y_bron,
            width: 100,
            height:30,
            image:imageObj, 
            offset: [25, 30],
    });
    //Text showing the question
    this.text = new Kinetic.Text({
        x: x_bron,
        y: y_bron,
        text: question,
        fontSize: 20,
        fontFamily: 'TIEWing',
        fill: '#67EFE9'
    });
    //Explosion image
	this.explosion = new Kinetic.Image({
		x: 0,
		y: 0,
		width: 30,
		height: 30,
		image: expImg,
		offset: [15, 15]
	});
}
  
//Background Animation
function bgAnimation() {
    if(bgscrolling){
        bgPosition--;
        $("#myCanvas").css({backgroundPosition: (bgPosition * 5) + "px 0px"});
	    if(Math.abs(bgPosition)>=bgImg.width){
		    bgPosition = 0;
	    }
    }
}
//Clears an enemy after it is destroyed, as well as animate the explosion
function cleanEnemy (num)
{
    anim[num].stop();
	enemies[num].explosion.attrs.x = enemies[num].image.attrs.x;
	enemies[num].explosion.attrs.y = enemies[num].image.attrs.y;
	layer.add(enemies[num].explosion);
	stage.add(layer);
    anim[num] = new Kinetic.Animation(function (frame){
    //EXPLOSIONS
    enemies[num].explosion.setScale(1+frame.time/500);
     if(frame.time>500)
     {
         anim[num].stop();
         enemies[num].explosion.hide();
     }
    }, layer);
    anim[num].start();
	enemies[num].alive = false;
    enemies[num].image.hide();
    enemies[num].text.hide(); 
    stage.add(layer);
     var counter=0;
     for(var i=0;i<enemies.length;i++)
     {
      if(!enemies[i].alive)
         {
             counter++;
         }
     }
     // Level is Cleared
     if(counter==totalEnemies&&lives>0)
     {
		 level++;
		 updateData(selectSlot);
         pause = true;
         fadeInDiv("#levelComplete");
     }
}
  
//Freeze is used
//Enemies stop for a few seconds
function freeze ()
{
    if(numFreeze>0&&!freezeOn){
        freezeOn = true;
        $('#effects').css('background-image','url(\'images/freezebackground.png\')');
        fadeInDiv('#effects');
        
        for(var i =0;i<anim.length;i++)
        {
            anim[i].stop();
        }
        pause = true;
        var count = 0;
         $('.numFreeze').text(3-count);
        var timer = window.setInterval(function(){
            count++;
            $('.numFreeze').text(3-count);
            if(count==3)
            {
                pause = false;
                freezeOn = false;
                for(var i =0;i<anim.length;i++)
                 {
                    anim[i].start();
                 }
                clearInterval(timer);
                $('#effects').fadeOut();
                numFreeze--;
                texthtml('.numFreeze', '<span class="text"></span>&nbsp<span class=num></span>');
                textrepl('.numFreeze .num', numShield);
                if(english) textrepl('.numFreeze .text', en_freeze);
                if(french) textrepl('.numFreeze .text', fr_freeze);
            }
        }, 1000);  
    }
}
//Destroys all enemies on the screen
function bomb ()
{
    if(numBomb>0){
        for(var i =0;i<enemies.length;i++)
        {
            if(enemies[i].alive)
            {
                cleanEnemy (i);
            }
        }
        numBomb--;
        $('.numBomb .num').text(numBomb);
    }
}
//Protects the ship from losing lives for a few seconds
function shield() 
{
    if(numShield>0&&!shieldOn){
        var counter = 0;
        var shieldShow = true;
        numShield--;
        shieldOn = true;
        shieldPic.show();
        layer.draw();
        var timer = window.setInterval(function(){
            counter ++;
            $('.numShield').text(5-counter);
            if(counter==4)
            {
                var flashing = window.setInterval(function()
                {
                    if(shieldShow)
                    {
                        shieldPic.hide();
                        shieldShow = false;
                    }
                    else{
                        shieldPic.show();
                        shieldShow = true;
                    }
                    if(counter==5)
                    {
                        clearInterval(flashing);
                        shieldPic.hide();
                    }
                },70);
            }
            if(counter == 5)
            {
                clearInterval(timer);  
                shieldOn=false;
                texthtml('.numShield', '<span class="text"></span>&nbsp<span class=num></span>');
                textrepl('.numShield .num', numShield);
                if(english) textrepl('.numShield .text', en_shield);
                if(french) textrepl('.numShield .text', fr_shield);
                layer.draw();
            }
        }, 1000);
       
    }
}
//Stops the metor animations when paused
function animStop (isPaused)
{
    if(isPaused)
    {
        for(var i=0;i<anim.length;i++){
            anim[i].stop();
        }
    }
    else
    {
        for(var i=0;i<anim.length;i++){
         anim[i].start();    
    }
    }
}
//Animates the ship to move up and down
function shipAnimate()
{
    var animate = new Kinetic.Animation(function(frame){
        var yShift = 12*Math.sin(frame.time/1000);
        base.setY(yShift+ stage.getHeight() / 2 -50);
        shieldPic.setY(yShift + (stage.getHeight() / 2)-155);
    }, layer);
    animate.start();
}
//Animation for the asteriods 
function animate(num) 
{
    var scoreRate =  Math.abs(1000*enemies[num].xGap/(enemies[num].fixedX-canvas.width/2));
    anim[num] = new Kinetic.Animation(function(frame) {  
        
        enemies[num].image.setX(enemies[num].fixedX + frame.time*enemies[num].xGap);
        enemies[num].image.setY(enemies[num].fixedY + frame.time*enemies[num].yGap);
        enemies[num].text.setX(enemies[num].fixedX + frame.time*enemies[num].xGap+10);
        enemies[num].text.setY(enemies[num].fixedY + frame.time*enemies[num].yGap-20);
        //enemies[num].image.rotate(frame.timeDiff * (Math.PI / 4) / 1000);
        enemies[num].scoreKeep -= 10*enemies[num].xGap;
        Math.abs((enemies[num].fixedX-canvas.width/2));
            // if(enemies[num].alive && enemies[num].image.attrs.x < base.attrs.x+base.attrs.width+25 && enemies[num].image.attrs.x > base.attrs.x-enemies[num].image.attrs.width+25
            // && enemies[num].image.attrs.y < base.attrs.y+base.attrs.height +25 && enemies[num].image.attrs.y > base.attrs.y-enemies[num].image.attrs.height+25)
            // {
            //Enemy has hit the ship
            if(frame.time>=enemySpeed*0.8)
            {
				cleanEnemy (num);
                if(!shieldOn){
					if(sound) beenhit.play();
                    lives-=1;
                    textrepl('#lives .num', lives);
                }
            }
            
            if(lives <= 0){
				fail = true;
                GameOver();
            }
    }, layer);
    
    if(!pause){
        anim[num].start();
    }
  }

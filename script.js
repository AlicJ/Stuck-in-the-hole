//questionmaker
var switcher=0;
    function QuestionMaker(num1, num2, operation){

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
	var input = "";
	function addNum (num){
        if(input.length<=3){
            input += num;
            $("#input").text(input);
        }
	}
	function clean(){
		input = "";
		$("#input").text(input);
	}
//Music Player
    var playlist = [
        {
			mp3: 'music/01.mp3',
			ogg: 'music/01.ogg'
		},
	    {
			mp3: 'music/02.mp3',
			ogg: 'music/02.ogg'
		},
	    {
			mp3: 'music/03.mp3',
			ogg: 'music/03.ogg'
		},
        {
			mp3: 'music/04.mp3',
			ogg: 'music/04.ogg'
			},
        {
			mp3: 'music/05.mp3',
			ogg: 'music/05.ogg'
			},
        {
			mp3: 'music/06.mp3',
			ogg: 'music/06.ogg'
		},
        {
			mp3: 'music/07.mp3',
			ogg: 'music/07.ogg'
		},
        {
			mp3: 'music/08.mp3',
			ogg: 'music/08.ogg'
		},
        {
			mp3: 'music/09.mp3',
			ogg: 'music/09.ogg'
		},
        {
			mp3: 'music/10.mp3',
			ogg: 'music/10.ogg'
		},
        {
			mp3: 'music/11.mp3',
			ogg: 'music/11.ogg'
		},
        {
			mp3: 'music/12.mp3',
			ogg: 'music/12.ogg'
		},
        {
			mp3: 'music/13.mp3',
			ogg: 'music/13.ogg'
		},
        {
			mp3: 'music/14.mp3',
			ogg: 'music/14.ogg'
		},
        {
			mp3: 'music/15.mp3',
			ogg: 'music/15.ogg'
		},
        {
			mp3: 'music/16.mp3',
			ogg: 'music/16.ogg'
		},
        {
			mp3: 'music/17.mp3',
			ogg: 'music/17.ogg'
		},
        {
			mp3: 'music/18.mp3',
			ogg: 'music/18.ogg'
		},
        {
			mp3: 'music/19.mp3',
			ogg: 'music/19.ogg'
		},
	];
	
	var isPlaying,  currentTrack,
		currentTrack = 0,
		autoplay = true;
	
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
	
	loadTrack(currentTrack);
    
//Sound Effects
    var explosion = new Audio();


//Save files
    var creat = new Date();
    var now = new Date();
    //var newSave = new Array();
    var getSave = new Array();
    var saveLength = 5;
    var selectSlot;

	function LSupdate(pending,update){
		//add 1 to the version
		pending.version ++;
		//update last save date
		pending.lastSave = now.customFormat("#MMM# #D##th# #hh#:#mm#");
		//update the version
		localStorage.setItem(update,JSON.stringify(pending));
	}
	
	function LSget(pending,getData){
		//get data from localStorage
		pending = JSON.parse(localStorage.getItem(getData));
	}
    
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
	
	function GameStart(){
		hideDiv('#main');
		fadeInDiv('#gamefield');
		fadeInDiv('#nonPause');
		gamestart = true;
		enemyNum = 0;
		levelSelect(level);
		gameLoop = window.setInterval(enemyMaker, enemyDelay);
		bgInterval = window.setInterval(bgAnimation, 1000/30);
		ended();
		window.clearInterval(mainInterval);
		$('.level').text(level+1);
	}
	
	function saveData(i){
		//if save does not exist
        if(!getSave[i]){
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
        }else{
			//if the save file exit, use it
			selectSlot = i;
			level = getSave[selectSlot].level;
			GameStart();
        }
	}
    

//Motion
    //Animation
  
    var canvas = document.getElementById('myCanvas');
	canvas.width = $('#myCanvas').width();
	canvas.height = $('#myCanvas').height();
    var gamestart = false;
    var enemies;
    var enemyNum = 0;
    var imageObj = new Image();
    
    var stage = new Kinetic.Stage({
            container: 'myCanvas',
            width: canvas.width,
            height: canvas.height
        });
    var layer = new Kinetic.Layer();
    
	var lives = 300;
    var numShield = 0;
    var numBomb = 0;
    var numFreeze = 0;
    var score = 500000;
	var numEnemyKilled = 0;
    var shieldOn = false;

	var rectX = canvas.width/2-50;
	var rectY = canvas.height/2-50;
    var totalEnemies=1;
    var enemyDelay=5000;
    var enemySpeed=20000;
    var enemies = new Array();
    var bgInterval = null;
    var bgPosition = 0;
	var bgImg = new Image();
	bgImg.src = "images/space.png";
    imageObj.src = 'images/obj.png';
    var anim = new Array();
    var pause = false;
    var base = new Object();
    base.rect = new Kinetic.Rect({
        x: stage.getWidth() / 2 -50,
        y: stage.getHeight() / 2 -50,
        width: 100,
        height: 100,
        fill: 'white',
    });
      layer.add(base.rect);
      stage.add(layer);
    
    function submit(){
        
         for(var i = 0; i <enemies.length; i++ ){
             if(input == enemies[i].answer&&enemies[i].alive){
                 cleanEnemy (i);
				 numEnemyKilled ++;
                 input = "";
                 $("#input").text(input);
             }
         }
    }
    
    
    
    
   function enemyMaker ()
   {
       if(gamestart&&enemyNum<totalEnemies&&!pause)
        {
            var side= Math.floor((Math.random())*4+1);
            var question = new QuestionMaker(Math.floor(Math.random()*20)+1, Math.floor(Math.random()*20)+1,Math.floor(Math.random()*4)+1 );
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
            enemies[enemyNum]= new enemy(x, y, question.question, question.answer);
               
            layer.add(enemies[enemyNum].image);
            layer.add(enemies[enemyNum].text);
           
            stage.add(layer);
            
            
            animate(enemyNum);
            
            enemyNum++;
            }
   }
    function levelSelect (level)
    {
        totalEnemies = 1 +3*level;
        enemySpeed = 100000/(5+level);
        enemyDelay = 30000/(5+level);
    }
    function enemy (x_bron, y_bron, question, answer)
    {
        this.answer= answer;
        this.alive= true;
       	this.fixedX= x_bron;
		this.fixedY= y_bron;
        //this.borderWidth= 2;   
        this.xGap = ((canvas.width/2)-x_bron)/enemySpeed;
        this.yGap = ((canvas.height/2)-y_bron)/enemySpeed;
        this.score=1000;
        this.image = new Kinetic.Image({
                x: x_bron,
                y: y_bron,
                width: 50,
                height:60,
                image:imageObj,    
            });
        this.text = new Kinetic.Text({
            x: x_bron,
            y: y_bron,
            text: question,
            fontSize: 20,
            fontFamily: 'Calibri',
            fill: 'white'
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
    
    function cleanEnemy (num)
    {
        explosion.play();
        anim[num].stop();
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
         if(counter==totalEnemies)
         {
			 level++;
			 updateData(selectSlot);
             pause = true;
             fadeInDiv("#levelComplete");
         }
    }
      
      
    function freeze ()
    {
        if(numFreeze>0){
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
                    for(var i =0;i<anim.length;i++)
                     {
                        anim[i].start();
                     }
                    clearInterval(timer);
                    numFreeze--;
                    $('.numFreeze').text('Freeze: ' + numFreeze);
                }
            }, 1000);  
        }
    }
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
            $('.numBomb').text('Bomb: ' + numBomb);
        }
    }
    function shield() 
    {
        if(numShield>0){
            var counter = 0;
             numShield--;
            $('.numShield').text('Shield: ' + numShield);
            shieldOn = true;
            var timer = window.setInterval(function(){
                counter ++;
                if(counter == 5)
                {
                    clearInterval(timer);  
                    shieldOn=false;
                }
            }, 1000);
           
        }
    }
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
    function animate(num) 
    {
        
        anim[num] = new Kinetic.Animation(function(frame) {  
            
            enemies[num].image.setX(enemies[num].fixedX + frame.time*enemies[num].xGap);
            enemies[num].image.setY(enemies[num].fixedY + frame.time*enemies[num].yGap);
            enemies[num].text.setX(enemies[num].fixedX + frame.time*enemies[num].xGap+10);
            enemies[num].text.setY(enemies[num].fixedY + frame.time*enemies[num].yGap-20);
            enemies[num].scoreKeep -= 1000*enemies[num].xGap/
            Math.abs((enemies[num].fixedX-canvas.width/2))
                if(enemies[num].alive && enemies[num].image.attrs.x < base.rect.attrs.x+base.rect.attrs.width && enemies[num].image.attrs.x > base.rect.attrs.x-enemies[num].image.attrs.width
                && enemies[num].image.attrs.y < base.rect.attrs.y+base.rect.attrs.height && enemies[num].image.attrs.y > base.rect.attrs.y-enemies[num].image.attrs.height)
                {
                    cleanEnemy (num);
                    if(!shieldOn){
                        lives-=1;
                        $('.lives').text(lives);
                    }
                }
                
                if(lives <= 0){
                    clearInterval(gameLoop);
                }
        }, layer);
        
        if(!pause){
            anim[num].start();
        }
      }

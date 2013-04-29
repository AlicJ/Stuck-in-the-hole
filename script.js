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
	
    function submit(){
         for(var i = 0; i <= enemyNum; i++ ){
             if(input == enemies[i].answer&&enemies[i].alive){
                 cleanEnemy (i);
                 input = "";
                 $("#input").text(input);
                 enemyNum --;
             }
         }
	}

//Motion
    //Animation
      
  
    var canvas = document.getElementById('myCanvas');
	canvas.width = 1024*0.75;
	canvas.height = 600;
    var gamestart = false;
    var enemies = new Array();
    var enemyNum=0;
    var imageObj = new Image();
    
    var stage = new Kinetic.Stage({
            container: 'myCanvas',
            width:canvas.width,
            height:canvas.height
        });
    var layer = new Kinetic.Layer();
    
	var lives = 300;
    var numShield = 0;
    var numBomb = 0;
    var numFreeze = 0;
    var priceBomb = 1000;
    var priceShield = 2000;
    var priceLife = 3000;
    var priceFreeze = 4000;
    var score = 500000;
    

	var rectX = canvas.width/2-50;
	var rectY = canvas.height/2-50;
   
    var enemies = new Array();
    var bgInterval = null;
    var bgPosition = 0;
	var bgImg = new Image();
	bgImg.src = "space.png";
    imageObj.src = 'obj.png';
    var anim;
    var pause = false;
    
        var gameLoop = window.setInterval(function(){
        if(gamestart&&enemyNum<8&&!pause)
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
           
            animate();
            
            enemyNum++;
            }
        }, 5000);
    var base = new Object();
    base.rect = new Kinetic.Rect({
        x: canvas.width/2 ,
        y: canvas.height/2,
        width: 100,
        height: 100,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
    });
      layer.add(base.rect);
      
    function enemy (x_bron, y_bron, question, answer)
    {
        this.answer= answer;
        this.alive= true;
       	this.fixedX= x_bron;
		this.fixedY= y_bron;
        //this.borderWidth= 2;   
        this.xGap = ((canvas.width/2)-x_bron)/10000;
        this.yGap = ((canvas.height/2)-y_bron)/10000;
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
        bgPosition--;
        $("#myCanvas").css({backgroundPosition: (bgPosition * 5) + "px 0px"});
		if(Math.abs(bgPosition)>=bgImg.width){
			bgPosition = 0;
		}
	}
    bgInterval = window.setInterval(function(){
        if(gamestart&&bgscrolling){
            bgAnimation();
        }
    }, 1000/15);
    
    function cleanEnemy (num)
    {
        enemies[num].alive = false;
        enemies[num].image.hide();
        enemies[num].text.hide();
    }
      
      
    function freeze ()
    {
        if(numFreeze>0){
            anim.stop();
            pause = true;
            var count = 0;
            var timer = setInterval(function(){
                count++;
                if(count==3)
                {
                    pause = false;
                    anim.start();
                    clearInterval(timer);
                }
            }, 1000);  
            numFreeze--;
            $('.numFreeze').text('Freeze: ' + numFreeze);
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
            var timer = setInterval(function(){
                counter ++;
                if(counter == 5)
                {
                    clearInterval(timer);  
                }
            });
            numShield--;
            $('.numShield').text('Shield: ' + numShield);
        }
    }
    function animStop (isPaused)
    {
        if(isPaused)
        {
            anim.stop();
        }
        else
        {
            anim.start();    
        }
    }
    function animate() 
    {
        for(var i=0;i<enemies.length;i++)
        {
            enemies[i].fixedX = enemies[i].image.attrs.x;
            enemies[i].fixedY = enemies[i].image.attrs.y;
        }
        anim = new Kinetic.Animation(function(frame) {  
            
            if(!pause){
            
            for(var i = 0;i<enemies.length;i++)
            {
                if(enemies[i].alive){
                    enemies[i].image.setX(enemies[i].fixedX + frame.time*enemies[i].xGap);
                    enemies[i].image.setY(enemies[i].fixedY + frame.time*enemies[i].yGap);
                    enemies[i].text.setX(enemies[i].fixedX + frame.time*enemies[i].xGap+10);
                    enemies[i].text.setY(enemies[i].fixedY + frame.time*enemies[i].yGap-20);
                }
                
                if(enemies[i].alive && enemies[i].image.attrs.x < base.rect.attrs.x+base.rect.attrs.width && enemies[i].image.attrs.x > base.rect.attrs.x
                && enemies[i].image.attrs.y < base.rect.attrs.y+base.rect.attrs.height && enemies[i].image.attrs.y > base.rect.attrs.y)
                {
                    cleanEnemy (i);
                    lives-=1;
                    $("#result").text("You are hit!");
                    $('.lives').text('Lives: ' + lives);
                }
                
                if(lives <= 0){
                    clearInterval(gameLoop);
                }
            }
            }
        }, layer);
        
        if(!pause){
            anim.start();
        }
      }

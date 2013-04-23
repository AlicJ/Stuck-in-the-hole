//Question Maker
   
    function QuestionMaker(){
	var range = 20;
    var num1 = Math.floor(Math.random()*range)+1;
    var num2 = Math.floor(Math.random()*range)+1;
	var operation = Math.floor(Math.random()*4)+1;
	var answer;
	var question;
        if (Math.max(num1, num2)== num2){
			var switcher = num2;
			num2=num1;
			num1=switcher;
		}
		
		if(operation>=3){
			num1 = halver(num1+1);
			num2 = halver(num2+1);
		}
		
		switch(operation){
			case 1: //addition
				answer = num1 + num2;
				$("#question").text("What is " + num1 + " plus " + num2+ "? ");
				question = num1 + " + " + num2+ " = ? ";
				break;
			case 2: //subtraction
				answer = num1 - num2;
				$("#question").text("What is " + num1 + " minus " + num2+ "? ");
				question = num1 + " - " + num2+ " = ? ";
				break;
			case 3: //multiplication
				answer = num1 * num2;
				$("#question").text("What is " + num1 + " multiplied by " + num2+ "? ");
				question = num1 + " x " + num2+ " = ? ";
				break;
			case 4: //division
				answer = num1;
				num1 *= num2;
				answer = num1 / num2;
				$("#question").text("What is " + num1 + " divided by " + num2+ "? ");
				question = num1 + " / " + num2+ " = ? ";
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
	//	$("#input").append(num);
		input += num;
		$("#input").text(input);
	}
	function clean(){
		input = "";
		$("#input").text(input);
	}
	
	// function submit(){
	// 	if(input == answer){
	// 	    $("#result").text("You are correct.");// + score);	
	// 		clearInterval(gameLoop);
	// 		context.clearRect(enemy1.x-5, enemy1.y-20, enemy1.width, enemy1.height);
	// 		enemy1 = new enemy (Math.floor(Math.random()*4)+1);
	// 		drawEnemy(enemy1, context);
	// 		QuestionMaker();
	// 	}else{
	// 		$("#result").text("You are wrong.");
	// 		}
	// }


//Motion
	  //Animation
      
      
      
    var canvas = document.getElementById('myCanvas');
	canvas.width = 1024*0.8;
	canvas.height = 600;
    var gamestart = false;
    var enemies = new Array();
    var enemyNum=0;
    var imageObj = new Image();
    
    var stage = new Kinetic.Stage({
            container:'myCanvas',
            width:canvas.width,
            height:canvas.height
        });
    var layer = new Kinetic.Layer();
    
    bgInterval = window.setInterval(function(){
        if(gamestart){
            bgAnimation();
                  
             }
        }, 1000/15);
    var score = 10000;
	var lives = 3;

	var rectX = canvas.width/2-50;
	var rectY = canvas.height/2-50;
   
    var enemies = new Array();
    var enemyMaker = new Array();
    var bgInterval = null;
    var bgPosition = 0;
	var bgImg = new Image();
	bgImg.src = "space.jpg";
    
        var gameLoop = setInterval(function(){
        if(gamestart&&enemyNum<8)
        {
            var side= Math.floor(Math.random())*4+1;
            var questions = new QuestionMaker();
            var x_bron;
            var y_bron;
            if(side==2||side==4)
            {
                y_bron= Math.floor(Math.random()*canvas.height)+1;
                if(side==2){
                    x_bron= canvas.width+50;
                }
                else{
                    x_bron=-50;
                }
            }
            else if(side==1||side==3)
            {
                x_bron= Math.floor(Math.random()*canvas.width)+1;
                if(side==3){
                    y_bron= canvas.height+50;
                }
                else{
                	y_bron=-50;
                }
            }
            enemies[enemyNum]= new enemy(x_bron, y_bron, questions);
            //imageObj.onload = new function()
            //{
                
            //};
            //imageObj.src = 'obj.png';
            layer.add(enemies[enemyNum].image);
            stage.add(layer);
            animate();
            enemyNum++;
            }
        }, 3000);
    function enemy (x_bron, y_bron, questions)
    {
        this.question= questions.question;
        this.answer= questions.answer;
        this.alive= true;
       	this.fixedX= x_bron;
		this.fixedY= y_bron;
        this.borderWidth= 2;   
        this.xGap = ((canvas.width/2)-x_bron)/30000;
        this.yGap = ((canvas.height/2)-y_bron)/30000;
        this.image = new Kinetic.Rect({
                x: x_bron,
                y: y_bron,
                width: 50,
                height: 50,
                fill: 'blue',
                stroke: 'white',
                strokeWidth: 2
                
                //image:imageObj,
                //width: 100,
                //height: 125    
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
      //function drawEnemy(target, context) {
		//context.drawImage(imageObj, target.x, target.y);
        
        //context.beginPath();
        //context.rect(rectX,rectY,50,50);
        //context.fillStyle = '#8ED6FF';
        //context.fill();
        //context.lineWidth = target.borderWidth;
		//context.fillStyle = '#FFF';
		//context.font = 'bold 15px Calibri';
        //context.fillText(target.question, target.x, target.y - 5);
        //context.strokeStyle = 'black';
        //context.stroke();
      //}
      function animate() 
      {
        
        var anim = new Kinetic.Animation(function(frame) {  
            for(var i = 0;i<enemies.length;i++)
            {
                if(enemies[i].alive){
                    enemies[i].image.setX(enemies[i].fixedX + frame.time*enemies[i].xGap);
                    enemies[i].image.setY(enemies[i].fixedY + frame.time*enemies[i].yGap);
                    if(enemies[i].image.attrs.x < rectX+80&&enemies[i].image.attrs.x>rectX-100&&enemies[i].image.attrs.y < rectY+80&&enemies[i].image.attrs.y>rectY-100)
                    {
                        clearInterval(gameLoop);
                        $("#result").text("You Lose.");
                        lives-=1;
                    }
                }
            }
            
      }, layer);
          anim.start();
        
	
      }
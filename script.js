//Question Maker
    var range = 20;
    var num1 = Math.floor(Math.random()*range)+1;
	var num2 = Math.floor(Math.random()*range)+1;
	var operation = Math.floor(Math.random()*4)+1;
	var answer;
	var question;
			
    function QuestionMaker(){
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
	
	function submit(){
		if(input == answer){
			$("#result").text("You are correct.");// + score);	
			clearInterval(gameLoop);
			context.clearRect(enemy1.x-5, enemy1.y-20, enemy1.width, enemy1.height);
			enemy1 = new enemy (Math.floor(Math.random()*4)+1);
			drawEnemy(enemy1, context);
			QuestionMaker();
		}else{
			$("#result").text("You are wrong.");
			}
	}


//Motion
	  //Animation
	  var bgInterval = null;
	  var bgPosition = 0;
      var gameLoop = setInterval(function(){
		  bgInterval = window.setInterval(bgAnimation, 200);
		  animate(enemy1, canvas, context);
		  }, 1000/60);
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	  canvas.width = window.innerWidth*0.8;
	  canvas.height = window.innerHeight*0.8;
	  var score = 10000;
	  var lives = 3;
	  var imageObj = new Image();
	  
	  var rectX = canvas.width/2-50;
	  var rectY = canvas.height/2-50;
      imageObj.src = 'obj.png';

	  var bgImg = new Image();
	  bgImg.src = "space.jpg";
	  //Background Animation
	  function bgAnimation() {
    	bgPosition--;
    	$("canvas").css({backgroundPosition: (bgPosition * 1) + "px 0px"});
		if(Math.abs(bgPosition)>=bgImg.width){
			bgPosition = 0;
			}
		}


	  function enemy (side) {
        if(side==2||side==4)
		{
			this.y= Math.floor(Math.random()*canvas.height)+1;
			if(side==2)
				this.x= canvas.width+50;
			else
				this.x=-50;
		}
		else if(side==1||side==3)
		{
			this.x= Math.floor(Math.random()*canvas.width)+1;
			if(side==3)
				this.y= canvas.height+50;
			else
				this.y=-50;
		}
       
	
		this.fixedX= this.x;
		this.fixedY= this.y;
        this.width= 100;
        this.height= 125;
        this.borderWidth=  2
     }
	  var enemy1 = new enemy (Math.floor(Math.random()*4)+1);
      function drawEnemy(enemy1, context) {
		context.drawImage(imageObj, enemy1.x, enemy1.y);
        
        //context.beginPath();
        context.rect(rectX,rectY,50,50);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = enemy1.borderWidth;
		context.fillStyle = '#FFF';
		context.font = 'bold 15px Calibri';
      	context.fillText(question, enemy1.x, enemy1.y - 5);
        //context.strokeStyle = 'black';
        context.stroke();
      }
      function animate(target, canvas, context) {
        newX = (target.fixedX - rectX)/30000*60;
		newY = (target.fixedY - rectY)/30000*60;
		score = Math.round(score-1000/60);
		
        if(target.x > rectX||target.x<rectX-80) {
          target.x -= newX;
		 }
		
		 if(target.y > rectY-50||target.y<rectY){
			target.y-= newY;
		 }
		 
		// clear
        context.clearRect(0, 0, canvas.width, canvas.height);
		//draw again
        drawEnemy(enemy1, context);
        
		if(target.x < rectX+80&&target.x>rectX-100&&target.y < rectY+80&&target.y>rectY-100)
		{
			clearInterval(gameLoop);
			$("#result").text("You Lose.");
			lives-=1;
			context.clearRect(enemy1.x-5, enemy1.y-20, enemy1.width, enemy1.height);
			enemy1 = new enemy (Math.floor(Math.random()*4)+1);
			drawEnemy(enemy1, context);
			QuestionMaker();
		}



      }		
	      drawEnemy(enemy1, context);



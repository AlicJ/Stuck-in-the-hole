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
	// 		//$("#result").text("You are correct.");// + score);	
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
      var context = canvas.getContext('2d');
	  canvas.width = window.innerWidth*0.8;
	  canvas.height = window.innerHeight*0.8;
      var gamestart = false;

      
          bgInterval = window.setInterval(function(){
              if(gamestart){
                  bgAnimation();
              }
          }, 1000/15);
    	  var gameLoop = setInterval(function(){
              if(gamestart){
                  context.clearRect(0, 0, canvas.width, canvas.height);
                  counter++;
                     if(counter>60)
                     {
                         counter=0;
                         if(enemyNum >8)
                         {
                             maxEnemy= true;
                         }
                           
                        if(!maxEnemy)
                        {
                            enemies [enemyNum] = new enemy (Math.floor(Math.random()*4)+1);
                            enemyNum +=1;
                        }
                     }
                 for(var i =0; i<=enemyNum;i++)
                 {
                     if(enemies[i].alive)
                     {
                         animate(enemies[i], canvas, context);
                     }
                   
                 }
              }  
        }, 50);

      var score = 10000;
	  var lives = 3;
	  var imageObj = new Image();
	  var enemyNum=0;
	  var rectX = canvas.width/2-50;
	  var rectY = canvas.height/2-50;
      imageObj.src = 'obj.png';
      var enemies = new Array();
      var enemyMaker = new Array();
      var bgInterval = null;
      var bgPosition = 0;
      var counter = 0;
      var maxEnemy = false;
   
	  var bgImg = new Image();
	  bgImg.src = "space.jpg";
	  //Background Animation
	  function bgAnimation() {
    	bgPosition--;
    	$("canvas").css({backgroundPosition: (bgPosition * 5) + "px 0px"});
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
        questions = new QuestionMaker();
        this.question = questions.question;
        this.answer = questions.answer;
	    this.alive = true;
		this.fixedX= this.x;
		this.fixedY= this.y;
        this.width= 100;
        this.height= 125;
        this.borderWidth=2;
        
     }
      function drawEnemy(target, context) {
		context.drawImage(imageObj, target.x, target.y);
        
        //context.beginPath();
        context.rect(rectX,rectY,50,50);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = target.borderWidth;
		context.fillStyle = '#FFF';
		context.font = 'bold 15px Calibri';
      	context.fillText(target.question, target.x, target.y - 5);
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
		 
        
		//draw again
        drawEnemy(target, context);
        
		if(target.x < rectX+80&&target.x>rectX-100&&target.y < rectY+80&&target.y>rectY-100)
		{
			clearInterval(gameLoop);
			$("#result").text("You Lose.");
			lives-=1;
			context.clearRect(target.x-5, target.y-20, target.width, target.height);
			
		}
      }		
	      



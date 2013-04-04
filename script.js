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
				$("#question").append("What is " + num1 + " plus " + num2+ "? ");
				question = "What is " + num1 + " plus " + num2+ "? ";
				break;
			case 2: //subtraction
				answer = num1 - num2;
				$("#question").append("What is " + num1 + " minus " + num2+ "? ");
				question = "What is " + num1 + " minus " + num2+ "? ";
				break;
			case 3: //multiplication
				answer = num1 * num2;
				$("#question").append("What is " + num1 + " multiplied by " + num2+ "? ");
				question = "What is " + num1 + " multiplied by " + num2+ "? ";
				break;
			case 4: //division
				answer = num1;
				num1 *= num2;
				answer = num1 / num2;
				$("#question").append("What is " + num1 + " divided by " + num2+ "? ");
				question = "What is " + num1 + " divided by " + num2+ "? ";
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
		}else{
			$("#result").text("You are wrong.");
			}
	}


//Motion
	  //Animation
      var gameLoop = setInterval(function(){animate(myObj, canvas, context)}, 1000/60);
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	  canvas.width = window.innerWidth*0.8;
	  canvas.height = window.innerHeight*0.8;
	  var score = 10000;
	  var imageObj = new Image();
	  
	  var rectX = 50;
	  var rectY = canvas.height/2-50;
     imageObj.src = 'obj.png';


	  var myObj = {
        x: canvas.width+50,
        y: Math.floor(Math.random()*canvas.height)+1,
		fixedX: canvas.width+50,
		fixedY: Math.floor(Math.random()*canvas.height)+1,
        width: 80,
        height: 50,
        borderWidth: 2
      };
      function drawRectangle(myObj, context) {
		context.drawImage(imageObj, myObj.x, myObj.y);
        
        //context.beginPath();
        context.rect(rectX,rectY,50,50);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = myObj.borderWidth;
		context.fillStyle = '#FFF';
		context.font = 'bold 15px Calibri';
      	context.fillText(question, myObj.x, myObj.y - 5);
        //context.strokeStyle = 'black';
        context.stroke();
      }
      function animate(myObj, canvas, context) {
        newX = (myObj.fixedX - rectX)/2000*60;
		newY = Math.abs((myObj.fixedY - rectY)/2000*60);
		score = Math.round(score-1000/60);
		var X = canvas.width - myObj.width - myObj.borderWidth / 2;
		var Y = canvas.width - myObj.width - myObj.borderWidth / 2;
        if(myObj.x > rectX+100) {
          myObj.x -= newX;
		  if(myObj.fixedY > rectY){
          	  myObj.y -= newY;
		  }else if(myObj.fixedY < rectY){
			  myObj.y += newY;
		  }else{}
        }
		else
		{
			clearInterval(gameLoop);
			$("#result").text("You Lose.");
		}

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawRectangle(myObj, context);

      }		
	      drawRectangle(myObj, context);


		

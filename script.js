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
      var gameLoop = setInterval(function(){animate(myRectangle, canvas, context)}, 1000/60);
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
	  var score = 10000;
	  var myRectangle = {
        x: 0,
        y: 75,
        width: 200,
        height: 50,
        borderWidth: 2
      };
      function drawRectangle(myRectangle, context) {
        context.beginPath();
        context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.lineWidth = myRectangle.borderWidth;
		context.fillStyle = '#FFF';
		context.font = 'bold 15px Calibri';
      	context.fillText(question, myRectangle.x, myRectangle.y - 5);
        context.strokeStyle = 'black';
        context.stroke();
      }
      function animate(myRectangle, canvas, context) {
        var newX = myRectangle.x + 2;
		score = Math.round(score-1000/60);
        if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
          myRectangle.x = newX;
        }
		else
		{
			clearInterval(gameLoop);
			$("#result").text("You Lose.");
		}

        // clear
        context.clearRect(0, 0, canvas.width, canvas.height);

        drawRectangle(myRectangle, context);

      }		
	      drawRectangle(myRectangle, context);


		

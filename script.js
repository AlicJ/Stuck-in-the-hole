//Question Maker
    var problem = new Object();

    function QuestionMaker(){
	var range = 20;
    var num1 = Math.floor(Math.random()*range)+1;
    var num2 = Math.floor(Math.random()*range)+1;
	var operation = Math.floor(Math.random()*4)+1;

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
				problem.answer = num1 + num2;
				$("#question").text("What is " + num1 + " plus " + num2+ "? ");
				problem.question = num1 + " + " + num2+ " = ? ";
				return problem;
			case 2: //subtraction
				problem.answer = num1 - num2;
				$("#question").text("What is " + num1 + " minus " + num2+ "? ");
				problem.question = num1 + " - " + num2+ " = ? ";
				return problem;
			case 3: //multiplication
				problem.answer = num1 * num2;
				$("#question").text("What is " + num1 + " multiplied by " + num2+ "? ");
				problem.question = num1 + " x " + num2+ " = ? ";
				return problem;
			case 4: //division
				var answer = num1;
				num1 *= num2;
				problem.answer = num1 / num2;
				$("#question").text("What is " + num1 + " divided by " + num2+ "? ");
				problem.question = num1 + " / " + num2+ " = ? ";
				return problem;
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
    //  if(input == answer){
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
            container: 'myCanvas',
            width:canvas.width,
            height:canvas.height
        });
    var layer = new Kinetic.Layer();
    
    bgInterval = window.setInterval(function(){
        if(gamestart&&bgscrolling){
            bgAnimation();
                  
             }
        }, 1000/15);
	var lives = 3;

	var rectX = canvas.width/2-50;
	var rectY = canvas.height/2-50;
   
    var enemies = new Array();
    var bgInterval = null;
    var bgPosition = 0;
	var bgImg = new Image();
	bgImg.src = "space.png";
    imageObj.src = 'obj.png';
    
        var gameLoop = setInterval(function(){
        if(gamestart&&enemyNum<8)
        {
            var side= Math.floor((Math.random())*4+1);
            QuestionMaker();
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
            enemies[enemyNum]= new enemy(x, y);
               
            layer.add(enemies[enemyNum].image);
            layer.add(enemies[enemyNum].text);
           
           stage.add(layer);
           
            animate();
            
             enemyNum++;
            }
        }, 5000);
    function enemy (x_bron, y_bron)
    {
        this.answer= problem.answer;
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
            text: problem.question,
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
        for(var i=0;i<enemies.length;i++)
        {
            enemies[i].fixedX = enemies[i].image.attrs.x;
            enemies[i].fixedY = enemies[i].image.attrs.y;
        }
        var anim = new Kinetic.Animation(function(frame) {  
            
            for(var i = 0;i<enemies.length;i++)
            {
              enemies[i].image.setX(enemies[i].fixedX + frame.time*enemies[i].xGap);
              enemies[i].image.setY(enemies[i].fixedY + frame.time*enemies[i].yGap);
              enemies[i].text.setX(enemies[i].fixedX + frame.time*enemies[i].xGap+10);
              enemies[i].text.setY(enemies[i].fixedY + frame.time*enemies[i].yGap-20);
              
            if(enemies[i].image.attrs.x < rectX+30&&enemies[i].image.attrs.x>rectX-30&&enemies[i].image.attrs.y-30 < rectY&&enemies[i].image.attrs.y>rectY+40)
            {
                clearInterval(gameLoop);
                $("#result").text("You Lose.")
                lives-=1;
			}
            
         
           }
        }, layer);
          
        anim.start();
      }

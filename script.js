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
				var answer = num1;
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
                 enemies[i].alive = false;
                 enemies[i].image.hide();
                 enemies[i].text.hide();
                 input = "";
                 $("#input").text(input);
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
    
	var lives = 3;

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
    
        var gameLoop = setInterval(function(){
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
        if(gamestart&&bgscrolling&&!pause){
            bgAnimation();
        }
    }, 1000/15);
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
      function snow ()
      {
          anim.stop();
          pause = true;
          var count = 0;
            var timer = setInterval(function(){
                count++;
                if(count=3)
                    {
                        pause=false;
                        anim.start();
                        clearInterval(timer);
                    }
            }, 1000);   
      }
      function bomb ()
      {
          for(var i =0;i<enemies.length;i++)
          {
              if(enemies[i].alive)
              {
                 enemies[i].alive = false;
                 enemies[i].image.hide();
                 enemies[i].text.hide();
              }
          }
      }
      function shield() 
      {
          var counter = 0;
          var timer = setInterval(function(){
              counter ++;
              if(counter = 5)
              {
                  clearInterval(timer);
                  
              }
          });    
      }
      function animate() 
      {
        for(var i=0;i<enemies.length;i++)
        {
            enemies[i].fixedX = enemies[i].image.attrs.x;
            enemies[i].fixedY = enemies[i].image.attrs.y;
        }
        anim = new Kinetic.Animation(function(frame) {  
            
            for(var i = 0;i<enemies.length;i++)
            {
                if(enemies[i].alive){
                    enemies[i].image.setX(enemies[i].fixedX + frame.time*enemies[i].xGap);
                    enemies[i].image.setY(enemies[i].fixedY + frame.time*enemies[i].yGap);
                    enemies[i].text.setX(enemies[i].fixedX + frame.time*enemies[i].xGap+10);
                    enemies[i].text.setY(enemies[i].fixedY + frame.time*enemies[i].yGap-20);
                }
                
                if(enemies[i].image.attrs.x < canvas.width/2+100&&enemies[i].image.attrs.x>canvas.width/2&&enemies[i].image.attrs.y < canvas.height/2&&enemies[i].image.attrs.y>canvas.height/2-100)
                {
                    clearInterval(gameLoop);

                    $("#result").text("You Lose.");
                    lives-=1;
			    }
            
         
           }
        }, layer);
        
        if(!pause){
            anim.start();
        }
      }

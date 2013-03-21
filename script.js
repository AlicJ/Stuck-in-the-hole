var range = 20;
var num1 = Math.floor(Math.random()*range)+1;
var num2 = Math.floor(Math.random()*range)+1;
var operation = Math.floor(Math.random()*4)+1;
var answer
		
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
				$("#question").append("what is " + num1 + " plus " + num2+ "? ");
				break;
			case 2: //subtraction
				answer = num1 - num2;
				$("#question").append("what is " + num1 + " minus " + num2+ "? ");
				break;
			case 3: //multiplication
				answer = num1 * num2;
				$("#question").append("what is " + num1 + " multiplied by " + num2+ "? ");
				break;
			case 4: //division
				answer = num1;
				num1 *= num2;
				answer = num1 / num2;
				$("#question").append("what is " + num1 + " divided by " + num2+ "? ");
				break;
		}
    }
		
		$(document).ready(function() {
			$("#submit").click(function(){
				var value = $("#value").val();
				//alert(answer);
				//confirm(value);
				if(value == answer){
					$("#result").text("You are correct.");	
				}else{
					$("#result").text("You are wrong.");
				}
			})
		});
		
		function halver (number){
		if(number>10){
			number /=2;
		}
		return Math.floor(number);
		}
		
			
		//$(document).ready(function(){
		//	$("#container").append("<input type=\"submit\" id=\"" + num1 + "\" value=\"" + num1 + "\"/>");
		//	$("#container").append("<input type=\"submit\" id=\"" + num2 + "\" value=\"" + num2 + "\"/>");
		//	$('#'+num1).click(function(){
		//		$("#container").append("<div>"+num1+"</div>");
		//	});
		//	$('#'+num2).click(function(){
		//		$("#container").append("<div>"+num2+"</div>");
		//	});
		//});
		

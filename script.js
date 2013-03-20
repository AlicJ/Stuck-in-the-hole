function questionMaker()
{
    var num1 = Math.round(20*Math.random());
	var num2 = Math.round(20*Math.random());
	if (Math.max(num1, num2)== num2)
	{
		var switcher = num2;
		num2=num1;
		num1=switcher;
	}
	var operation = Math.round(4*Math.random()+1);
	var answer;
	
	if(operation==1) 
	{
		answer = num1+num2;
		return num1 + " + " + num2 + " = " + answer;
	}
	else if(operation==2)
	{
		answer = num1-num2;
		return num1 + " - " + num2 + " = " + answer;
	}
	else if(operation>=3)
	{
		num1 = halver(num1+1);
		num2 = halver(num2+1);
		if(operation ==3)
		{
			answer = num1*num2;
			return num1 + " * " + num2 +" = " +answer;
		}
		else
		{
			answer = num1;
			num1 *=num2;
			return num1 + " / " + num2 + " = " + answer;
		}
}
}
function halver (number)
{
	if(number>10)
	{
		number /=2;
	}
	return Math.round(number);
}
function aaaaaaa()
{
	$("#output").append(questionMaker);
    $("#output").append("<input type=\"text\" />");
}








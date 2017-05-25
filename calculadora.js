$(function(){
    
    $("#contenedor").draggable();
    var op= true;
	$(".numero").click(pintar);
	$(".numeroc").click(pintar);
    $("#igual").click(resultado);
    $("#borrar").click(borrar);
    $('#on').click(on);
    $('#off').click(off);
    $("#opcion2").click(cientifica);
    $('#kitty').click(temak);
    $('#jungle').click(temaj);
    $('#standar').click(temas);

   
       function temak()
       {
       	//alert("entra");
       	$('#contenedor').css('backgroundImage', 'url(img/hk1.jpg)');
       	$('.numero').css('backgroundColor', 'lightpink');
       	$('.numeroc').css('backgroundColor', 'deeppink');
       	$('.igual').css('backgroundColor', 'palevioletred');
       	$('.igual').css('borderColor', 'cornsilk');
       	$('.borrar').css('backgroundColor', 'lightpink');
       	$('.borrar').css('borderColor', 'mediumblue');
       	$('.listab').css('background', 'lightpink');
       	$('.listab').css('borderColor', 'deeppink');
    	}

    	function temaj()
       {
       	
       	$('#contenedor').css('backgroundImage', 'url(img/j1.jpg)');
       	$('.numero').css('backgroundColor', 'lightgreen');
       	$('.numeroc').css('backgroundColor', 'green');
       	$('.igual').css('backgroundColor', 'turquoise');
       	$('.igual').css('borderColor', 'cornsilk');
       	$('.borrar').css('backgroundColor', 'lightgreen');
       	$('.borrar').css('borderColor', 'turquoise');
       	$('.listab').css('background', 'lightgreen');
       	$('.listab').css('borderColor', 'green');
    	}

    	function temas()
       {
       	
       	$('#contenedor').css('backgroundImage', 'url(img/text7.jpg)');
       	$('.numero').css('backgroundColor', 'whitesmoke');
       	$('.numeroc').css('backgroundColor', 'black');
       	$('.igual').css('backgroundColor', 'whitesmoke');
       	$('.igual').css('borderColor', 'black');
       	$('.borrar').css('backgroundColor', 'mediumblue');
       	$('.borrar').css('borderColor', 'mediumblue');
       	$('.listab').css('background', 'black');
       	$('.listab').css('borderColor', '#545454');
    	}



    function cientifica()
    {
       ;
        if (op==true)
        {    
        $("#cientifica").css("display", "flex");
            $("#opcion2").text("Basic");
            $("#contenedor").css("height", "80%");
            $("#calcu").css("margin-top", "-3%");
            
          
            
            op=false;
          
        }
        else if(op==false)
        {
            $("#cientifica").css("display", "none");
            $("#opcion2").text("Cientifica");
            $("#contenedor").css("height", "60%");
             $("#calcu").css("margin-top", "6%");
            op=true;
        }
    }
;

    
    function pintar()
	{
//		
        var a = $("#pantalla").val() + $(this).html();
	    $("#pantalla").val(a);
	}


    
    function resultado()
    {           
        var resul= $("#pantalla").val();
        $("#pantalla").val(eval(resul));
    }
    
    function borrar()
    {
        $("#pantalla").val("");
    }


    function on()
    {
        //alert ("Bienvenid@ a la Version 2.0 de la Calculadora: Calculadora Solar");
        $("#pantalla").val("");
        $('#pantalla').css('background', '#E9E79B');
        $('#pantalla').css('color', 'green');
  
    }

    function off()
    {
        // alert ("gracias por utilizar Calculadora Solar");

        $('#pantalla').css('background', '#A6B9A1');
        $('#pantalla').css('color', '#A6B9A1');
  
    
    }
	
});


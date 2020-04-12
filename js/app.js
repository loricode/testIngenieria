$(document).ready(function(){
    var usuario = "";
    var actual = 1;
    var puntos = 0;
    var tam = $('#botones p span ').length;
    $("#contenido>section").hide();
    $("#acceso").show();
    
    $("#usuario").attr("value", "");
    $("#usuario").focus();

    $("#btn-ingresar").click(function(){
        if($("#usuario").val()==""){
            alert("Debe ingresar un nombre");
            $("#usuario").css("background-color", "red");
            $("#usuario").focus();
            return false; 
        }
        usuario = $("#usuario").val();
        $("#acceso").hide();
        $("#test").show();
        $("#nombre-usuario").html(usuario);
    });

    $("#usuario").click(function(){
        $("#usuario").css("background-color", "white");
    });

    $("[id^='p-']").hide();
    $("#p-1").show();
    
    $("[id^='b-']").click(function(){        
        $("[id^='p-']").hide();
        //$("[id^='b-']").css("background-color","#dddddd");
        var id = $(this).attr("id");
        var arreglo = id.split("-");
        console.log(arreglo)
        var actual = arreglo[1];
        $("#p-"+actual).show();        
        //$("#b-"+actual).css("background-color","#888888");
    });



    $("#adelante").on('click',function(){
        $("[id^='p-']").hide();
        if(actual >= tam){
            $("#adelante").off()
        }else{
            actual++
        }
        //var siguiente = $('#botones p span ').siblings()
        var ids = $("[id^='b-"+actual+"']")
        var id = ids.attr('id')
        var arreglo = id.split('-')
        var po = arreglo[1];
        $("#p-"+po).show();
        console.log(po)
        })

        $("#atras").on('click',function(){
            $("[id^='p-']").hide();

            if(actual <= 1){
                $("#adelante").off()
            }else{
                actual--
            }
            //var siguiente = $('#botones p span ').siblings()
            var ids = $("[id^='b-"+actual+"']")
            var id = ids.attr('id')
            var arreglo = id.split('-')
            var po = arreglo[1];
            $("#p-"+po).show();
            console.log(po)
            })

    



   
    $("[id^='btn-calificar-']").click(function(){
        var id = $(this).attr("id");
        var arreglo = id.split("-");
        var pregunta = arreglo[2];
        if(pregunta==1){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='b'){                
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{                
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }

        if(pregunta==2){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='a'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }

        if(pregunta==3){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            
            console.log(opcion)
            if(opcion=='b'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==4){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='c'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==5){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='d'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
        if(pregunta==6){
            var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
            if(opcion=='c'){
                $("#b-"+pregunta).css("background-color","#00ff00");
                puntos = puntos + 0.555;
            }   
            else{
                $("#b-"+pregunta).css("background-color","#ff0000");
            }
        }
            if(pregunta==7){
                var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
                if(opcion=='a'){
                    $("#b-"+pregunta).css("background-color","#00ff00");
                    puntos = puntos + 0.555;
                }   
                else{
                    $("#b-"+pregunta).css("background-color","#ff0000");
                }}

                if(pregunta==8){
                    var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
                    if(opcion=='d'){
                        $("#b-"+pregunta).css("background-color","#00ff00");
                        puntos = puntos + 0.555;
                    }   
                    else{
                        $("#b-"+pregunta).css("background-color","#ff0000");
                    }}
                    if(pregunta==9){
                        var opcion = $('input:radio[name=r-'+pregunta+']:checked').val();
                        if(opcion=='a'){
                            $("#b-"+pregunta).css("background-color","#00ff00");
                            puntos = puntos + 0.555;
                        }   
                        else{
                            $("#b-"+pregunta).css("background-color","#ff0000");
                        }

        }        



        $("#p-"+pregunta).hide();
        var siguiente = pregunta;
        siguiente++;        
        $("#p-"+siguiente).show();
        $("#puntos").html(puntos);
    });
    
});
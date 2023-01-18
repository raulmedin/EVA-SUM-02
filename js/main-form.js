// console.log("acceso establecido");
function valForm(){
    console.log("accesoo establecido a la funcion");
    var vNom =$('#nombre').val();
    var vMail =$('#correo').val();
    var vMensaje=$('#mensaje').val();
    var vfecha=$('#fecha');
    var vRut=$('#rut');




    //validar campo nombre
    if(vNom == "" || vNom == null){
        Err_color("nombre");
        Err_contenido(" campo nombre");
    }else{
        var expresion=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*$/;
        if(!expresion.test(vNom)){
            Err_color("nombre");
            Err_contenido(" no se permite caracteres especificos");
            return false;
        }

    } 

    // validar campo de correo
    if(vMail == "" || vMail == null){
        Err_color("correo");
        Err_contenido("campo correo");
        return false;
    }else{
        var expresion=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(vMail)){
            Err_color("correo");
            Err_contenido(" correo, Formato no valido");
            return false;
        }


    }
   



  


    $('form').submit();
    return true;
    

}




function Err_color(dato){
   $('#'+dato).css('border','1px solid #dd5144');
}

function Err_contenido(dato){
    alert("Error en el ingreso" + dato);
}






function colorDefault(dato){
    $('#'+ dato).css('border','1px solid #999');
}


$('input').focus(function(){
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('mensaje');
    colorDefault('fecha');
    colorDefault('rut');


})












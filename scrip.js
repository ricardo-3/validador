 



function calcularEdad() {    
    let name = document.getElementById('nombres').value;
    let años = document.getElementById('edad').value;        


    if(años > 60){        
        document.getElementById("titulo").innerHTML =" Hola " + name + " eres un viejo"
    }
    else if(años < 18){
        document.getElementById("titulo").innerHTML =" Hola " + name + " eres menor de edad"
        
    }else if( años >= 18){
        document.getElementById("titulo").innerHTML =" Hola " + name + " eres Mayor de edad"        
    }else { 
        document.getElementById("titulo").innerHTML =" Validar edad"
      } 
}

function reseteo() {
    button.reset();    
}


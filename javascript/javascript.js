var num1;
var num2;
var signo="";

function main(){
   //variables
   var uno=document.getElementById("uno");
   var dos=document.getElementById("dos");
   var tres=document.getElementById("tres");
   var cuatro=document.getElementById("cuatro");
   var cinco=document.getElementById("cinco");
   var seis=document.getElementById("seis");
   var siete=document.getElementById("siete");
   var ocho=document.getElementById("ocho");
   var nueve=document.getElementById("nueve");
   var cero=document.getElementById("cero");
   var multi=document.getElementById("multi");
   var division=document.getElementById("division");
   var resta=document.getElementById("resta");
   var suma=document.getElementById("suma");
   var igual=document.getElementById("igual");
   var reset=document.getElementById("reset");
   var resultado=document.getElementById("resultado");
   
   //eventos

//AGREGAR NUMEROS
uno.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "1" ;
}
dos.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "2" ;
}
tres.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "3" ;
}
cuatro.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "4" ;
}
cinco.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "5" ;
}
seis.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "6" ;
}
siete.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "7" ;
}
ocho.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "8" ;
}
nueve.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "9" ;
}
cero.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "0" ;

}

//RESET

reset.onclick=function reset(){
    resultado.textContent="";
    num1=0;
    num2=0;
    signo="";
 }

 
 

//SUMAR
  suma.onclick=function s(){
    num1=resultado.textContent;
    signo="+";
    resultado.textContent="";
}
  resta.onclick=function s(){
    num1=resultado.textContent;
    signo="-";
    resultado.textContent="";
  }
  division.onclick=function s(){
    num1=resultado.textContent;
    signo="/";
    resultado.textContent="";
  }
  multi.onclick=function s(){
    num1=resultado.textContent;
    signo="*";
    resultado.textContent="";
  }



//IGUAL
igual.onclick= function i(){
  num2=resultado.textContent;
  
  var res=0;
  switch(signo){
    case "+":
        res=parseInt(num1)+parseInt(num2);
         break;
    case "-":
        res=num1-num2;
        break;
    case "/":
        res=num1/num2;
        break;
    case "*":
        res=num1*num2;
        break;
    default: alert("ERROR");              
    }
    num1=0;
    num2=0;
    signo="";
    resultado.textContent=res;
     
}
}

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
   var punto=document.getElementById("punto");
   var multi=document.getElementById("multi");
   var division=document.getElementById("division");
   var resta=document.getElementById("resta");
   var suma=document.getElementById("suma");
   var igual=document.getElementById("igual");
   var reset=document.getElementById("reset");
   var resultado=document.getElementById("resultado");
   var resultadoP=document.getElementById("resultadoP");
   
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
punto.onclick=function e(){
    
    resultado.textContent=resultado.textContent + "." ;

}



//RESET

reset.onclick=function reset(){
    resultado.textContent="";
    num1=0;
    num2=0;
    signo="";
    resultadoP.textContent="";
    resetColor();
 }

 
 

//SUMAR
  suma.onclick=function s(){
    num1=resultado.textContent;
    resultadoP.textContent=resultado.textContent + "+";
    resultadoP.style.color="black";
    signo="+";
    resultado.textContent="";
    suma.style.backgroundColor= "#74e7ed";
}
  resta.onclick=function s(){
    num1=resultado.textContent;
    resultadoP.textContent=resultado.textContent + "-";
    resultadoP.style.color="black";
    signo="-";
    resultado.textContent="";
    resta.style.backgroundColor= "#74e7ed";
  }
  division.onclick=function s(){
    num1=resultado.textContent;
    resultadoP.textContent=resultado.textContent + "/";
    resultadoP.style.color="black";
    signo="/";
    resultado.textContent="";
    division.style.backgroundColor= "#74e7ed";
  }
  multi.onclick=function s(){
    num1=resultado.textContent;
    resultadoP.textContent=resultado.textContent + "x";
    resultadoP.style.color="black";
    signo="*";
    resultado.textContent="";
    multi.style.backgroundColor= "#74e7ed";
  }



//IGUAL
igual.onclick= function i(){

  num2=resultado.textContent;
  
  var res=0;
  switch(signo){
    case "+":
        res=parseFloat(num1)+parseFloat(num2);
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
    resultadoP.textContent+=num2;
    resultadoP.style.color="rgb(190, 190, 190)";
    num1=0;
    num2=0;
    signo="";
    resultado.textContent=res;
    resetColor();
}

function resetColor(){
    multi.style.backgroundColor="#ffffff";
    division.style.backgroundColor="#ffffff";
    resta.style.backgroundColor="#ffffff";
    suma.style.backgroundColor="#ffffff";
}
}


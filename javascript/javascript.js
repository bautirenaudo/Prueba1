function main(){
    //variables
    let cont= document.getElementById("cont");
    let fondo= document.getElementById("fondo");
    let tuerca= document.getElementById("tuerca");
    
    var i=0;


    //eventos

    fondo.onclick=function(){
        if(i==0)/*abro*/{
            fondo.style.cssText="justify-content: flex-end;background-color:rgb(0, 207, 0);"; 
            i++;
        }else/*cierro*/{
            fondo.style.cssText="justify-content: left;background-color:rgb(197, 0, 0);";
            i=0;
        }
         
          
    }
   
    
}
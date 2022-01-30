
document.addEventListener("DOMContentLoaded",()=>{
    const vela = document.getElementById("velaId");
    const velaDiv = document.getElementById("velaIdDiv");
    const estrellita = document.getElementById("estrellita");
    const boton = document.querySelector(".btn-primary");
    
    

    boton.addEventListener( "click" ,()=>{
        var i = 255;
        var c = 0
        let brig = 0

        var sumatop = 100;
        let estrellasize = 300;
        let estrellaleft = 0;
        var refreshVela = setInterval(() => {

            if (brig < 1){
                brig=brig+0.1;
                vela.style.filter = "brightness("+brig+")";
            }

            if(estrellaleft>0){
                estrellaleft=estrellaleft;
                estrellita.style.marginLeft= estrellaleft + "px"
            }
            if(estrellasize < 1900){
                estrellasize=estrellasize+5;
                
                estrellita.style.width = estrellasize + "px"
            }
        
            if (c < 100){
                c++;
                estrellita.style.opacity = c + "%";
                if (c<20){
                    vela.style.filter = "brightness("+(1-(c/100))+")";
                }
            }
        
            if (sumatop >-140){
                sumatop = sumatop - 1;
                estrellita.style.marginTop  =  sumatop + "px";
            }

            if (i>0){
                i--;
                velaDiv.style.backgroundColor = `rgb(${i}, ${i}, ${i})`;
            }
            console.log("i:"+i+" c:"+c+" Sumatop:"+sumatop+" Left:"+estrellaleft+" Size:"+estrellasize)
            if (i === 0 && c===100 && sumatop===-140 && estrellasize === 1900 && estrellaleft === 0){
                //vela.style.backgroundImage = "url(../img/velanoche.png)";
                clearInterval(refreshVela);
                
            } 
            
        
    }, 0010);

    console.log("fuera");});
    })


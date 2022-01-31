//document.addEventListener("DOMContentLoaded",()=>{
    const vela = document.getElementById("velaId");
    const gato = document.getElementById("gatoLuz");
    const velaDiv = document.getElementById("velaIdDiv");
    const gatoPiedra = document.getElementById("gatoPiedra");
    const mar = document.getElementById("sea");
    const estrellita = document.getElementById("estrellita");

    var visiVela=false;
    var visiGato=false;
    var visiMar=false;
    var visiGatoPiedra=false;

    window.addEventListener('scroll', function()  {
        let element = document.getElementById('scroll-content');
        let element_gatoLuz = document.getElementById('scroll-content-gatoLuz');
        let element_mar = document.getElementById('scroll-content-mar');
        let element_gatoPiedra = document.getElementById('scroll-content-gatoPiedra');
        let screenSize = window.innerHeight;
        
        if(element_mar.getBoundingClientRect().top < screenSize) {
            console.log("Llegamos al mar")
            if (visiMar===false){
                animaMar();
                visiMar=true;
            }
        } 
        
        if(element.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos a los botes');
            if (visiVela===false){
                animaVela();
                visiVela=true;
            }
        } 

        if(element_gatoLuz.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos al gato en la escalera');
            if (visiGato===false){
                animaGato();
                visiGato=true;
            }
        }

        if(element_gatoPiedra.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos al gatopiedra');
            if (visiGatoPiedra===false){
                animaGatoPiedra();
                visiGatoPiedra=true;
            }
        }
    });

    function animaMar(){
        let brig = 0;
        let subiendo = true;
        if (visiMar===false){
            var refreshMar = setInterval(() => {
                if (brig < 1000) {
                    if(subiendo){
                        brig=brig+0.5;
                    } else {
                        brig=brig-0.5; 
                    }
                    if (brig===0){
                        brig=brig+0.5;
                        subiendo=true
                    }
                    mar.style.backgroundPositionX = brig+"px";                
                } else {
                    if (brig===1000){
                        brig=brig-0.5;
                        subiendo=false;
                    }
                }
        
            })   
        } 
    }

    function animaGato(){
        let brig = 0
        var refreshGato = setInterval(() => {
            if (brig < 1){
                brig=brig+0.001;
                console.log("sumando")
                gato.style.filter = "brightness("+brig+")";
            }
    
            if (brig === 0){
                clearInterval(refreshGato);
            } 
        })    
    }
    function animaGatoPiedra(){
        let brig = 0
        var refreshGatoPiedra = setInterval(() => {
            if (brig < 1){
                brig=brig+0.01;
                gatoPiedra.style.filter = "brightness("+brig+")";
            }
    
            if (brig === 0){
                clearInterval(refreshGatoPiedra);
            } 
        })    
    }
    function animaVela(){
        var i = 255;
        var c = 0
        let brig = 0
        var sumatop = 100;
        let estrellasize = 300;
        var refreshVela = setInterval(() => {

            if (brig < 1){
                brig=brig+0.1;
                vela.style.filter = "brightness("+brig+")";
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

            if (i === 0 && c===100 && sumatop===-140 && estrellasize === 1900){
                clearInterval(refreshVela);
            } 
        }, 0010);
    }
//})

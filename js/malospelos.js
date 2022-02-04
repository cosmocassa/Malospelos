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
//Menu
const body = document.querySelector('body'),
   
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    console.log(sidebar.classList)
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
    }
});

//MENU FIN
    window.addEventListener('scroll', function()  {
        let element = document.getElementById('scroll-content');
        let element_gatoLuz = document.getElementById('scroll-content-gatoLuz');
        let element_mar = document.getElementById('scroll-content-mar');
        let element_gatoPiedra = document.getElementById('scroll-content-gatoPiedra');
        let screenSize = window.innerHeight;
        if(element_mar.getBoundingClientRect().top < screenSize) {
            console.log("Llegamos al mar")
            if (visiMar===false){
                //animacion();
                animaMar();
                visiMar=true;
            }
        } 
        
        if(element.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos a los botes');
            if (visiVela===false){
                //animacion(vela);
                animaVela();
                visiVela=true;
            }
        } 

        if(element_gatoLuz.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos al gato en la escalera');
            if (visiGato===false){
                animacion(gato,0);
                visiGato=true;
            }
        }

        if(element_gatoPiedra.getBoundingClientRect().top < screenSize) {
            console.log('Llegamos al gatopiedra');
            if (visiGatoPiedra===false){
                animacion(gatoPiedra,0);
                visiGatoPiedra=true;
            }
        }
    });

function animacion(elemento,brigParam){
    let brig = brigParam;
    console.log("elemento:"+elemento.id)
    
    var refresh = setInterval(() => {
        
        
        
       
        if (brig < 1){
            brig=brig+0.01;
            console.log("sumando")
            elemento.style.filter = "brightness("+brig+")";
        }

        if (brig === 0){
            clearInterval(refresh);
        } 
    })    
}
    
function animaMar(){
    let brig = 0;
    let subiendo = true;
    if (visiMar===false){
        var refreshMar = setInterval(() => {
            mar.style.backgroundPositionX = brig+"px";               
            if (brig < 1000) {
                if(subiendo){
                    brig=brig+0.5
                } else {
                   brig=brig-0.5; 
                }
                if (brig===0){
                    brig=brig+0.5;
                    subiendo=true
                }
            } else {
                if (brig===1000){
                    brig=brig-0.5;
                    subiendo=false;
                }
            }
        })   
    } 
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

function pageScroll(e) {
    const e2= document.getElementById(e)
    console.log(e2.getBoundingClientRect().top)

    console.log(e2.getBoundingClientRect.top)
    let screenSize = window.innerHeight;
    if (e2.getBoundingClientRect().top + 700 > screenSize){
        window.scrollBy(0,1); // horizontal and vertical scroll increments
        scrolldelay = setTimeout(pageScroll,1,e); // scrolls every 100 milliseconds
    } else{
        stopScroll();
    }
    
}
function stopScroll() {
    clearTimeout(scrolldelay);
}



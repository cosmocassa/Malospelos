const vela = document.getElementById("velaId");
const gato = document.getElementById("gatoLuz");

const texto1 = document.getElementById("table");

const pared_erizo = document.getElementById("pared");
const chimenea_erizo = document.getElementById("chimenea");
const cuadro1_erizo = document.getElementById("cuadro1");
const cuadro2_erizo = document.getElementById("cuadro2");
const cuadro3_erizo = document.getElementById("cuadro3");
const alfombra_erizo = document.getElementById("alfombra");
const mama_erizo = document.getElementById("mamaErizo");
const mesa_erizo = document.getElementById("mesa");

const velaDiv = document.getElementById("velaIdDiv");
const gatoPiedra = document.getElementById("gatoPiedra");
const mar = document.getElementById("sea");
const estrellita = document.getElementById("estrellita");
const body = document.querySelector('body');

var visiVela=false;
var visiErizo=false;
var visiGato=false; 
var visiMar=false;
var visiGatoPiedra=false;

//Menu
sidebar = body.querySelector('nav');
toggle = body.querySelector(".toggle");
searchBtn = body.querySelector(".search-box");
modeSwitch = body.querySelector(".toggle-switch");
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
//Menu fin

// Control cuando va bajando el scroll
window.addEventListener('scroll', function()  {
    let element = document.getElementById('estrellita');
    let element_piedramar = document.getElementById('piedramar1');
    let element_piedramar2 = document.getElementById('piedramar2');
    let element_piedramar3 = document.getElementById('piedramar3');
    let element_erizo = document.getElementById('mesa');
    let element_gatoLuz = document.getElementById('scroll-content-gatoLuz');
    let element_mar = document.getElementById('scroll-content-mar');
    let element_gatoPiedra = document.getElementById('scroll-content-gatoPiedra');
    let screenSize = window.innerHeight;
    if(element_mar.getBoundingClientRect().top < screenSize) {
        console.log("Llegamos al mar")
        if (visiMar===false){
            animaMar();
            animaBrig(element_piedramar,0,1,"opacity",0.001);
            animaBrig(element_piedramar2,0,1,"opacity",0.001);
            animaBrig(element_piedramar3,0,1,"opacity",0.001);
            typeEffect(texto1,1)
            visiMar=true;
        }
    } 

    if(element_erizo.getBoundingClientRect().top < screenSize) {
        if (visiErizo===false){
            console.log("Llegamos a villa Erizo")
            animaBrig(pared_erizo,0,1,"opacity",0.005);
            animaScale(pared_erizo,1600,1784,3)
            animaBrig(chimenea_erizo,0,1,"opacity",0.005);
            animaScale(chimenea_erizo,200,266,3)
            animaBrig(cuadro1_erizo,0,1,"opacity",0.005);
            animaScale(cuadro1_erizo,20,85,3)
            animaBrig(cuadro2_erizo,0,1,"opacity",0.005);
            animaScale(cuadro2_erizo,20,85,3)
            animaBrig(cuadro3_erizo,0,1,"opacity",0.005);
            animaScale(cuadro3_erizo,20,85,3)
            animaBrig(alfombra_erizo,0,1,"opacity",0.005);
            animaScale(alfombra_erizo,200,268,3)
            animaBrig(mama_erizo,0,1,"opacity",0.005);
            animaScale(mama_erizo,200,268,3)
            animaBrig(mesa_erizo,0,1,"opacity",0.005);
            animaScale(mesa_erizo,200,354,3)
            visiErizo=true;
        }
    } 
    
    if(element.getBoundingClientRect().top < screenSize) {
        console.log('Llegamos a los botes');
        if (visiVela===false){
            animaScale(element,200,1784,15)
            animaBrig(element,0,1,"opacity",0.005);
            animaBrig(vela,2,1,"brightness",0.005);

            animaFondo(velaDiv);
            visiVela=true;
        }
    } 

    if(element_gatoLuz.getBoundingClientRect().top < screenSize) {
        console.log('Llegamos al gato en la escalera');
        if (visiGato===false){
            animaBrig(gato,0,1,"opacity",0.005);
            visiGato=true;
        }
    }

    if(element_gatoPiedra.getBoundingClientRect().top < screenSize) {
        console.log('Llegamos al gatopiedra');
        if (visiGatoPiedra===false){
            animaBrig(gatoPiedra,0,1,"opacity",0.005);
            visiGatoPiedra=true;
        }
    }
});

function animaScale(elemento,Ini,Fin,Interval){ //Escala el elemento
    var c = Ini;
    console.log(`Ini:${Ini}`)
    console.log("Fin"+Fin)
    console.log("Id:"+elemento)
    
    var refresh = setInterval(() => {
        if (Ini < Fin){
            if (c < Fin){
                elemento.style.width= `${c}px`
                console.log(`contador:${c}`)
                console.log(`Elemento:${elemento.id} width:${elemento.style.width}`)
                c=c+Interval
            } else{
                if (c> Fin){
                    clearInterval(refresh);
                }
            }
        }
    },60)



    
    
}

function animaBrig(elemento,brigParamIni,brigParamFin,filtro,Intervalo){ //Cambia el brillo
    let brig = brigParamIni;
    console.log("Filtro:"+filtro)
    var refresh = setInterval(() => {
        if (brig != brigParamFin){
            if(brigParamIni < brigParamFin){
                brig=brig+Intervalo;
            } else{
                brig=brig-Intervalo;
            }
            if (filtro==="opacity"){
                elemento.style.filter = "opacity("+brig+")";
            } else {
                elemento.style.filter = "brightness("+brig+")";
            }
        }
        if(brigParamIni < brigParamFin){
            if (brig > brigParamFin){
                clearInterval(refresh);
            } 
        }else{
            if (brig < brigParamFin){
                clearInterval(refresh);
            } 
        }
    },1)    
}


function animaMar(){ //Movimiento izq der Mar
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

function animaFondo(elemento){ //Oscurece background
    var i = 255;
    var refresh = setInterval(() => {
        if (i>0){
            i--;
            elemento.style.backgroundColor = `rgb(${i}, ${i}, ${i})`;
        }

        if (i === 0 ){
            clearInterval(refresh);
        } 
    }, 0010);
}

function pageScroll(e) {
    const e2= document.getElementById(e)
    let screenSize = window.innerHeight;
    
    if (e2.getBoundingClientRect().top > 0){ //baja scroll
        window.scrollBy(0,3); // horizontal and vertical scroll increments
        scrolldelay = setTimeout(pageScroll,0.1,e); // scrolls every 100 milliseconds
        console.log("Bajando")
    } else {
        if (e2.getBoundingClientRect().top < 0){ //sube scroll
            window.scrollBy(0,-3); // horizontal and vertical scroll increments
            scrolldelay = setTimeout(pageScroll,0.1,e); // scrolls every 100 milliseconds
            console.log("Subiendo")
        }
        if (e2.getBoundingClientRect().top > -40 && e2.getBoundingClientRect().top < 40){
            stopScroll();
        }
    }
    console.log(e2.id+" screenSize:"+screenSize+" top:"+e2.getBoundingClientRect().top)
   
    
}

function stopScroll() {
    clearTimeout(scrolldelay);
}

function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function(){
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);


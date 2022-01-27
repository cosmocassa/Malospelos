document.addEventListener("DOMContentLoaded",()=>{
    
    const vela = document.getElementById("velaId");
    const velaDiv = document.getElementById("velaIdDiv");
    const estrellita = document.getElementById("estrellita");
    const boton =document.querySelector(".btn-primary");
    boton.addEventListener("click",()=>{
        let i = 255;
            if (i != 0){
                setTimeout(oscureceFondo,2000,i);
            }
            //velaDiv.style.backgroundColor = `rgb(${i}, ${i}, ${i})`;
            //setTimeout('', 1000);

            //console.log(i);
            
            estrellita.style.visibility = "visible"
            vela.style.backgroundImage = "url(../img/velanoche.png)";


        
    })
    console.log(vela);
});
function oscureceFondo(i){
    console.log(i);
    i--;
}
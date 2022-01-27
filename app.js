

document.addEventListener("DOMContentLoaded",()=>{
    // console.log(document.getElementById("idh1").textContent);
    // console.log(document.querySelector("#idh1"));
    // console.log(document.querySelector(".claseH1"));
    // console.log(document.querySelector("h1"));
    // console.log(document.querySelectorAll(".container .textDanger"));
    const h1 = document.getElementById("idh1");
    const boton = document.querySelector(".btn-primary")
    
    console.log(boton);
    boton.addEventListener("click", ()=>{
        console.log("HOLA");
        h1.textContent="Que haces?";
    })
    
       
    
})

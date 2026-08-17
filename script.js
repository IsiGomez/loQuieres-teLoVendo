const lista = document.getElementById("lista")
const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", ()=>{
    lista.classList.toggle("oculto");
});
